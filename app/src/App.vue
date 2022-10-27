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
          </RegisterButton>
        </div>
      </div>

  <!--Outline rectangle-->
      <BuildOutLine :elePosition="elePosition"  @Go-To="GoToContent"></BuildOutLine>

  <!--Content rectangle-->
      <DivTemplate :goToIndex="goToIndex" @Get-Content-Pos="GetContentPos" ></DivTemplate>
  </div>
    
  </div>
</template>

<script>
import RegisterButton from './components/RegisterButton.vue';
import DivTemplate from './components/DivTemplate.vue';
import BuildOutLine from './components/BuildOutLine.vue';
import sampleServerClient from './client/sampleServerClient';

export default {
  name: 'App',
  data() {
        return {
            loginedUserName: "",
            elePosition:[],
            goToIndex:-1
        };
  },
  mounted(){
    this.loginedUserName = localStorage.getItem("userName");
  },
  methods:{
    SubmitTrigger: async function(value){
      localStorage.setItem("userName", value);
      this.loginedUserName = localStorage.getItem("userName");
      alert("註冊成功!!");
      let res = (await sampleServerClient.signUp({
        userName: this.loginedUserName
      })).userData;
      console.log(`註冊成功: `, res);
    },
    GetContentPos: function(value){
      this.elePosition = value;
    },
    GoToContent: function(value){
      this.goToIndex = value;
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
  background: rgb(216, 215, 215);
  padding:10px;
}
.child {
  background:#ccc;
   height:200px;
  margin:20px;
}
.child2 {
  background:#DDFF77; height:200px; margin:20px;
}
.child3 {
  background:#9fffa4; height:200px; margin:20px;
}

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
