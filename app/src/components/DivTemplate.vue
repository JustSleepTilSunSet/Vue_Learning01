<template>
  <!--html-->
  <div id="subDiv">
    <div v-for="(item, index) in contents" :key='index' v-bind:id="index" :class=" isItemSelected(item, goToIndex)">
      {{item.content}}
    </div>
  </div>
</template>

<script>
const {COUNT_CONTENT} = require('../constants');

export default {
  props: {
    goToIndex: Number
  },
  data() {
    return {
      contents: [],
      elePosIterator: [],
      contentDiv: []
    };
  },
  beforeMount(){
    for(let index = 0 ; index < COUNT_CONTENT; index++){
      this.contents.push(
        {
          "content": '測試文章段落' + " " +index,
          "index": index
        }
      );
    }
  },
  mounted() {
    //建立測試區塊。
    for(let index = 0 ; index < COUNT_CONTENT; index++){
        var element = document.getElementById(index);
        if(element!= null){
          this.elePosIterator.push({ 
            index,
            x: element.offsetLeft - element.scrollLeft + element.clientLeft,
            y: element.offsetTop - element.scrollLeft + element.clientTop
          });
        }
      }
      this.contentDiv = this.$refs.refDiv;
  },
  methods: {
    isItemSelected(value, goToIndex){
      if(value.index == goToIndex){
        this.$set(value,"class","shake");
        return "shake";
      }
        return "child3";
    },
    async testing(){
      return "shake";
    }
  },
  watch:{
    elePosIterator: function(){
      this.$emit("Get-Content-Pos", this.elePosIterator);
    }
  }
}
</script>

<style>
.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  background:#9fffa4; height:200px; margin:20px;
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>