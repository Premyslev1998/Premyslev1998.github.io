import { parsePost, parseLinks, getPosts } from './parsePost';
import fs from 'fs';
import iconv from 'iconv-lite';
import { elems } from './configs'; 
//import { stringify } from 'querystring';

const saveResult = json => {
	//json = iconv.convert(new Buffer(json), 'win1251');
	fs.writeFile('result.json', json, err => {
		if (err) console.log('Not saved');
	});
};

const urlPage = 'http://magastimes.ru/category/novosti/';

parseLinks(urlPage, '.entry-title a', 10)
	.then(links => {
		getPosts(links, elems.magastimes).then(posts => saveResult(JSON.stringify(posts, 0, 4)))
		.catch(e => console.log(e));
	})
	.catch(e => console.log(e));



/*.then(links => {
	for(let i = 0; i < links.length; i++){
		parsePost(
			links[i],
			elems.groznyinform,
		);
	}

});*/

/*const Post = parsePost(
	'https://grozny-inform.ru/news/politic/111895/',
	elems.groznyinform,
);*/

//const getPost = async () => await Post.then(data => data);

//parseLinks('https://grozny-inform.ru/news/politic/', '.partition_news p a', 5);
//Post.then(data => console.log(data));