const pkg = require('./package')


module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: '轻松一下|GIF搞笑图片,视频,段子集中营',
    meta: [
		{ charset: 'utf-8' },
		{ 'http-equiv':'X-UA-Compatible',content:'IE=11,IE=10,IE=9,IE=8'},
		{ name: 'viewport', content: 'width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0' },
		{ name:'apple-mobile-web-app-title',content:'轻松一下'},
		{ name:'applicable-device',content:'pc,mobile'},
		{ name:'MobileOptimized',content:'width'},
		{ name:'HandheldFriendly',content:'true'},
		//seo优化--关键词
		{ name:'keywords',content:pkg.keywords},
		//seo优化--简介
		{ hid: 'description', name: 'description', content: pkg.description }
    ],
		script: [
			{src:'/js/jquery.min.js'},
		],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'stylesheet', type: 'text/css', href: '/css/bootstrap.min.css' },
			{ rel: 'stylesheet', type: 'text/css', href: '/css/font-awesome.min.css' },
			{ rel: 'stylesheet', type: 'text/css', href: '/css/main.css' },
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
/* 		'~/static/css/bootstrap.min.css',
		'~/static/css/font-awesome.min.css',
		'~/static/css/main.css', */
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
	// '~/plugins/axios'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
		'@nuxtjs/axios'
  ],
	axios: {
    baseURL: 'https://www.qsong.fun',
    // or other axios configs.
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
	vendor:['axios'],
    extend(config, ctx) {
      
    }
  },
  server: {
    port: 8009, // default: 3000
    host: '127.0.0.1', // default: localhost
  }
}
