module.export ={
    pages:{
        index:{
            //入口
            entry:'src/main.js'
        },
        lintOnSave:false,//关闭语法检查
        //开户代理服务器(方式一)
        // devServer:{ 
        //     proxy:'http://localhost:5000'
        // },
        //开启代理服务器（方式二）
        devServer:{
            proxy:{
                '/atguigu':{
                    target:'https://localhost:5000',
                    pathRewrite:{'^/atguigu':''},
                    ws:true,//用于支持websocket
                    changeOrigin:true//服务器请求头中的host值，默认是true
                },
                '/demo':{
                    target: 'https://localhost:5001',
                    pathRewrite: { '^/demo': '' },
                    ws: true,//用于支持websocket
                    changeOrigin: true//
                }
            }
        }

    }
};
