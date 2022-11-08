<template>
    <div>
        <div id = "navbar" v-bind:style="{'position':titlePositon}">
            <img align="left" src="../assets/header/TheF2e_logo.png" id="f2elogo" v-bind:style="{'position':titlePositon}">
            <div v-for="(item, index) in options" :key='index' v-bind:id="`options`" v-bind:value="`${item}`" >
                <div id="other" @mouseover="mouseOverTargetEvent($event)" @mouseleave="mouseLeaveTargetEvent($event)" @click="clickTargetEvent($event, item)">
                    {{ item }}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {OPTIONS_MAP_URL} from '../constants';

export default {
    data() {
        return {
            titlePositon: "static",
            titleColor: "transparent",
            titleBorder:"0",
            options:[]
        };
    },
    beforeMount(){
        this.options.push("登入");
        this.options.push("註冊報名");
        this.options.push("攻略資源");
        this.options.push("求職專區");
        this.options.push("作品列表");
        this.options.push("關卡資訊");
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
        window.onload = () => {
            var navbar = document.getElementById("navbar");
            console.log(navbar);
        }
    },
    methods: {
        handleScroll() {
            let scrollTop =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop;
            if (scrollTop > 500) {
                this.titlePositon = "fixed";
            } else {
                this.titlePositon = "static";
            }
        },
        clickTargetEvent(event, item){
            console.log("Click");
            console.log(event);
            console.log(item);
            if(OPTIONS_MAP_URL[item]){
                window.location.href = OPTIONS_MAP_URL[item];
            }else{
                alert('TBD');
            }
        },
        mouseOverTargetEvent(event){
            event.currentTarget.id = "selected";
        },
        mouseLeaveTargetEvent(event){
            event.currentTarget.id = "other";
        }
    }
}
</script>

<style>
#selected {
    background-color: gray;
}

#navbar {
  position: absolute;
  width: 100%;
  height: 100px;
  left: 0px;
  top: 0px;
  background: #231815;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

#f2elogo {
    position: absolute;
    width: 300.6px;
    height: 37.9px;
    left: 187px;
    margin-top: 15px;
    top: 31px;
    background: #231815;
}

#options {
    color: #F5F5F5;
    float: right;
    margin-top: 30px;
    margin-left: 25px;
    font-size: 25px;
}
</style>
