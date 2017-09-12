var gulp = require('gulp');
var server = require('gulp-webserver');
var urlTool = require('url');
var qs = require('qs');
var data=[
            {
                "h3":"安河桥",
                "p":"宋冬野-安河桥"
            }, {
                "h3":"安河桥1",
                "p":"宋冬野1-安河桥"
            },{
                "h3":"安河桥2",
                "p":"宋冬野2-安河桥"
            },{
                "h3":"安河桥3",
                "p":"宋冬野3-安河桥"
            },{
                "h3":"安河桥4",
                "p":"宋冬野4-安河桥"
            },{
                "h3":"安河桥5",
                "p":"宋冬野5-安河桥"
            },
    ]
gulp.task('mockServer',function(){
    gulp.src('gulp')
        .pipe(server({
            port:8090,
            middleware:function(req,res,next){
                res.setHeader('Access-Control-Allow-Origin','*')
                var urlObj =  urlTool.parse(req.url);
                var method = req.method;
                var pathname = urlObj.pathname;
                if(method==="POST"){
                    var postData = '';
                    req.on('data',function(chunk){
                        postData +=chunk;
                    })
                    req.on('end',function(){
                        var postParmas = qs.parse(postData)
                        switch(pathname){
                            case '/jiqi':
                            res.setHeader('content-type','application/json;charset=utf-8')
                            res.write(JSON.stringify(data))
                            res.end()
                            break;
                            default : 
                        }
                        res.end()
                    })
                }
            }
        }))
})
gulp.task('default',['mockServer']);