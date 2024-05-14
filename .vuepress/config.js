module.exports = {
  "title": "blog-test-reco-self",
  "description": "test",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ],
    ['link', {rel:'stylesheet', href:'https://cdn.jsdelivr.net/npm/katex@0.15.1/dist/katex.min.css'}],
    ['link', {rel:'stylesheet', href:'https://gitcdn.xyz/cdn/goessner/markdown-it-texmath/master/texmath.css'}],
    ['script', {src: 'https://github.com/markdown-it/markdown-it/blob/master/bin/markdown-it.js'}],
    ['script', {src: 'https://gitcdn.xyz/cdn/goessner/markdown-it-texmath/master/texmath.js'}],
    ['script', {src: 'https://cdn.jsdelivr.net/npm/katex@0.15.1/dist/katex.min.js'}]

  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "Docs",
        "icon": "reco-message",
        "items": [
          {
            "text": "vuepress-reco",
            "link": "/docs/theme-reco/"
          }
        ]
      },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/only-tao",
            "icon": "link-github"
          }
        ]
      }
    ],
    "sidebar": 
      // "/docs/theme-reco/": [
      //   "",
      //   "theme",
      //   "plugin",
      //   "api"
      // ],
      'auto'
    ,
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category",
        "items":[
          { "text": "Category1", "link": "/categories/category1/" },
          { "text": "Category2", "link": "/categories/category2/" },
          { "text": "Category3", "link": "/categories/category3/" }
        ]
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "",
    "authorAvatar": "/rena.png",
    "record": "xxxx",
    "startYear": "2017"
  },
  markdown: {
    lineNumbers: true,
    anchor: { permalink: false },
    toc: {includeLevel: [1,2]},
    extendMarkdown: md => {
      md.use(require('markdown-it-texmath'))
    }
  }


  // "markdown": {
  //   // "katex": true,
  //   "lineNumbers": true,
  //   extendMarkdown: md => {
  //     md.use(require('markdown-it-katex'),{
  //       throwOnError: false,
  //       errorColor: ' #cc0000'
  //     });
  //   }
   
  // }
  
}