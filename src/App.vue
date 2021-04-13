<template>
  <div id="app">
<!--    <img src="./assets/logo.png">-->
<!--    <div>-->
<!--      <p>-->
<!--        If Element is successfully added to this project, you'll see an-->
<!--        <code v-text="'<el-button>'"></code>-->
<!--        below-->
<!--      </p>-->
<!--      <el-button>el-button</el-button>-->
<!--    </div>-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
<el-container>
  <el-header>
    <Header msg="导航栏"/>
  </el-header>
  <el-container>
    <el-main>
      <Display msg="显示框"/>
    </el-main>
    <el-aside width="200px">
      <Aside msg="侧边栏"/>
    </el-aside>
  </el-container>
</el-container>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from "./components/Header";
import Display from "./components/Display";
import Aside from "./components/Aside";

export default {
  name: 'app',
  components: {
    Aside,
    Display,
    Header,
    // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
