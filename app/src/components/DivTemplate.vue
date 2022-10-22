<template>
  <!--html-->
  <div id="subDiv">
    <div v-for="(item, index) in contents" :key='index' v-bind:id="index+1" class="child3">
        {{item}}
    </div>
    <div></div>
  </div>
</template>

<script>
const {COUNT_CONTENT} = require('../constants');

export default {
  data() {
    return {
      contents: [],
      elePosIterator: []
    };
  },
  beforeMount(){
    for(let index = 0 ; index < COUNT_CONTENT; index++){
      this.contents.push('測試文章段落' + " " +index);
    }
  },
  mounted() {
    //建立測試區塊。
    for(let index = 1 ; index <= COUNT_CONTENT; index++){
        var element = document.getElementById(index);
        if(element!= null){
          this.elePosIterator.push({ 
            index,
            x: element.offsetLeft - element.scrollLeft + element.clientLeft,
            y: element.offsetTop - element.scrollLeft + element.clientTop
          });
        }
      }
  },
  watch:{
    elePosIterator: function(){
      console.log(`elePosIterator changed!!`);
      this.$emit("Get-Content-Pos", this.elePosIterator);
    }
  }
}
</script>