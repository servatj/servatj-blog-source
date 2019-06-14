// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-blog-post-js": () => import("/Users/servatj/personal/servatj-blog/src/templates/blogPost.js" /* webpackChunkName: "component---src-templates-blog-post-js" */),
  "component---cache-dev-404-page-js": () => import("/Users/servatj/personal/servatj-blog/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-index-js": () => import("/Users/servatj/personal/servatj-blog/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/servatj/personal/servatj-blog/.cache/data.json")

