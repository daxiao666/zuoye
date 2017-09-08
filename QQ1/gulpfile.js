var gulp = require("gulp");
var server = require("gulp-webserver");
var urlPar = require("url");
var json = [
	{"No":"list1","img":"./imgages/headImg.jpg","tit":"QQ看点","txt":"[精选] LOL丝血金身被4名敌人围困，狗牌被杀","time":"下午07:08"},
	{"No":"list2","img":"./imgages/headImg.jpg","tit":"群助手","txt":"[1个群有新消息]","time":"下午6:08"},
	{"No":"list3","img":"./imgages/headImg.jpg","tit":"佳佳","txt":"饭卡积分斯洛伐克手机发可视对讲飞","time":"下午07:08"},
	{"No":"list4","img":"./imgages/headImg.jpg","tit":"丽姐","txt":"丽姐最大","time":"上午06:08"},
	{"No":"list5","img":"./imgages/headImg.jpg","tit":"胡西新","txt":"放假咳嗽就福克斯看风景快点叫咖啡减肥减肥","time":"下午07:08"},
	{"No":"list6","img":"./imgages/headImg.jpg","tit":"智障","txt":"[图片]","time":"下午07:08"},
	{"No":"list7","img":"./imgages/headImg.jpg","icon":"","tit":"大哥","txt":"减肥减肥减肥减肥经济纠纷见附件附件附件附件附件见附件附件附件见","time":"上午08:08"},
	{"No":"list8","img":"./imgages/headImg.jpg","tit":"小芳","txt":"九分裤都进水了付款了首付款","time":"下午07:08"},
	{"No":"list9","img":"./imgages/headImg.jpg","tit":"美女","txt":"UR欧文如就发了搜偶搜铺铺铺铺铺铺铺铺铺","time":"上午07:08"},
	{"No":"list10","img":"./imgages/headImg.jpg","tit":"宝贝","txt":"日期慢慢满满木木木木木热污染无人","time":"下午06:30"},
	{"No":"list11","img":"./imgages/headImg.jpg","tit":"晓婷","txt":"没事了视频日我人配偶老师","time":"上午06:35"}
]
gulp.task("config",function(){
	gulp.src("gulp")
	.pipe(server({
		port:"8080",
		middleware:function(req,res,next){
			res.setHeader("Access-Control-Allow-Origin","*");
			var method = req.method;
			var pathname = urlPar.parse(req.url).pathname;
			if(method==="POST"){
				var str="";
				req.on("data",function(chunk){
					str+=chunk;
				})
				req.on("end",function(){
					res.setHeader("content-type","application/json;charset=utf-8;");
					res.write(JSON.stringify(json));
					res.end();
				})
			}
		}
	}))
})
gulp.task("default",["config"]);