const unirest = require('unirest');
const cheerio = require('cheerio');

unirest.get('https://www.riadagestan.ru/news/politics/komitet_gosdumy_po_byudzhetu_rassmotrit_vse_varianty_podderzhki_dagestana/').end(function(response){

	const body = response.body;
	const $ = cheerio.load(body);
	
	console.log('test_working!!!');

});