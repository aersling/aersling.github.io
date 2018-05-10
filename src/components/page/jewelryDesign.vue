
<!--=============== 设计 ===============  -->
<template>
  <div id="jewelryDesign">
    <div class="min-w-1210 ovheigt clearfix">
      <img src="../../../static/img/design/design_titer_01.png" />
    </div>

    <div class="w-1210 min-w-1210 clearfix ovheigt">
      <div class="ovheigt clearfix m-t-60">
        <img class="m-t-20" src="../../../static/img/design/ico_img_01.png">
      </div>
      <div class="design_connmter ">
        <div class="engdhtng f-l">
          <router-link class="onge" to="#">
            <img src="../../../static/img/design/img_01.png" />
          </router-link>
        </div>
        <div class="f-l m-l-50 " style="margin-top: 94px">
          <div class="f-34 c-333 t-l"> 精心设计 </div>
          <div class="f-18 c-666 t-l m-t-20">
            生活，就是两个人的对手戏，无论哪种方式，
            <br/> 只要心意相通，都可以走到永远。
          </div>
          <div style="margin-top: 100px;">
            <div class="f-l" style="width: 18px;height: 3px;background: #93C9BD;margin-top: 10px"></div>
            <div class="f-l c-333 f-16" style="width: 85px;">查看更多</div>
            <div class="f-l" style="width: 18px;height: 3px;background: #93C9BD;margin-top: 10px"></div>
          </div>
        </div>
      </div>



      <div class="design_tierngd clearfix">

        <div class="f-l  " style="margin-top: 94px">
          <div class="f-34 c-333 t-l"> 柔软有力量 </div>
          <div class="f-18 c-666 t-l m-t-20">
            生命的伟大之处就在于她奋发向上的精神，
            <br/> 就像破开厚重泥土的蘑菇，柔软却有力量。

          </div>
          <div style="margin-top: 100px;">
            <div class="f-l" style="width: 18px;height: 3px;background: #93C9BD;margin-top: 10px"></div>
            <div class="f-l c-333 f-16" style="width: 85px;">查看更多</div>
            <div class="f-l" style="width: 18px;height: 3px;background: #93C9BD;margin-top: 10px"></div>
          </div>
        </div>
        <div class="tngef f-l">
          <router-link class="onge tneggd" to="#">
            <img src="../../../static/img/design/img_02.png" />
          </router-link>
        </div>
      </div>

      <div>
        <div class="ovheigt clearfix m-t-60">
          <img class="m-t-40" src="../../../static/img/design/ico_img_02.png">
        </div>


        <div class="fold-img ">

          <div class="f-l fold-img-in-l-f clearfix">
            <div class=" t-l clearfix ovheigt">
              <img src="../../../static/img/design/ico_01.png" />
            </div>
            <div class=" m-t-60 fold-img-in-l-f-img ">
              <router-link class="tnerdf" to="#">
              <img  src="../../../static/img/design/img_03.png" />
              </router-link>
            </div>


          </div>
          <div class="f-r fold-img-in-l-r">
            <div class="fold-img-in-l-f-img ">
                <router-link class="tnerdf" to="#">
              <img src="../../../static/img/design/img_04.png" />
              </router-link>
            </div>
            <div class="f-l m-t-35">
              <img src="../../../static/img/design/ico_02.png" />
            </div>

          </div>

          <div class="fold-img-Bottom">

          </div>
          <div class="fold-img-top">
            <img class="m-t-50" src="../../../static/img/design/img_05.png" />
          </div>
        </div>
      </div>
      <div class="boommert">
        <ul>

          <li class="onge">
            <img src="../../../static/img/design/img_06.png" />
          </li>
          <li class="onge">
            <img src="../../../static/img/design/img_07.png" />
          </li>
          <li class="onge">
            <img src="../../../static/img/design/img_08.png" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style>
  #jewelryDesign .design_connmter {
    position: relative;
    margin-top: 60px;
    padding: 32px 0px 0px 30px;
    clear: both;
    overflow: hidden;
  }

  #jewelryDesign .design_connmter .engdhtng {
    width: 612px;
    height: 420px;
    border: 3px solid #9ED6CA;
    /* margin-top: 32px;
        margin-left: 30px; */
  }

  #jewelryDesign .design_connmter .onge {
    position: absolute;
    top: 0px;
    left: 0px;
    /* display: inline-block; */
    overflow: hidden;
  }

  #jewelryDesign .onge img {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transition: all .8s ease-out;
    transition: all .8s ease-out;
    -webkit-transform-origin: 50% 100%;
    transform-origin: 50% 100%;
  }

  #jewelryDesign .onge:hover img {
    -webkit-transform: scale(1.08);
    transform: scale(1.1);
    /* opacity: 1; */
    -webkit-transition: all .8s ease-out;
    transition: all .8s ease-out;
    -webkit-transform-origin: 50% 100%;
    transform-origin: 50% 100%;
  }

  #jewelryDesign .design_tierngd {
    position: relative;
    margin-top: 60px;
    padding: 32px 0px 0px 0px;
    clear: both
  }

  #jewelryDesign .design_tierngd .tngef {
    width: 612px;
    height: 420px;
    border: 3px solid #9ED6CA;
    margin-left: 74px;
  }

  #jewelryDesign .design_tierngd .onge {
    position: absolute;
    top: 0px;
    left: 385px;
    overflow: hidden;
  }

  #jewelryDesign .fold-img {
    position: relative;
    /* overflow: hidden; */
  }

  #jewelryDesign .fold-img .fold-img-Bottom {
    width: 512px;
    height: 512px;
    background: #93C9BD;
    text-align: center;
    margin: 0px auto;
    margin-top: 200px;
    margin-bottom: 240px;
  }
  

  #jewelryDesign .fold-img .fold-img-in-l-f-img .tnerdf{
    display: block;
    overflow: hidden;
  }
  #jewelryDesign .fold-img .fold-img-in-l-f-img .tnerdf img{
     
     overflow: hidden;
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transition: all .8s ease-out;
    transition: all .8s ease-out;
    -webkit-transform-origin: 50% 100%;
    transform-origin: 50% 100%;
}

   #jewelryDesign .fold-img .fold-img-in-l-f-img .tnerdf:hover img{
     -webkit-transform: scale(1.08);
    transform: scale(1.1);
    /* opacity: 1; */
    -webkit-transition: all .8s ease-out;
    transition: all .8s ease-out;
    -webkit-transform-origin: 50% 100%;
    transform-origin: 50% 100%;}
  #jewelryDesign .fold-img .fold-img-in-l-f {
    position: absolute;
    top: -87px;
    left: 0px;
  }

  #jewelryDesign .fold-img .fold-img-in-l-r {
    position: absolute;
    top: -144px;
    right: 0px;
  }



  #jewelryDesign .fold-img .fold-img-top {
    width: 390px;
    height: 240px;
    background: #fff;
    position: absolute;
    top: 43px;
    left: 409px;
    opacity: 0.9;
  }

  #jewelryDesign .boommert ul {
    display: flex;
    justify-content: space-between;
    margin-bottom: 70px;
  }

  #jewelryDesign .boommert ul li {
    float: left;
    overflow: hidden;
  }



</style>
