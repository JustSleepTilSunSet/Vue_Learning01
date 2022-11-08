<template>
  <div id="app">
    <NavBar></NavBar>
    <BigBanner></BigBanner>
    <button id="outLine" style="width:100%; height:150px; font-size: 20px; background-color: aquamarine;" @click="openOutLine()"> 點擊後開啟大綱模式 </button>
    <BuildOutLine v-if="isOpenOutLine">{{this.openOutLineContent}}</BuildOutLine>
    <content1></content1>
  <!--Title rectangle-->
    <div id="parent">
      <div class="title">
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

  <!--Content rectangle-->
      <DivTemplate :goToIndex="goToIndex" ></DivTemplate>
  </div>
    
  </div>
</template>

<script>
import RegisterButton from './components/RegisterButton.vue';
import DivTemplate from './components/DivTemplate.vue';
import BuildOutLine from './components/BuildOutLine.vue';
import NavBar from './components/NavBar.vue';
import sampleServerClient from './client/sampleServerClient';
import BigBanner from './components/BigBanner.vue'

const EVENT_VALUE_DEFINE = {
  USER_NAME: 0,
  MAIL: 1
}

export default {
  name: 'App',
  data() {
        return {
            loginedUserName: "",
            elePosition:[],
            goToIndex:-1,
            isOpenOutLine:false,
            openOutLineContent:"點擊後開啟大綱模式"
        };
  },
  mounted(){
    this.loginedUserName = localStorage.getItem("userName");
  },
  methods:{
    SubmitTrigger: async function(... values){
      localStorage.setItem("userName", values[EVENT_VALUE_DEFINE.USER_NAME]);
      this.loginedUserName = localStorage.getItem("userName");
      let sampleSRes = (await sampleServerClient.signUp({
        userName: values[EVENT_VALUE_DEFINE.USER_NAME],
        mail: values[EVENT_VALUE_DEFINE.MAIL]
      })).serverRes;
      if(typeof sampleSRes === 'undefined')
        alert("註冊失敗!!");
      else
        alert("註冊成功!!");
    },
    GoToContent: function(value){
      this.goToIndex = value;
    },
    openOutLine: function(){
      this.isOpenOutLine=!this.isOpenOutLine;
      this.openOutLineContent="關閉大綱模式";
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
    BuildOutLine,
    NavBar,
    BigBanner
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

.title {
  background:#ccc;
   height:200px;
  margin:20px;
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


.heart {
	font-size: 150px;
	color: #e00;
	animation: beat .25s infinite alternate;
	transform-origin: center;
}

/* Heart beat animation */
@keyframes beat{
	to { transform: scale(1.4); }
}

</style>
