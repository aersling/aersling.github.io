
<!-- ==============首页==============  -->
<template>
  <div id="index" class="indexseng">
    <!--index banner start-->
    <!-- <div class="banner min-w-1200">
      <div class="slide-banner">
        <ul class="bd" style="width: 100%!important; margin:0 auto">
          <li class="" style="display: block; width:100%!important;background: url('@item.ImgUrl') no-repeat scroll center;">
            <a href="#" target="_blank">
              <img src="../../../static/img/banner.png" style="width: 100%" height="600" alt="财富中国" />
            </a>
          </li>
          <li class="" style="display: block; width:100%!important;background: url('@item.ImgUrl') no-repeat scroll center;">
            <a href="#" target="_blank">
              <img src="../../../static/img/logo.png" style="width: 100%" height="600" alt="财富中国" />
            </a>
          </li>
        </ul>
        <div class="hd-wrap">
          <ul class="hd">
            <li class="on"></li>
            <li class=""></li>
          </ul>
        </div>
        <a style="display: inline; opacity: 0.373747;" href="javascript:;" class="prev"></a>
        <a style="display: inline; opacity: 0.373747;" href="javascript:;" class="next"></a>
      </div>
    </div> -->
    <!--index banner end-->

    <!-- 视频播放 -->
    <div class="magazine magazine-home min-w-1210" style="margin-top: 0px">
      <div>
        <div class="magazine__scrollable-wrapper">
          <div class="top-carousel">
            <div class="carousel">
              <div class="carousel-cell">
                <div class="media-wrapper">
                  <video id="my-video" class="video-js" data-img-num="1" data-setup='{"loop":"true"}'>
                      <source src="../../../static/mp4/npmMp4.mp4" type="video/mp4"
                      />
                    <source src="https://www.bulgari.cn/zh-cn/cms_video/bvlgari-magazine-bzero1-universe-loop-2-video_2700k.mp4" type="video/mp4"
                    />
                    <p class="vjs-no-js"> To view this video please enable JavaScript, and consider upgrading to a web browser that
                      <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                    </p>
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="popin-video"></div>
    </div>
    <!-- end视频播放 -->

    <!-- 3 picScroll-left S -->

    <div style="background:#f5f5f5; min-width: 1210px;">
      <div class="w-1210 " style="height:380px;">

        <div class="picScroll-left">

          <div class="bd picScroldy">
            <ul class="picList">
              <li>
                <div class="pic">
                  <a href="http://www.SuperSlide2.com" target="_blank">
                    <div class="demo">
                      <figure class="imghvr-push-down">
                        <img src="../../../static/img/index/aimg_01.png" alt="example-image" />
                        <figcaption>
                          <img src="../../../static/img/index/img_01.png" alt="example-image" />
                          <!-- <h3>Hello World</h3>
                                                    <p>Life is too important to be taken seriously!</p> -->
                        </figcaption>
                        <a href="#"></a>
                      </figure>
                      <!-- <textarea onClick="this.focus();this.select()" readonly="readonly">imghvr-push-down</textarea> -->
                    </div>
                  </a>
                </div>
                <!-- <div class="title">
                                    <a href="http://www.SuperSlide2.com" target="_blank">效果图1</a>
                                </div> -->
              </li>
              <li>
                <div class="pic">
                  <a href="http://www.SuperSlide2.com" target="_blank">
                    <div class="demo">
                      <figure class="imghvr-push-down">
                        <img src="../../../static/img/index/aimg_02.png" alt="example-image" />
                        <figcaption>
                          <img src="../../../static/img/index/img_02.png" alt="example-image" />
                        </figcaption>
                        <a href="#"></a>
                      </figure>
                    </div>
                  </a>
                </div>

              </li>
              <li>
                <div class="pic">
                  <a href="http://www.SuperSlide2.com" target="_blank">
                    <div class="demo">
                      <figure class="imghvr-push-down">
                        <img src="../../../static/img/index/aimg_03.png" alt="example-image" />
                        <figcaption>
                          <img src="../../../static/img/index/img_03.png" alt="example-image" />
                        </figcaption>
                        <a href="#"></a>
                      </figure>
                    </div>
                  </a>
                </div>

              </li>
              <li>
                <div class="pic">
                  <a href="http://www.SuperSlide2.com" target="_blank">
                    <div class="demo">
                      <figure class="imghvr-push-down">
                        <img src="../../../static/img/index/aimg_04.png" alt="example-image" />
                        <figcaption>
                          <img src="../../../static/img/index/img_04.png" alt="example-image" />
                        </figcaption>
                        <a href="#"></a>
                      </figure>
                    </div>
                  </a>
                </div>

              </li>
              <li>
                <div class="pic">
                  <a href="http://www.SuperSlide2.com" target="_blank">
                    <div class="demo">
                      <figure class="imghvr-push-down">
                        <img src="../../../static/img/index/aimg_05.png" alt="example-image" />
                        <figcaption>
                          <img src="../../../static/img/index/img_05.png" alt="example-image" />
                        </figcaption>
                        <a href="#"></a>
                      </figure>
                    </div>
                  </a>
                </div>

              </li>
              <li>
                <div class="pic">
                  <a href="http://www.SuperSlide2.com" target="_blank">
                    <div class="demo">
                      <figure class="imghvr-push-down">
                        <img src="../../../static/img/index/aimg_06.png" alt="example-image" />
                        <figcaption>
                          <img src="../../../static/img/index/img_06.png" alt="example-image" />
                        </figcaption>
                        <a href="#"></a>
                      </figure>
                    </div>
                  </a>
                </div>

              </li>
              <li>
                <div class="pic">
                  <a href="http://www.SuperSlide2.com" target="_blank">
                    <div class="demo">
                      <figure class="imghvr-push-down">
                        <img src="../../../static/img/index/aimg_07.png" alt="example-image" />
                        <figcaption>
                          <img src="../../../static/img/index/img_07.png" alt="example-image" />
                        </figcaption>
                        <a href="#"></a>
                      </figure>
                    </div>
                  </a>
                </div>

              </li>
              <li>
                <div class="pic">
                  <a href="http://www.SuperSlide2.com" target="_blank">
                    <div class="demo">
                      <figure class="imghvr-push-down">
                        <img src="../../../static/img/index/aimg_08.png" alt="example-image" />
                        <figcaption>
                          <img src="../../../static/img/index/img_08.png" alt="example-image" />
                        </figcaption>
                        <a href="#"></a>
                      </figure>
                    </div>
                  </a>
                </div>

              </li>
              <li>
                <div class="pic">
                  <a href="http://www.SuperSlide2.com" target="_blank">
                    <div class="demo">
                      <figure class="imghvr-push-down">
                        <img src="../../../static/img/index/aimg_09.png" alt="example-image" />
                        <figcaption>
                          <img src="../../../static/img/index/img_09.png" alt="example-image" />
                        </figcaption>
                        <a href="#"></a>
                      </figure>
                    </div>
                  </a>
                </div>

              </li>
            </ul>
          </div>

          <div class="hd">
            <a class="next"></a>
            <ul></ul>
            <a class="prev"></a>
            <!-- <span class="pageState"></span> -->
          </div>

        </div>

        <!-- 3 picScroll-left E -->

      </div>
    </div>

    <div class="w-1210 min-w-1210">
      <div class="m-t-60 clearfix">
        <div>
          <img src="../../../static/img/index/tities_01.png" class="m-t-10" />
        </div>
        <div>
          <div class="referral-str m-t-20 m-l-10 f-l">
            <div style="width:349px; height:527px; background: #322E2E"> </div>
            <router-link to="/" class="eng engs" >
            <img src="../../../static/img/index/referral_01.png" /> 
          </router-link>
          </div>
          <div class="f-l m-l-60 referral-ste">
            <router-link to="/" class="enge engs" >
              <img src="../../../static/img/index/referral_02.png" />
             </router-link>
            <router-link to="/"  class="enge engs m-t-10">
              <img src="../../../static/img/index/referral_03.png" /> </router-link>
          </div>
          <div class="f-r m-t-50 referral-sts">
            <router-link to="/" class="enge engs">
              <img src="../../../static/img/index/referral_04.png" />
            </router-link>
          </div>
        </div>
      </div>
      <div class="clearfix chakangenduo-btn m-t-20">
        <router-link to="/" class=""> 查看更多 </router-link>
      </div>


      <div class="m-t-60 clearfix">
        <div> 
          <img src="../../../static/img/index/tities_02.png" class="m-t-10" />
        </div>
        <div class="f-l m-t-45">
          <router-link to="/" class="enge engs"> 
            <img src="../../../static/img/index/referral_05.png" /> 
          </router-link>
          <div class="dilver-decoration-str">
            <div style="width:398px;height:420px; background:#9ED6CA ">

            </div>
            <router-link to="/" class="endeet engs">  
                <img src="../../../static/img/index/referral_06.png" /> 
              </router-link>
         
          </div>
        </div>
        <div class="f-r dilver-decoration-ste m-t-45">
          <div class="f-r divdgdn clearfix">

          </div>
          <div class="">
          <router-link to="/" class="enge engs" style="width: 456px;height: 714px;">
            <img src="../../../static/img/index/referral_07.png" />
          </router-link>
        </div>
        </div>
      </div>
      <div class="clearfix chakangenduo-btn m-t-20">
        <router-link to="/" class=""> 查看更多 </router-link>
      </div>

    </div>


    <div>

      <div class="slider ">

        <div class="bd steong">
          <ul>
            <li>
              <a href="#">
                <img src="../../../static/img/index/lunbotu_01.png" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="../../../static/img/index/lunbotu_02.png" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="../../../static/img/index/lunbotu_02.png" />
              </a>
            </li>
           
          </ul>
        </div>

        <!-- <div class="hd">
          <ul></ul>
        </div> -->

        <div class="pnBtn prev">
          <span class="blackBg"></span>
          <a class="arrow" href="javascript:void(0)"></a>
        </div>
        <div class="pnBtn next">
          <span class="blackBg"></span>
          <a class="arrow" href="javascript:void(0)"></a>
        </div>

      </div>

    </div>



    <div class="w-1210 min-w-1210">
            <div class="m-t-60 clearfix">
                    <div>
                      <img src="../../../static/img/index/tities_03.png" class="m-t-10" />
                    </div>
                        <div class="m-t-45 void">
                            <img src="../../../static/img/index/video_center_01.png"/>
                            <div class="openg">
                            <div class="icon_play btn_play"><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon_play">
                
                                <svg id="icon_play" viewBox="0 0 80 80" width="100%" height="100%">
                                        <path d="M30,23v2.5L53.9,40L32.1,53.3V29.5L30,28.3V57l28-17L30,23z M35.1,41.7v-1.2l-1-0.6v10l8.5-5l-1.1-0.6
                                          l-1,0.6l-1.5,0.9l-0.8,0.5l-3.1,1.8L35.1,41.7L35.1,41.7z"></path>
                                      </svg>
                            </use></svg></div>
                        </div>
                        </div>
                  </div>
                  <div class="clearfix chakangenduo-btn m-t-20">
                    <router-link to="/" class=""> 查看更多 </router-link>
                  </div>

                  <div class="m-t-60 clearfix">
                        <div>
                          <img src="../../../static/img/index/tities_04.png" class="m-t-10" />
                        </div>
                            <div class="m-t-45 imprint">
                                <ul>
                                    <li>  <router-link to="/" class="enge engs">      <img src="../../../static/img/index/Imprint_01.png"/>  
                                     </router-link>
                                    </li>
                                    <li>     <router-link to="/" class="enge engs">    <img src="../../../static/img/index/Imprint_02.png"/>  </router-link> </li>
                                    <li>   <router-link to="/" class="enge engs">      <img src="../../../static/img/index/Imprint_03.png"/>  </router-link> </li>
                                    <li>     <router-link to="/" class="enge engs">    <img src="../../../static/img/index/Imprint_04.png"/>  </router-link> </li>
                                    <li>     <router-link to="/" class="enge engs">    <img src="../../../static/img/index/Imprint_05.png"/>  </router-link> </li>
                                    <li>    <router-link to="/" class="enge engs">     <img src="../../../static/img/index/Imprint_06.png"/>  </router-link> </li>
                                    <li>    <router-link to="/" class="enge engs">     <img src="../../../static/img/index/Imprint_07.png"/>  </router-link> </li>
                                    <li>    <router-link to="/" class="enge engs">     <img src="../../../static/img/index/Imprint_08.png"/>  </router-link> </li>
                                </ul>
                         
                                
                            </div>
                      </div>
               
              
    </div>
  </div>
