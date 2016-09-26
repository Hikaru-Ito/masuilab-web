var Metalsmith  = require('metalsmith')
var markdown    = require('metalsmith-markdown')
var layouts     = require('metalsmith-layouts')
var permalinks  = require('metalsmith-permalinks')

Metalsmith(__dirname)
  .metadata({
    title: "Masuilab",
    description: "Masui Laboratory Keio Univ",
    generator: "Metalsmith",
    url: "http://masuilab.com/"
  })
  .source('./src')
  .destination('./build')
  .clean(false)
  .use(markdown())
  .use(permalinks())
  .use(layouts({
    engine: 'handlebars'
  }))
  .build(function(err, files) {
    if (err) { throw err; }
  });
