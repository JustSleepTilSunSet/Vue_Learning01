<template>
    <div id="outLine" style="background:#DDFF77;">
        <div>
            <span style="text-align:left; height:200px; margin:20px;font-size:15px;">
                <h1>章節一覽</h1>
                <div v-for="(item, index) in contents" :key='index' v-bind:id="'outline_'+ (index)"
                    @click="clickTargetEvent(index)" @mouseover="focusTargetEvent($event)" @mouseleave="leaveTargetEvent($event)"
                    style="border: thick double #32a1ce;"> <!-- 互動模板 -->
                    <div id="others" @mouseover="innerFocusTargetEvent($event)" @mouseleave="innerLeaveTargetEvent($event)"><!-- 樣式模板 -->
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
    data() {
        return {
            contents: [],
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
        clickTargetEvent: function (index) {
            window.location.href = `#`;
            window.location.href = `#child${index}`;
        },
        focusTargetEvent: function (value) {
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
        leaveTargetEvent: function (value) {
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
        innerFocusTargetEvent: function (value) {
            value.currentTarget.id = "selected";
        },
        innerLeaveTargetEvent: function (value) {
            value.currentTarget.id = "others";
        }
    }
}
</script>

<style>
#selected {
    background-color: yellow;
}
</style>