</template>

<script>
  import "../../../static/js/jquery-1.8.2.min.js";
  import "../../../static/js/jquery.SuperSlide.2.1.1.js"; //轮播js
  import "../../../static/js/lunbo/superslide.2.1.js"
  export default {
    name: "index",
    data() {
      return {
        msg: "111111",
        datr:true,
      };
    },
    created: function () {
      this.fetchData();
    },mounted(){
    
    
        home_banner();
          lunbou();

      
},
    methods: {
      fetchData: function () {
        var _self = this;
        _self.$nextTick(function () {
          //视频播放方法在index.html页面
         
        });
      }
    }
  };


    function home_banner() {
              var myPlayer = videojs('my-video');
              var myVid = document.getElementById("my-video");
              myVid.controls = false;//控制显示进度条
            //  myVid.load();
              //loop":"true" 控制是否循环播放 <video> 
              videojs("my-video").ready(function () {
                  var myPlayer = this;
                  myPlayer.play();
                  this.on('ended', function () {
                  //  window.location.replace("/") 
                      // videojs.log('播放结束了!');
                  });
              });
             
          }
  function lunbou() {
          //第二个轮播
 /* 设置第一张图片 */
 $(".slider .bd li").first().before($(".slider .bd li").last());
	
	/* 鼠标悬停箭头按钮显示 */
	$(".slider").hover(function(){
		$(this).find(".arrow").stop(true,true).fadeIn(300)
	},function(){
		$(this).find(".arrow").fadeOut(300)
	});
	
	/* 滚动切换 */
	$(".slider").slide({
		titCell:".hd ul", 
		mainCell:".bd ul", 
		effect:"leftLoop",
		autoPlay:true, 
		vis:3,
		autoPage:true, 
		trigger:"click"
    });
     //第二个轮播


    //第一个轮播
    $(".picScroll-left").slide({
      titCell: ".hd ul",
      mainCell: ".bd ul",
      autoPage: true,
      effect: "leftLoop",
      autoPlay: true,
      scroll: 3,
      vis: 3
    });
       //第一个轮播
  }
  //首页轮播图
  // function home_banner() {
  //     $(".slide-banner").slide({
  //         delayTime: 1000,
  //         effect: "fold",
  //         autoPlay: true,
  //         interTime: 2500
  //     });
  //     $(".slide-banner").hover(
  //         function() {
  //             $(this)
  //                 .find(".prev")
  //                 .fadeIn();
  //             $(this)
  //                 .find(".next")
  //                 .fadeIn();
  //         },
  //         function() {
  //             $(this)
  //                 .find(".prev")
  //                 .fadeOut();
  //             $(this)
  //                 .find(".next")
  //                 .fadeOut();
  //         }
  //     );
  // }

