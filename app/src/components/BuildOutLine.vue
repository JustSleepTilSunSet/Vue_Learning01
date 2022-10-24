<template>
    <div id="outLine" style="background:#DDFF77;">
        <div>
            <span style="text-align:left; height:200px; margin:20px;font-size:15px;">
                <h1>章節一覽</h1>
                <div v-for="(item, index) in contents" :key='index' v-bind:id="'outline_'+ (index)"
                    @click="ShowLog($event)" @mouseover="focusLog($event)" @mouseleave="leaveLog($event)"
                    style="border: thick double #32a1ce;"> <!-- 互動模板 -->
                    <div id="others" @mouseover="innerFocusLog($event)" @mouseleave="innerLeaveLog($event)"><!-- 樣式模板 -->
                        <h2> {{item}} </h2>
                    </div>
                </div>
            </span>
        </div>
    </div>
</template>
<script>

const { COUNT_CONTENT } = require('../constants');

export default {
    props: {
        elePosition: Array
    },
    data() {
        return {
            contents: [],
            elePosIterator: [],
            isMouseOver: false,
            orgId: {},
            contentPos: []
        };
    },
    beforeMount() {
        for (let index = 0; index < COUNT_CONTENT; index++) {
            this.contents.push("大綱" + " " + index);
        }
        for (let index = 0; index < COUNT_CONTENT; index++) {
            this.orgId["outline_" + (index)] = "outline_" + (index);
        }
    },
    methods: {
        ShowLog: function (value) {
            let tp = ((value.currentTarget.id) + "").split("_");
            let index = tp[tp.length - 1];
            let goTo;
            for (let [key, value] of Object.entries(this.elePosition)) {
                if (key == (index)) {
                    goTo = value;
                    break;
                }
            }
            window.scrollTo(goTo.x, goTo.y - 200);
            this.$emit("Go-To", goTo.index);
        },
        focusLog: function (value) {
            //Step1. 紀錄原先id。
            let tp = this.orgId[value.currentTarget.id];

            //Step2. 更新id為被選擇之狀態。
            value.currentTarget.id = "selected_" + this.orgId[value.currentTarget.id];

            //Step3. 令新id與舊id對應。
            this.orgId[value.currentTarget.id] = tp;

            //Step4. 刪除原先id鍵值。
            delete this.orgId[tp];
            this.isMouseOver = true;
        },
        leaveLog: function (value) {
            //Step1. 紀錄原先id。
            let tp = value.currentTarget.id;

            //Step2. 最新id對照原id。
            value.currentTarget.id = this.orgId[tp];

            //Step3. 歸還原id。
            this.orgId[value.currentTarget.id] = value.currentTarget.id;

            //Step4. 刪除最新的id。
            delete this.orgId[tp];

            this.isMouseOver = false;
        },
        innerFocusLog: function (value) {
            value.currentTarget.id = "selected";
        },
        innerLeaveLog: function (value) {
            value.currentTarget.id = "others";
        },
        haloWorld: function(){

        }
    },
    watch: {
        elePosIterator: function () {
            this.$emit("Get-Content-Pos", this.elePosIterator);
        }
    }
}
</script>

<style>
#selected {
    background-color: yellow;
}
.slidein {
  animation: 3s slidein;
}
@keyframes slidein {
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
}
#others {
    font-size: 15px;
}
</style>