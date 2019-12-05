window.onload=function(){
                function fun(obj){
                    // 获取每个tab栏的id
                    var target = document.getElementById(obj);
                    var spans = target.getElementsByTagName("span");
                    var lis = target.getElementsByTagName("li");
                    for (var i=0;i<lis.length;i++) {
                        lis[i].index=i;
                        lis[i].onmouseover= function(){
                            for (var j=0;j<lis.length;j++) {
                                spans[j].className="";
                                lis[j].className="";
                            }
                            this.className="current";
                            spans[this.index].className = "show";
                        }
                    }
                }
                fun("lr");
                fun("new");
                fun("one");
                fun("two");
                fun("three");
                fun("four");
                fun("five");
                fun("six");
                fun("seven");

            }

$(function(){

 $('.wrapper').navbarscroll();

 //demo示例六 通过id调用
$('#one,#two,#three,#four,#five,#six,#new,#seven').navbarscroll({
defaultSelect:0,
scrollerWidth:6,
fingerClick:0,
endClickScroll:function(obj){
console.log(obj.text())
}
});

var swiper = new Swiper('#swiper', { 
    direction: 'vertical',
});
var startScroll, touchStart, touchCurrent;
swiper.slides.on('touchstart', function (e) {
    startScroll = this.scrollTop;
    touchStart = e.targetTouches[0].pageY;
}, true);
swiper.slides.on('touchmove', function (e) {
    touchCurrent = e.targetTouches[0].pageY;
    var touchesDiff = touchCurrent - touchStart;
    var slide = this;
    var onlyScrolling = 
            ( slide.scrollHeight > slide.offsetHeight ) && //allow only when slide is scrollable
            (
                ( touchesDiff < 0 && startScroll === 0 ) || //start from top edge to scroll bottom
                ( touchesDiff > 0 && startScroll === ( slide.scrollHeight - slide.offsetHeight ) ) || //start from bottom edge to scroll top
                ( startScroll > 0 && startScroll < ( slide.scrollHeight - slide.offsetHeight ) ) //start from the middle
            );
    if (onlyScrolling) {
        e.stopPropagation();
    }
}, true);

});


//搜索功能
 var sAddress=document.getElementsByTagName("form")[0];
    var sInfor=document.getElementById("search");
    var sBaidu=document.getElementById("baidu");
    var sWeixin=document.getElementById("cili");
    var sWeixin=document.getElementById("weixin");
    var sZhihu=document.getElementById("zhihu");
    var sweibo=document.getElementById("weibo");
    var sdouban=document.getElementById("douban");
    var sziyuan=document.getElementById("ziyuan");
     

    //百度
    sBaidu.onclick=function(){
      sAddress.action="https://www.baidu.com/s";
      sInfor.name="wd";
    }
        //磁力搜索
     $('#cili').click(function() {
      var query = $('#search').val();
      if ( query ) {
        window.open("https://www.cilimao.cc/search?word=" + query + "&ie=utf8", "_blank");
        return false;
      
      };
    });
      //微信文章搜索
     $('#weixin').click(function() {
      var query = $('#search').val();
      if ( query ) {
        window.open("http://weixin.sogou.com/weixin?type=2&query=" + query + "&ie=utf8", "_blank");
        return false;
      
      };
    });

    //知乎
    sZhihu.onclick=function(){
      sAddress.action="https://www.zhihu.com/search";
      sInfor.name="q";
      sInfor.type="question";
    }
//    //微博 （检索异常）
//    sweibo.onclick=function(){
//      sAddress.action="http://s.weibo.com/weibo/?";
//      //sInfor.name="q";
//      //sInfor.type="question";
//    }
    $('#weibo').click(function() {
      var query = $('#search').val();
      if ( query ) {
        window.open("http://s.weibo.com/weibo/" + query, "_blank");
        return false;
      };
    });

    //豆瓣
    sdouban.onclick=function(){
      sAddress.action="https://www.douban.com/search?";
      sInfor.name="q";
      //sInfor.type="question";
    }
        



    //新增疯狂影视搜索入口
  
$('#ziyuan').click(function() {
      var query = $('#search').val();
      if ( query ) {
        window.open("http://ifkdy.com/?q=" + query + "&p=1", "_blank");
        return false;
      
      };
    });


