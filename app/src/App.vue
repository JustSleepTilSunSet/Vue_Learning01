<template>
  <div id="app">
    <div id="parent">
      <div class="child">
        <div v-show="isEmptyName">
          <h2>Hi, {{loginedUserName}} .</h2>
        </div>
        <div style="float:right">
          <img alt="Vue logo" src="./assets/logo.png" style="width:50%;height:50%">
            <RegisterButton @Submit-Trigger="SubmitTrigger">
            <moduleName msg="Plus button and Subtract button"/>
          </RegisterButton>
        </div>
      </div>
    <div class="child2">
      大意及段落設計:
    </div>
    <div class="child">
      活動區塊段落1
    </div>
    <div class="child">
      活動區塊段落2
    </div>
    <div class="child">
      活動區塊段落3
    </div>
    <div class="child">
      活動區塊段落4
    </div>
    <div class="child">
      活動區塊段落5
    </div>
    <div class="child">
      活動區塊段落6
    </div>
    <div class="child">
      活動區塊段落7
    </div>
    <div class="child">
      活動區塊段落8
    </div>
    <div class="child">
      活動區塊段落9
    </div>
    <div class="child">
      活動區塊段落10
    </div>
  </div>
    
  </div>
</template>

<script>
import RegisterButton from './components/RegisterButton.vue';
export default {
  name: 'App',
  data() {
        return {
            loginedUserName: ""
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
    }
  },
  computed:{
    isEmptyName(){
      return this.loginedUserName != null;
    }
  },
  components: {
    RegisterButton
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

/* Designing for Content */
#parent{
  background: #999;
  padding:10px;
}
.child {background:#ccc; height:200px; margin:20px;}
.child2 {background:#DDFF77; height:200px; margin:20px;}

     
</style>
