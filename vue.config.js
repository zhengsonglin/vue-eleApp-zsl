const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports = {
  	baseUrl: process.env.NODE_ENV === 'production'? '/production-sub-path/': '/',
    outputDir:"dist",
    assetsDir:"",		//放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
    indexPath:"index.html",		//指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
    productionSourceMap:false,	//默认true
    lintOnSave: false,	//是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码。
    devServer: {
    	//host: '8081',
    	open:false,	//禁止自动打开浏览器
    	overlay: {
	      warnings: true,
	      errors: true
	    },
    	disableHostCheck: true,
	    proxy: {
	      '/shopping': {
	        target: 'http://cangdu.org:8001/shopping',
	        pathRewrite: {
	          '^/shopping': ''
	        }
	      },
	      '/ugc': {
	        target: 'http://cangdu.org:8001/ugc',
	        pathRewrite: {
	          '^/ugc': ''
	        }
	      },
	      '/v1': {
	        target: 'http://cangdu.org:8001/v1',
	        ws: true,
	        changeOrigin: true,
	        pathRewrite: {
	          '^/v1': ''
	        }
	        
	      },
	      '/v2': {
	        target: 'http://cangdu.org:8001/v2',
	        pathRewrite: {
	          '^/v2': ''
	        }
	      },
	      '/v3': {
	        target: 'http://cangdu.org:8001/v3',
	        pathRewrite: {
	          '^/v3': ''
	        }
	      },
	      '/v4': {
	        target: 'http://cangdu.org:8001/v4',
	        pathRewrite: {
	          '^/v4': ''
	        }
	      },
	      
	      '/bos': {
	        target: 'http://cangdu.org:8001/bos',
	        pathRewrite: {
	          '^/bos': ''
	        }
	      },
	      '/member': {
	        target: 'http://cangdu.org:8001/member',
	        pathRewrite: {
	          '^/member': ''
	        }
	      },
	      '/promotion': {
	        target: 'http://cangdu.org:8001/promotion',
	        pathRewrite: {
	          '^/promotion': ''
	        }
	      },
	      '/eus': {
	        target: 'http://cangdu.org:8001/eus',
	        pathRewrite: {
	          '^/eus': ''
	        }
	      },
	      '/payapi': {
	        target: 'http://cangdu.org:8001/payapi',
	        pathRewrite: {
	          '^/payapi': ''
	        }
	      },
	      '/img': {
	        target: 'http://cangdu.org:8001/img',
	        pathRewrite: {
	          '^/img': ''
	        }
	      }
	    }
	},
	chainWebpack: (config)=>{
        config.resolve.alias
            .set('src', resolve('src'))
            .set('assets',resolve('src/assets'))
            .set('components',resolve('src/components'))
            .set('layout',resolve('src/layout'))
            .set('base',resolve('src/base'))
            .set('static',resolve('src/static'))
    }

}