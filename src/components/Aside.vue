<template>
  <div>
    <h1>
      This is Aside!
    </h1>
    <p v-for="item in categoryList" v-bind:key="item.id">{{ item.category }}</p>
  </div>
</template>

<script>
import {getCategory, postBook} from '../../api/api.js'

export default {
  name: 'Aside',
  props: {
    msg: String
  },
  data() {
    return {
      categoryList: [],
    }
  },
  created() {
    this.getCate();
  },
  methods: {
    getCate() {
      getCategory().then(res => {
        var result = res.data;
        if (result.code == 200) {
          this.categoryList = result.category_name;
          console.log(result.message);
        }
      }).catch(err => {
        console.log(err);
      });
    }
  }
}

</script>
