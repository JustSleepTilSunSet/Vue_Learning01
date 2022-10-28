<template>
    <div>
        <button @click="quicklyLogin"> {{this.buttonName}} </button>
        <div v-show="showSignUpFrame" style="border: dashed red; height: 50%; width: 50%; background-color: powderblue; align: center;  margin-left: auto; margin-right: auto;">
            User Name:
            <input v-model="userName" style="height: 30%; width: 30%">
                <div v-if = "checkUserName">
                    {{alertWindow()}}
                </div>
            <br/>
            <!-- Mail -->
                Mail-address:
            <input v-model="mail" style="height: 30%; width: 30%">
            <button @click="sendUserName"> {{this.sendNameButton}} </button>
        </div>
    </div>
</template>


<script>
export default {
    name: 'RegisterButton',
    data() {
        return {
            showFrame: false,
            buttonName: "Sign by name",
            sendNameButton: "Send name",
            loginedUser: "",
            userName: "",
            mail:"",
            inValidUserName: false,
            inValidDetail:""
        };
    },
    methods: {
        quicklyLogin: function () {
            this.showFrame = !this.showFrame;
            if(this.showFrame){
                this.buttonName = "Hidden";
            }else{
                this.buttonName = "Sign by name";
            }
        },
        sendUserName: function(){
            if(this.userName.length != 0){
                this.showFrame = false;
                this.buttonName = "Sign by name";
                this.$emit("Submit-Trigger", this.userName, this.mail);//會結束函數執行。
                console.log("Submit-Trigger", this.userName, this.mail);
            }else if (this.userName.length == 0){
                alert("不接受使用空白名字提交!");
            }
        },
        alertWindow: function(){
            alert(this.inValidDetail);
            this.showFrame = false;
            this.buttonName = "Sign by name";
            this.loginedUser = "";
            this.userName = "";
            this.inValidUserName = false;
            this.inValidDetail ="";
        }

    },
    computed: {
      // `this` points to the vm instance
        showSignUpFrame(){
            return this.showFrame; //不可以再對this的值做修改。
        },
        checkUserName(){
            if(this.inValidUserName){
                return true;
            }
            return false;
        }
    },
    watch: {
        userName: function(val){//避免輸入過長名字
            if(val.length > 25){
                this.inValidUserName = true;
                this.inValidDetail ="名稱過長";
            }
        }
    }
}
</script>
