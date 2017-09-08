var app = new Vue({
    el:"#app",
    data:{
        qq:{
            qqTxt:null
        }
    },
    created:function() {
       $.ajax({
           url:"http://localhost:8080",
           type:"post",
           success:function(result){
            // console.log(result);
                // var str = JSON.parse(result)
                app.$set(app.$data.qq,"qqTxt",result);
           },
           error:function(error){
               console.log(error)
           }
       })
    }
})
