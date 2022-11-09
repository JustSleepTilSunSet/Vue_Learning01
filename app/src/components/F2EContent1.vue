<template>
    <div id="bk_02">
            <img id="skilltree_logo" src="../assets/F2EContent1/skilltree_logo.png">
            <img id="skilltree01" src="../assets/F2EContent1/skilltree01.png" v-bind:class="{ moveLeft: isActiveMoveLeft }">
            <div id="bk_03">
                <img id="skilltree02" src="../assets/F2EContent1/skilltree02.png" v-bind:class="{ moveRight: isActiveMoveRight }">
                <img id="human" src="../assets/F2EContent1/Human.png" v-bind:class="{ fadeInDownBig: isActiveMoveRight }">
            </div>
            <img id="skilltree02_2" src="../assets/F2EContent1/skilltree02_2.png" v-bind:class="{ backInUp: isActiveMoveRight }">
    </div>
</template>

<script>
export default {
    data() {
        return {
            isActiveMoveLeft: true,
            isActiveMoveRight: true

        };
    },
    components: {
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
        window.onload = () => {
           this.skilltree01Node = document.getElementById("skilltree01");
        };
    },
    methods: {
        handleScroll() {
            let scrollTop =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop;
            console.log(scrollTop);
            if (scrollTop > 10 && scrollTop < 1300) {
                this.isActiveMoveLeft = true;
                this.isActiveMoveRight = true;
            } else {
                this.isActiveMoveLeft = false;
                this.isActiveMoveRight = false;
            }
        }
    }
}
</script>

<style>
#bk_02 {
    position: absolute;
    width: 1920px;
    height: 2160px;
    background-image: url('../assets/F2EContent1/bk_02.png');
}

#skilltree_logo {
    /* 技能樹_logo */
    position: relative;
    width: 1666.27px;
    height: 173.75px;
}
#skilltree01 {
    /* 技能樹_01 */
    position: relative;
    width: 1568.21px;
    height: 438.99px;
}
#bk_03 {
    /* 技能樹_02 */
    position: relative;
    width: 1485.57px;
    height: 1193.85px;
    margin-left: 203px;
    margin-right: 231.43px;
    margin-bottom: 121.15px;
}
#bk_03#skilltree02 {
    /* 技能樹02框 */
    position: absolute;
    left: 36.48%;
    right: 0.24%;
    top: 0.3%;
    bottom: 69.42%;
}
#skilltree02_2 {
    /* Group */
    position: absolute;
    left: 0.29%;
    right: 51.19%;
    top: 34.53%;
    bottom: 2.87%;
    margin-bottom: 34.25px;
}
#human {
    /* Human */
    position: absolute;
    left: 70.75%;
    right: 22.2%;
    top: 18.52%;
    bottom: 71%;
}

.moveRight{
    animation: backInRight .25s;
    transform-origin: center;
}
.moveLeft{
    animation: backInLeft .25s;
    transform-origin: center;
}
.fadeInDownBig{
    animation: fadeInDownBig .25s;
    transform-origin: center;
}
.backInUp{
    animation: backInUp .25s;
    transform-origin: center;
}
@keyframes backInUp {
   0% {
      opacity: 0;
      transform: translateY(-2000px);
   }
   100% {
      opacity: 1;
      transform: translateY(0);
   } 
} 

@keyframes fadeInDownBig {
   0% {
      opacity: 0;
      transform: translateY(-2000px);
   }
   100% {
      opacity: 1;
      transform: translateY(0);
   } 
} 

@keyframes backInLeft {
  0% {
    transform: translateX(-2000px) scale(.7);
    opacity: .7;
  }

  80% {
    transform: translateX(0px) scale(.7);
    opacity: .7;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes backInRight {
  0% {
    transform: translateX(2000px) scale(.7);
    opacity: .7;
  }

  80% {
    transform: translateX(0px) scale(.7);
    opacity: .7;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>