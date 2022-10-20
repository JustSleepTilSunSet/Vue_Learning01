<template>
    <div id="outLine" style="background:#DDFF77;">
        <div>
            <span style= "text-align:left; height:200px; margin:20px;font-size:15px;">
                <h1>章節一覽</h1>
                <div v-for="(item, index) in contents" :key='index' v-bind:id="'outline_'+ (index+1)" @click="ShowLog($event)" @mouseover="focusLog($event)" @mouseleave="leaveLog($event)" >
                    <h2> {{item}} </h2>
                </div>
            </span>
        </div>
    </div>
</template>
<script>
/**
 * TODO:
 * Outline點擊事件
 * 抓DivTemplate的id作為Outline內容
 */
 const {COUNT_CONTENT} = require('../constants');

 export default {
  data() {
    return {
      contents: [],
      elePosIterator: [],
      isMouseOver:false
    };
  },
  beforeMount(){
    for(let index = 1 ; index <= COUNT_CONTENT; index++){
      this.contents.push('測試文章段落' + " " +index);
    }
  },
  methods:{
    ShowLog:function(value){
        console.log(`click`, value);
        console.log(`getId`, value.currentTarget.id);
        value.currentTarget.id = "selected";
    },
    focusLog:function(value){
        console.log(`focus`);
        this.isMouseOver = true;
        value.currentTarget.id = "selected";
    },
    leaveLog:function(value){
        this.isMouseOver = false;
        value.currentTarget.id = "others";
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

<style>
#selected {
    background-color: yellow;
    font-size: 30px;
}
#others{
    font-size: 15px;
}
</style>