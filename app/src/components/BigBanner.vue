<template>
      <div id="BigTitle" style="background-color:#1376D8;">
          <img id="Title" src="../assets/title/Title.png">
          <img id="folder" src="../assets/title/folders.png" class="heart">
    </div>
</template>

<script>
export default {
}
</script>

<style>
    #BigTitle {
        /* 大標 */
        position: relative;
        width: 1113.71px;
        height: 878.57px;
    }
    #Title {
        /* 大標 */
        position: relative;
        width: 1113.71px;
        height: 878.57px;
        background-color:#1376D8;
    }
    #folder {
      /* Group */
        position: absolute;
        left: 30.1%;
        right: 27.57%;
        top: 43.1%;
        bottom: 16.24%;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }

    .heart {
      font-size: 150px;
      animation: beat .25s infinite alternate;
      transform-origin: center;
    }

    /* Heart beat animation */
    @keyframes beat{
        to { transform: scale(1.4); }
    }
</style>