const urls = [
    'https://npmjs.com/',
    'https://michaelcalvinwood.net'
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
    console.log(`Done scraping ${JSON.stringify(urls, null, 4)}`);
})
.catch(error => {
    console.error(error);
});