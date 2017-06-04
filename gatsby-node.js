// Adapted from https://gist.github.com/ivanoats/8d01d9e934fdc17bae9090147f1e799b
const fs = require('fs')
const sm = require('sitemap')

function pagesToSitemap(pages) {
  const urls = pages.map((p) => {
    if (p.path !== undefined) {
      return {
        url: p.path,
        changefreq: 'daily',
        priority: 0.7
      }
    }
  })
  // remove undefined (template pages)
  return urls.filter(u => u !== undefined)
}

function generateSiteMap(pages) {
  const sitemap = sm.createSitemap({
    hostname: 'http://pernilsson.io',
    cacheTime: '60000',
    urls: pagesToSitemap(pages),
  })
  console.log('Generating sitemap.xml')
  fs.writeFileSync(
    `${__dirname}/public/sitemap.xml`,
    sitemap.toString()
  )
}

module.exports = {
  postBuild: function(pages, callback) {
    generateSiteMap(pages)
    callback()
  }
} 
