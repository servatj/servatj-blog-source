const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/servatj/personal/servatj-blog/src/templates/blogPost.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/servatj/personal/servatj-blog/.cache/dev-404-page.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/servatj/personal/servatj-blog/src/pages/index.js")))
}

