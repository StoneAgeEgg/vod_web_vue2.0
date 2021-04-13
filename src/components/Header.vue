<template>
<div class="nav">
    <el-dropdown>
  <span >
    打开<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu >
    <button class="dropdown">
    <el-dropdown-item> <el-upload
  class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/">
  <el-button size="small" type="primary">打开单张图片</el-button></el-upload></el-dropdown-item>
   <el-upload
  class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/">
  <el-button size="small" type="primary">打开图片文件夹</el-button></el-upload>
    <el-dropdown-item> <el-upload
  class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/">
  <el-button size="small" type="primary">打开视频</el-button></el-upload></el-dropdown-item>
    </button>
  </el-dropdown-menu>
</el-dropdown>
    <router-link to="/./">  |  导出</router-link> |
    <el-popover
    title="标题"
    width="200"
    trigger="click"
    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
     <el-button class="nav">测试</el-button> 
     </el-popover>
     
  </div>

</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
.el-icon-arrow-down {
    font-size: 12px;
  }

.nav {
  padding: 20px;
  text-align:left;
  
}

</style>
