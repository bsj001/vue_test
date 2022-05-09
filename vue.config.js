module.exports = {
	pages:{
		index:{
			//入口
			entry: 'src/main.js',
		},
	},
	lintOnSave:false,//关闭语法检查
	//开启代理服务器（方式一）
/* 	devServer:{
		proxy:'http://localhost:5000'
	}, */
	//开启代理服务器（方式二）
	devServer:{
		proxy:{
			'/atguigu':{
				target:'https://localhost:5000',
				pathRewrite:{'^/atguigu':''},
				//ws:true,
				//changeOrigin:true
			},
			'/demo': {
				target: 'https://localhost:5001',
				pathRewrite: { '^/demo': '' },
				//ws:true,
				//changeOrigin:true
			},
		}
	},
}