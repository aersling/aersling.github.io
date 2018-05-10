<template>
  <div id="headers" class="segmin">
    <div class="headertoer"> </div>
    <div class="header w-1210">
      <div class="header-logo ">
        <img src="../../../../static/img/logo.png" />
      </div>
      
      <div class="header-navigation">
        <ul class="header-navigation-ul f-14">
          <li>
            <a href="./">
              <div :class="[date=='首页'?csse:'']" @click="lidataclck('首页')">首页</div>
            </a>
          </li>
          <li>
            <router-link to="/Kgold">
              <div :class="[date=='K 金'?csse:'']" @click="lidataclck('K 金')">K 金 </div>
            </router-link>
          </li>
          <li>
            <router-link to="/silverware">
              <div :class="[date=='银饰'?csse:'']" @click="lidataclck('银饰')">银饰 </div>
            </router-link>
          </li>
          <li>
            <router-link to="/jewelryDesign">
              <div :class="[date=='设计'?csse:'']" @click="lidataclck('设计')">设计 </div>
            </router-link>
          </li>
          <li>
            <router-link to="/brands">
              <div :class="[date=='品牌'?csse:'']" @click="lidataclck('品牌')">品牌 </div>
            </router-link>
          </li>
          <li>
            <router-link to="/interactive">
              <div :class="[date=='互动'?csse:'']" @click="lidataclck('互动')">互动 </div>
            </router-link>
          </li>
          <li>
            <router-link to="#">
              <div :class="[date=='购买'?csse:'']" @click="lidataclck('购买')">购买 </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div style="border-top:2px solid #000;height: 0px;"></div>
  </div>
</template>
<script>





export default {
    name: "headers",
    data() {
        return {
            csse: "clke",
            date: "首页",
        };
    },
    created: function() {
        this.fetchData();
    },
    methods: {
        fetchData: function() {
            var _self = this;
            _self.$nextTick(function() {
                //   home_banner();
            });
        },
        lidataclck: function(index) {
          //头部点击事件
            this.date = index;
        }
    }
};
</script>
<style scoped>
 .segmin{
   min-width: 1210px;
 }
.headertoer {
    width: 100%;
    height: 14px;
    background: #9ed6ca;
}
.header .header-logo {
    margin-top: 20px;
}
.header .header-navigation {
    width: 757px;
    text-align: center;
    margin: 0px auto;
    margin-top: 20px;
    clear: both;
}

.header .header-navigation-ul {
    width: 757px;
    clear: both;
    height: 31px;
    /* display: flex;
    justify-content: space-around; */
}
.header .header-navigation li {
  float: left;
  margin-left: 45px;
    width: 60px;
    height: 31px;
    color: #333;
}
.header .header-navigation li div {
    height: 27px;
}

.header .header-navigation li div:hover {
    color: #91d6c9;
    border-bottom: 4px solid #91d6c9;
    font-size: 16px;
}

.header .clke {
    color: #91d6c9;
    border-bottom: 4px solid #91d6c9;
    font-size: 16px;
}
</style>
