import unirest from 'unirest';
import cheerio from 'cheerio';
import iconv from 'iconv-lite';


import { ReplaySubject } from 'rxjs';

//import { resolve } from 'q';

const log = (i, count, ms) =>	{
	return new Promise(r =>
		 setTimeout(() => {
				console.log(`
					Индекс: ${i};
					Всего записей: ${count}
				`);
				r();
					}, ms),
				);
					
	};

function parsePost(url, elems){
	return new Promise((resolve, reject) => {
	 unirest.get(url).end(({ body, error }) => {

			if (error) reject(error);

			//const body = response.body;
			const $ = cheerio.load(body);

			const domain = url.match(/\/\/(.*?)\//)[1];	
			const title = $(elems.title).text().trim();
			let image = $(elems.image).attr('src');
			image = image.indexOf('http') >= 0 ? image : `http://${domain}${image}`; 
			const text = $(elems.text).text().trim();
			const views = $(elems.views).text().trim();

			const post = {
				title: title,
				image: image, 
				text: text,
				views: views
			};

			//return post;
			resolve(post);

		});
		//await delay(3000);
		//console.log('qwe');
	});
	}

	function parseLinks(url, className, maxLinks = 5){
		return new Promise((resolve, reject) => {

			let links = [];
			unirest.get(url).end(({ body, error }) => {

				if(error) reject(error);	

				const $ = cheerio.load(body);
				const domain = url.match(/\/\/(.*?)\//)[1];	
				
				$(className).each((i, e) => {
					if (i + 1 <= maxLinks) links.push((domain.indexOf('http') ? ('http://' + domain ) : '') + $(e).attr('href'));
				});

				resolve(links);
				if(!links.length) ReplaySubject({ error: 'empty' });
			});

			//if(!links.length) reject({ error: 'empty' }); 

		});
	}

	async function getPosts(links, elems){
	
		let posts = [];
		let count = links.length;
		for(let i = 0; i < count; i++){
			const post = await parsePost(links[i], elems).then(
				post => post,
			);
			posts.push(post);		
			await log(i + 1, count, 2000);
		}
		return new Promise((resolve, reject) => {
			if (!posts.length) reject({ empty: 'empty' });
			resolve(posts);

	});
	}

	export{
		parsePost,
		parseLinks,
		getPosts
	};

//module.exports = parsePost;

/*unirest.get('https://www.riadagestan.ru/news/the_people_s_assembly/khizri_shikhsaidov_prinyal_uchastie_v_zasedanii_antiterroristicheskoy_komissii_v_kaspiyske/').then(function(response){

	const body = response.body;
	const $ = cheerio.load(body);

	const title = $('.itemTitle').text().trim();
	const image = 'https://www.riadagestan.ru' + $('.preview_picture').attr('src');
	const text = $('#qaz').text();
	const views = $('.itemHits b').text().trim();

	const post = {
		title: title,
		image: image, //парсинг ссылки
		text: text,
		views: views
	};

	console.log(post);		

});

function groznyinform(){
	unirest.get('https://grozny-inform.ru/news/politic/111895/').then(function(response){

		const body = response.body;
		const $ = cheerio.load(body);

		const title = $('.news h1').text().trim();
		const image = 'https://grozny-inform.ru/' + $('.imgA ing');
		const text = $('.news p').text();
		const views = $('.news p.views').text();

		const post = {
			title: title,
			image: image, 
			text: text,
			views: views
		};

		console.log(post);

	});
}

function magastimes(){
	unirest.get('http://magastimes.ru/puteshestvie-iz-kokchetava-vo-vladikavkaz/').then(function(response){

		const body = response.body;
		const $ = cheerio.load(body);

		const title = $('.td-post-title .entry-title').text().trim();
		const image = $('.size-full').attr('src');
		const text = $('.td-post-content p').text();
		const views = $('.td-post-views span').text();

		const post = {
			title: title,
			image: image, 
			text: text,
			views: views
		};

		console.log(post);

	});
}*/

