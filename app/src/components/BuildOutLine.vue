<template>
    <div id="outLine" style="background:#DDFF77;">
        <div>
            <span style="text-align:left; height:200px; margin:20px;font-size:15px;">
                <h1>章節一覽</h1>
                <div v-for="(item, index) in contents" :key='index' v-bind:id="'outline_'+ (index+1)"
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
            contentPos: [],
            currElement:""
        };
    },
    beforeMount() {
        for (let index = 1; index <= COUNT_CONTENT; index++) {
            this.contents.push('測試文章段落' + " " + index);
        }

        for (let index = 0; index < COUNT_CONTENT; index++) {
            this.orgId['outline_' + (index)] = 'outline_' + (index);
        }
    },
    methods: {
        ShowLog: function (value) {
            console.log(`click`, value);
            console.log(`getId`, value.currentTarget.id);
            let tp = ((value.currentTarget.id)+"").split('_');
            let index = tp[tp.length-1];
            let goTo;
            for(let [key, value] of Object.entries(this.elePosition)){
                if(key == (index)){
                    goTo = value;
                    break;
                }
            }
            window.scrollTo(goTo.x,goTo.y-100); 
        },
        focusLog: function (value) {
            console.log(`focus`);
            this.isMouseOver = true;
            let tp = this.orgId[value.currentTarget.id];//紀錄原先id。
            value.currentTarget.id = "selected_" + this.orgId[value.currentTarget.id];//更新id為被選擇之狀態。
            this.orgId[value.currentTarget.id] = tp;//令新id與舊id對應。
            delete this.orgId[tp];//刪除原先id鍵值。
            this.isMouseOver = true;
        },
        leaveLog: function (value) {
            this.isMouseOver = false;
            let tp = value.currentTarget.id;//取得最新的id。
            value.currentTarget.id = this.orgId[tp];//最新id對照原id。
            this.orgId[value.currentTarget.id] = value.currentTarget.id;//歸還原id。
            delete this.orgId[tp];//刪除最新的id。
            this.isMouseOver = false;
        },
        innerFocusLog: function(value){
            value.currentTarget.id = "selected";
        },
        innerLeaveLog: function(value){
            value.currentTarget.id = "others";
        }
    },
    watch: {
        elePosIterator: function () {
            console.log(`elePosIterator changed!!`);
            this.$emit("Get-Content-Pos", this.elePosIterator);
        }
    }
}
</script>

<style>
#selected {
    background-color: yellow;
}

#others {
    font-size: 15px;
}
</style>