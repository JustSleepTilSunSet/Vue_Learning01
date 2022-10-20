<template>
  <div id="app">
  <!--Title rectangle-->
    <div id="parent">
      <div class="child">
        <div v-show="isEmptyName">
          <h2>Hi, {{loginedUserName}} .</h2>
        </div>
        <div style="float:right">
          <img alt="Vue logo" src="./assets/logo.png" style="float:top; width:20%;height:20%">
            <RegisterButton @Submit-Trigger="SubmitTrigger">
            <moduleName msg="Plus button and Subtract button"/>
          </RegisterButton>
        </div>
      </div>
    <BuildOutLine></BuildOutLine>
  <!--Content rectangle-->
      <DivTemplate @Get-Content-Pos="GetContentPos" ></DivTemplate>
  </div>
    
  </div>
</template>

<script>
import RegisterButton from './components/RegisterButton.vue';
import DivTemplate from './components/DivTemplate.vue';
import BuildOutLine from './components/BuildOutLine.vue';

export default {
  name: 'App',
  data() {
        return {
            loginedUserName: "",
            elePosition:[]
        };
  },
  mounted(){
    this.loginedUserName = localStorage.getItem("userName");
  },
  methods:{
    SubmitTrigger: function(value){
      localStorage.setItem("userName", value);
      this.loginedUserName = localStorage.getItem("userName");
      alert("註冊成功!!");
    },
    GetContentPos: function(value){
      console.log(`main value: ${JSON.stringify(value,null,2)}`);
    }
  },
  computed:{
    isEmptyName(){
      return this.loginedUserName != null;
    }
  },
  components: {
    RegisterButton,
    DivTemplate,
    BuildOutLine
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#parent{
  background: #999;
  padding:10px;
}
.child {background:#ccc; height:200px; margin:20px;}
.child2 {background:#DDFF77; height:200px; margin:20px;}
.child3 {background:#9fffa4; height:200px; margin:20px;}

::-webkit-scrollbar {
    width: 20px;
}
::-webkit-scrollbar-track {
    background: rgb(192, 192, 192);
    border-radius: 10px;
}
::-webkit-scrollbar-thumb {
    background: rgb(154, 101, 16);
    border-radius: 10px;
}

</style>
