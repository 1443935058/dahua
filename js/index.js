/**
 * Created by Administrator on 2018/11/19 0019.
 */
$(function(){
    $(".wei-qq .qq").hover(function(){
        $(".qq-xia").toggle()
    });
    //banner轮播
    (function(){

        var len=$(".banner .banner-item").length;
        var index=0;
        var show= $(".banner .banner-item");
        var prev=$(".banner .banner-prev");
        var next= $(".banner .banner-next");
        var box=$(".banner");
        function lunbo(len,index,show,prev,next,box){


            next.click(function(){
                index++;
                if(index>len-1){
                    index=0;
                }
                show.fadeOut().eq(index).fadeIn();
            });

            prev.click(function(){
                index--;
                if(index<0){
                    index=len-1;
                }
                show.fadeOut().eq(index).fadeIn();
            });

            var right=function(){
                index++;
                if(index>len-1){
                    index=0;
                }
                show.fadeOut().eq(index).fadeIn();
            };
            var timer=setInterval(right,3000);
            box.hover(function(){
                clearInterval(timer);
            },function(){
                timer=setInterval(right,3000);
            })
        }

        lunbo(len,index,show,prev,next,box)
    })();



//轮播二
    (function(){
        var len=$("#slide-box ul li").length;
        var index=0;
        var cli=$("#slide-box .slide-nav a");
        var show= $("#slide-box ul li");
        var box=$(".slide-box");



        function lunbo(len,index,cli,show,box){

            cli.mouseover(function(){
                index=$(this).index();
//        $(this).addClass("col").siblings().removeClass("col");
                cli.removeClass("slide-active").eq(index).addClass("slide-active");
                show.hide().eq(index).show();
            });


            var right=function(){
                index++;
                if(index>len-1){
                    index=0;
                }
                cli.removeClass("slide-active").eq(index).addClass("slide-active");
                show.hide().eq(index).show();
            };
            //var timer=setInterval(right,1000);
            //box.hover(function(){
            //    clearInterval(timer);
            //},function(){
            //    timer=setInterval(right,1000);
            //})
        }

        lunbo(len,index,cli,show,box)
    })();

//    轮播三
    (function(){
        var len=$("#slide-box1 ul li").length;
        var index=0;
        var cli=$("#slide-box1 .slide-nav a");
        var show= $("#slide-box1 ul li");
        var box=$(".slide-box");

        function lunbo(len,index,cli,show,box){

            cli.mouseover(function(){
                index=$(this).index();
//        $(this).addClass("col").siblings().removeClass("col");
                cli.removeClass("slide-active").eq(index).addClass("slide-active");
                show.hide().eq(index).show();
            });


            var right=function(){
                index++;
                if(index>len-1){
                    index=0;
                }
                cli.removeClass("slide-active").eq(index).addClass("slide-active");
                show.hide().eq(index).show();
            };
            var timer=setInterval(right,1000);
            box.hover(function(){
                clearInterval(timer);
            },function(){
                timer=setInterval(right,1000);
            })
        }

        lunbo(len,index,cli,show,box)
    })();
//点击
    (function(){
        var cli=$(".banner-nav a");
        var show=$(".col-box-02 .slide-box");
        cli.click(function(){
            index=$(this).index();
            cli.removeClass("on").eq(index).addClass("on");
            show.hide().eq(index).show();
        })
    })();

//滑动轮播
    (function(){
        var index=0;
        var hh=0;
        var width=$("#noticeWrap ul li").width();
        //var new1=$(".li1").clone(true);
        //new1.appendTo(".box ul");
        var len=$("#noticeWrap ul li").length;
        console.log(width);
        function  right(){
            hh++;
            if($("#noticeWrap ul").css("left")>-1525){
                hh=1;
                $("#noticeWrap ul").css({"left":0})
            }
            $("#noticeWrap ul").stop().animate({"left":-(hh)*10});
        }
    var timer=setInterval(right,200);
    $("#noticeWrap").hover(function(){
        clearInterval(timer)
    },function(){
        timer=setInterval(right,200);
    })
    })();

//    轮播
    (function(){
        var len=$(".news-box .news-nav a").length;
        var index=0;
        var cli=$(".news-box .news-nav a");
        var show= $(".news-box .slide-wrapper .slide-item");
        function lunbo(len,index,cli,show){
            cli.mouseover(function(){
                index=$(this).index();
                cli.removeClass("slide-active").eq(index).addClass("slide-active");
                show.hide().eq(index).show();
            });

        }

        lunbo(len,index,cli,show)
    })();

    //轮播
    (function(){
        var len=$(".tuijian-box .news-nav a").length;
        var index=0;
        var cli=$(".tuijian-box .news-nav a");
        var show= $(".tuijian-box .slide-wrapper .slide-item");
        function lunbo(len,index,cli,show){
            cli.mouseover(function(){
                index=$(this).index();
                cli.removeClass("slide-active").eq(index).addClass("slide-active");
                show.hide().eq(index).show();
            });

        }

        lunbo(len,index,cli,show)
    })();



//    滑动轮播
    (function(){
        var index=0;
        var hh=0;
        var width=$(".slide-wrappers .slide-item").width();
        var len=$(".slide-wrappers .slide-item").length;
        console.log(width);
        $(".cal-prev").click(function(){
            hh--;
            if(hh<0){
                hh=len-2;
                $(".slide-wrappers").css({"left":-(hh+1)*width})
            }
            console.log(hh);
            $(".slide-wrappers").stop().animate({"left":-(hh)*width});
        });
        $(".cal-next").click(function(){
            right()
        });
        function  right(){
            hh++;
            if(hh>len-1){
                hh=1;
                $(".slide-wrappers").css({"left":0})
            }
            $(".slide-wrappers").stop().animate({"left":-(hh)*width});
        }
    })();


//    选项卡
    (function(){
        var len=$(".entry-box .slide-cc .slide-d").length;
        console.log(len);
        var index=0;
        var cli=$(".entry-box .entry-nav a");
        var show= $(".entry-box .slide-cc .slide-d");
        function lunbo(len,index,cli,show){
            cli.mouseover(function(){
                index=$(this).index();
                cli.removeClass("slide-active").eq(index).addClass("slide-active");
                show.hide().eq(index).show();
            });

        }

        lunbo(len,index,cli,show)
    })()
});

