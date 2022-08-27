const urls = [
    'https://npmjs.com/'
];
const directory = '/Users/michaelwood/Downloads/websites/npmjs.com';


import scrape from 'website-scraper'; 
const options = {
  urls,
  directory,
  recursive: true,
  maxRecursiveDepth: 5
};

scrape(options)
.then(result => {
    console.log(`Done scraping ${options.urls[0]}`);
})
.catch(error => {
    console.error(error);
});