</script>
<style>
  @import url("../../../static/css/imagehover.css");


.void{
    position: relative;
}
.video_preview .btn_play {
    /* width: 60px;
    height: 60px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -30px 0 0 -30px;
    background: #fff;
    opacity: .8; */
}
.icon_play {
 position: absolute;
    border: 2px solid #cdcdcd;
    -moz-border-radius: 50%;
    border-radius: 50%;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
     background-color: #f7f7f7; 
    width: 80px;
    height: 80px;    
   margin-top: 248px;
   margin-left:465px;
   z-index: 2;


}
.icon_play svg {
    display: block;
    width: 100%;
    height: 100%;
}

.openg{
  position: absolute;
    top: 0px;
    width: 992px;
    height: 558px;
    left: 109px;
    z-index: 1;

    -webkit-transition: all .7s ease;
    -moz-transition: all ease .7s;
    transition: all .7s ease;
}
.openg:hover{
    position: absolute;

    opacity: 1;
    /* width: 100%;
    height: 400px; */
    background-color: rgba(0,0,0,.6);
    -webkit-transition: all .7s ease;
    -moz-transition: all ease .7s;
    transition: all .7s ease;
    top: 0px;
    width: 992px;
    height: 558px;
    left: 109px;
    background: #000;
    opacity: 0.5;
    z-index: 1;
}




  .indexseng .referral-str {
    position: relative;

  }

  .indexseng .referral-str .eng {
    position: absolute;
    top: 30px;
    left: 25px;
    display: inline-block;
    overflow: hidden;
  
  }
  .indexseng  .endeet {
    position: absolute;
    top: 0px;
    right:0px;
    display: inline-block;
    overflow: hidden;
  
  }


    .indexseng  .engs img {
      -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);

    -webkit-transition: all .8s ease-out;
    -moz-transition: all ease-out .8s;
    transition: all .8s ease-out;
    -webkit-transform-origin: 50% 100%;
    -moz-transform-origin: 50% 100%;
    -ms-transform-origin: 50% 100%;
    transform-origin: 50% 100%;
    }
  .indexseng  .engs:hover img {
    -webkit-transform: scale(1.08);
    -moz-transform: scale(1.08);
    -ms-transform: scale(1.08);
    transform: scale(1.1);
    /* opacity: 1; */

   -webkit-transition: all .8s ease-out;
    -moz-transition: all ease-out .8s;
    transition: all .8s ease-out;
    -webkit-transform-origin: 50% 100%;
    -moz-transform-origin: 50% 100%;
    -ms-transform-origin: 50% 100%;
    transform-origin: 50% 100%;
  }


  .indexseng .referral-ste {
    margin-top: 100px;
  }

 .indexseng  .enge {
    display: block;
    overflow: hidden;
  }













  .indexseng .chakangenduo-btn a {
    text-align: center;
    display: inline-block;
    width: 116px;
    height: 38px;
    border: 1px solid #333333;
    line-height: 38px;
    color: #333333;
    font-weight: 600;
    font-size: 12px;
    -webkit-transition: all .5s ease-out;
    -moz-transition: all ease-out .5s;
    transition: all .5s ease-out;
  }

