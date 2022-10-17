<template>
    <div>
        <button @click="quicklyLogin"> {{this.buttonName}} </button>
        <div v-show="showHelloMessage" style="border: dashed red; height: 50%; width: 50%; background-color: powderblue; align: center;  margin-left: auto; margin-right: auto;">
            User Name:
            <input v-model="userName">
                <p>Logined user: {{ userName }}</p>
                <div v-if = "checkUserName">
                    {{alertWindow()}}
                </div>
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
            inValidUserName: false,
            inValidDetail:""
        };
    },
    methods: {
      // `this` points to the vm instance
        quicklyLogin: function () {
            this.showFrame = !this.showFrame;
            if(this.showFrame){
                this.buttonName = "Hidden";
            }else{
                this.buttonName = "Sign by name";
            }
        },
        sendUserName: function(){
            this.$emit("Submit-Trigger", this.userName);
            console.log("Submit-Trigger", this.userName);
        },
        alertWindow: function(){
            alert("超過字數上限!!");
            this.showFrame = false;
            this.buttonName = "Sign by name";
            this.loginedUser = "";
            this.userName = "";
            this.inValidUserName = false;
            this.inValidDetail ="";
        },
        triggerAlert: function(){
            this.$emit("trigger-Alert");
        }

    },
    computed: {
      // `this` points to the vm instance
        showHelloMessage(){
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
        userName: function(val){//val為監聽的參數，此處監聽為userName
            if(val.length > 25){
                this.inValidUserName = true;
            }
        }
    }
}
</script>
