<template>
  <!--html-->
  <div id="subDiv">
    <div v-for="(item, index) in contents" :key='index' v-bind:id="`child${index}`" class="content"
      :ref="`child${index}`" >
      {{ item.content }}
    </div>
  </div>
</template>

<script>
const { COUNT_CONTENT } = require('../constants');

export default {
  props: {
    goToIndex: Number
  },
  data() {
    return {
      contents: [],
      isShakeTrigger: false,
      isActivity: false
    };
  },
  beforeMount() {
    for (let index = 0; index < COUNT_CONTENT; index++) {
      this.contents.push(
        {
          "content": '測試文章段落' + " " + index,
          "index": index
        }
      );
    }
  },
  mounted() {
    window.addEventListener('hashchange', (e) => {
      e.preventDefault();
      this.hashTrigger();
    })
    this.hashTrigger();// for first.
  },
  methods: {
    hashTrigger() {
      const hash = window.location.hash;
      if (hash && hash !== '') {
        // 視窗滑動:
        let div = document.querySelector(hash);
        window.scroll({
          top: div.offsetTop,
          left: 0,
          behavior: 'smooth'
        });

        // 設定醒目提示：
        setTimeout(() => {
          div.classList.add('shake')
          setTimeout(() => {
            div.classList.remove('shake')
          }, 920)
        }, 500)
      }
    }
  }
}
</script>

<style>
* {
  scroll-behavior: smooth;
}

.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
}
.content {
  background:#9fffa4;
   height:200px;
   margin:40px;
   padding:20px;
}

@keyframes shake {

  10%,
  90% {
    transform: translate3d(-2px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(4px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-8px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(8px, 0, 0);
  }
}
</style>