.indexseng .chakangenduo-btn a:hover{
  color: #fff;
  background: #333;
  -webkit-transition: all .5s ease-out;
    -moz-transition: all ease-out .5s;
    transition: all .5s ease-out;

} 

  .indexseng .dilver-decoration-str {
    position: relative;
    margin-top: 50px;
  }
  .indexseng .dilver-decoration-ste {
    width: 456px;
  }
  .indexseng .dilver-decoration-ste .divdgdn {
    width: 193px;
    height: 178px;
    background: #9ED6CA;
  }
  .indexseng .imprint {
      margin-bottom: 60px;
      overflow: hidden;
      /* overflow: hidden;
    display: flex;
  justify-content: space-around; */
  }
   .indexseng .imprint ul li{
       width: 290px;
       height: 260px;
       margin-left: 12px;
        float: left;
        margin-top: 15px;
   
  }










  /* slider 第二轮播样式 */

 .indexseng .slider {
    width: 100%;
    margin-top: 88px;
    min-width: 1210px;
    height: 496px;
    position: relative;
    overflow: hidden;
    background: #fff;
    text-align: center;
  }

 .indexseng .slider .bd {
    width: 1210px;
    position: absolute;
    left: 50%;
    margin-left: -490px
  }

 .indexseng .slider .bd li {
    width: 1210px;
    overflow: hidden;
  }

 .indexseng .slider .bd li img {
    display: block;
    width: 1210px;
    height: 496px;
  }

 .indexseng .slider .steong .tempWrap {
    overflow: visible !important
  }

 .indexseng .slider .steong .tempWrap ul {
    margin-left: -116px !important;
  }

 .indexseng .slider .hd {
    position: absolute;
    width: 100%;
    left: 0;
    z-index: 1;
    height: 8px;
    bottom: 20px;
    text-align: center;
  }

