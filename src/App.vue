<template>
  <div id="app">
    
    <Header>  </Header>
    <router-view/>

    <Footer>  </Footer>
  </div>
</template>

<script>
import Header from '@/components/page/include/header'
import Footer from '@/components/page/include/footer'
export default {
  name: 'App',
  components:{Header,Footer},
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}



/* @keyframes fadein{
    0%{opacity: 0;
         }
    100%{
        opacity: 1;

    }
}
@-webkit-keyframes fadein{
        0%{opacity: 0;
         }
    100%{
        opacity: 1;

    }
}
@-moz-keyframes fadein{
        0%{opacity: 0;
         }
    100%{
        opacity: 1;

    }
}
@-o-keyframes fadein{
        0%{opacity: 0;
         }
    100%{
        opacity: 1;

    }
}
@-ms-keyframes fadein{
        0%{opacity: 0;
         }
    100%{
        opacity: 1;

    }
}
body{
    animation:fadein 2s linear 1;
    -webkit-animation:fadein 2s linear 1;
    -moz-animation:fadein 2s linear 1;
    -o-animation:fadein 2s linear 1;
    -ms-animation:fadein 2s linear 1;
} */
</style>
