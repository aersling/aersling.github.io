// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false



// router.afterEach( ( to, from, next ) => {
//   setTimeout(()=>{
//       var _hmt = _hmt || [];
//       (function() {
//           //每次执行前，先移除上次插入的代码
//           document.getElementById('baidu_tj') && document.getElementById('baidu_tj').remove();
//           var hm = document.createElement("script");
//           hm.src = "https://hm.baidu.com/hm.js?d23ba2e0df1993ca709587f4f2865bdf";
//           hm.id = "baidu_tj"
//           var s = document.getElementsByTagName("script")[0];
//           s.parentNode.insertBefore(hm, s);
//       })();
//   },0);
// } );


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