.indexseng  .slider .hd li {
    display: inline-block;
    *display: inline;
    zoom: 1;
    width: 8px;
    height: 8px;
    line-height: 99px;
    overflow: hidden;
    /* background: url(images/slider-btn.png) 0 -10px no-repeat; */
    margin: 0 5px;
    cursor: pointer;
    filter: alpha(opacity=60);
    opacity: 0.6;
  }

 .indexseng .slider .hd li.on {
    background-position: 0 0;
    filter: alpha(opacity=100);
    opacity: 1;
  }

 .indexseng .slider .pnBtn {
    position: absolute;
    z-index: 1;
    top: 0;
    width: 100%;
    height: 496px;
    cursor: pointer;
  }

 .indexseng .slider .prev {
    left: -56%;
    margin-left: -490px;
  }

 .indexseng .slider .next {
    left: 56%;
    margin-left: 490px;
  }

 .indexseng .slider .pnBtn .blackBg {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 496px;
    background: #000;
    filter: alpha(opacity=50);
    opacity: 0.5;
  }

 .indexseng .slider .pnBtn .arrow {
    display: none;
    position: absolute;
    top: 107px;
    z-index: 1;
    width: 60px;
    height: 496px;
  }

 .indexseng .slider .pnBtn .arrow:hover {
    filter: alpha(opacity=60);
    opacity: 0.6;
  }

 .indexseng .slider .prev .arrow {
    right: 0;
     background: url("../../../static/img/index/slider-arrow.png") -120px 0 no-repeat; 
    
  }

 .indexseng .slider .next .arrow {
    left: 0;
    background: url("../../../static/img/index/slider-arrow.png") 0 0 no-repeat; 
  }
  /* slider end 第二轮播样式 */








  /* css 重置 */

  * {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  body {
    background: #fff;
    font: normal 12px/22px 宋体;
  }

  img {
    border: 0;
  }

  a {
    text-decoration: none;
    color: #333;
  }

  /* 本例子css */

  .picScroll-left {
    overflow: hidden;
    position: relative;
    margin-top: 58px;
    /* border: 1px solid #ccc; */
  }

  .picScroll-left .hd {
    /* overflow: hidden;
    height: 30px;
    background: #f4f4f4;
    padding: 0 10px; */
  }

  .picScroll-left .hd .prev,
  .picScroll-left .hd .next {
    display: block;
    width: 5px;
    height: 9px;
    float: right;
    margin-right: 5px;
    margin-top: 10px;
    overflow: hidden;
    cursor: pointer;
    /* background: url("../images/arrow.png") 0 0 no-repeat; */
  }

  .picScroll-left .hd .next {
    background-position: 0 -50px;
  }

  .picScroll-left .hd .prevStop {
    background-position: -60px 0;
  }

  .picScroll-left .hd .nextStop {
    background-position: -60px -50px;
  }

  .picScroll-left .hd ul {
    /* position: absolute; */
    /* float: right; */
    text-align: center;
    overflow: hidden;
    zoom: 1;
    margin-top: 10px;
    zoom: 1;
  }

  .picScroll-left .hd ul li {
    /* float: left; */
    overflow: hidden;
    margin-right: 6px;
    text-indent: -999px;
    cursor: pointer;
    /* background: url("../images/icoCircle.gif") 0 -9px no-repeat; */
  }

  .picScroll-left .hd ul li.on {
    background-position: 0 0;
  }

  .picScroll-left .bd {
    margin-top: 30px;
    /* padding: 10px; */
  }

  .picScroll-left .bd ul {
    /* overflow: hidden; */
    zoom: 1;
  }

  .picScroll-left .bd ul li {
    /* margin-left: 10px; */
    margin: 0px 6px 0px 10px;
    float: left;
    _display: inline;
    /* overflow: hidden; */
    text-align: center;
  }

  .picScroll-left .bd ul li .pic {
    text-align: center;
    /* -webkit-box-shadow: #d1d1d1 3px 4px 16px;
    -moz-box-shadow: #d1d1d1 3px 4px 16px;
    box-shadow: #d1d1d1 3px 4px 16px; */
  }

  .picScroll-left .bd ul li .pic img {
    width: 384px;
    height: 264px;
    display: block;
    /* padding: 2px; */
    /* border: 1px solid #ccc; */
  }

  .picScroll-left .bd ul li .pic a:hover img {
    border-color: #999;
  }

  .picScroll-left .bd ul li .title {
    line-height: 24px;
  }

  .picScroll-left .hd li.on {
    background: #9ed6ca;
    border-radius: 20px;
    width: 46px;
    height: 12px;
  }

  .picScroll-left .hd li {
    display: inline-block;
    background: #9ed6ca;
    width: 12px;
    height: 12px;
    overflow: hidden;
    cursor: pointer;
    margin: 0px 5px;
    border-radius: 20px;
    /* float: left; */
  }

 .picScroll-left .picScroldy .tempWrap {
    overflow: inherit !important;
    height: 286px;
    width: 1210px !important;
  }

  .picScroll-left .picList {
    overflow: inherit !important;
  }

  .picScroll-left .demo {
    -webkit-box-shadow: #d1d1d1 3px 4px 2px;
    -moz-box-shadow: #d1d1d1 3px 4px 2px;
    box-shadow: #d1d1d1 3px 4px 2px;
  }
 




.my-video-dimensions {
    width: 100%;
    height: 600px;
}
.video-js .vjs-tech {
    position: absolute;
    top: 0px;
    left: 0;
    width: 100%;
    height: 100%;
}

.magazine .magazine__scrollable-wrapper .media-wrapper video {
    position: absolute; 
     top: 0; 
     right: auto; 
     bottom: auto; 
     left: 0;
     z-index: auto; 
     visibility: inherit; 
     overflow: hidden; 
     box-sizing: border-box; 
     width: 100%; 
     height: 100%; 
    object-fit: unset;
}















  /*banner start*/

  /* .banner {
    height: 600px;
    width: 100%;
    position: relative;
    width: 100%;
    left: 0;
    overflow: hidden;
}
.slide-banner .bd li {
    display: none;
    height: 600px;
    position: absolute;
    width: 100%;
    cursor: pointer;
    overflow: hidden;
    margin: 0;
    padding: 0;
    zoom: 1;
    left: 0px;
    top: -1px;
}

.slide-banner .hd-wrap {
    display: table;
    height: 5px;
    position: absolute;
    top: 560px;
    z-index: 999;
    width: 100%;
}
.slide-banner .hd-wrap .hd {
    display: table;
    width: auto;
    margin: 0px auto;
    z-index: 999;
    width: 190px;
}
.slide-banner .hd li {
    display: inline-block;
    background: #fff;
    width: 16px;
    height: 16px;
    overflow: hidden;
    cursor: pointer;
    margin: 0px 5px;
    border-radius: 50%;
    float: left;
}
.slide-banner .hd li.on {
    background: #930;
}
.slide-banner .prev {
    position: absolute;
    top: 145px;
    margin-left: 330px;
    width: 60px;
    height: 60px;
    cursor: pointer;
     background: url(/Content/Images/home/banner-left-icon.png) no-repeat; 
    opacity: 0.5;
    filter: alpha(opacity=50);
    display: none;
}
.slide-banner .next {
    position: absolute;
    top: 145px;
    margin-right: 336px;
    right: 0px;
    width: 60px;
    height: 60px;
    cursor: pointer;
  background: url(/Content/Images/home/banner-right-icon.png) no-repeat; 
    opacity: 0.8;
    display: none;
}
.slide-banner .prev:hover,
.slide-banner .next:hover {
    opacity: 1;
    filter: alpha(opacity=100);
} */

  /*banner end*/

</style>
