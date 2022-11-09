<template>
    <div id="bk_03">
        <img id="skilltree02" src="../assets/F2EContent1/skilltree02.png" v-bind:class="{ moveRight: isActiveMoveRight }">
        <img id="Human" src="../assets/F2EContent1/Human.png" v-bind:class="{ moveRight: isActiveMoveRight }">
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
#bk_03 {
    /* 技能樹_02 */
    position: relative;
    width: 1485.57px;
    height: 1193.85px;
}
#skilltree02 {
/* Group */
    position: absolute;
    left: 36.48%;
    right: 0.24%;
    top: 0.3%;
    bottom: 69.42%;
}

#Human {
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
    animation: backInLeft .25s;
    transform-origin: center;
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