<template>
    <e-layout head title="check">
        <e-check-icon class="mt20 plr20" v-model="select" text="我的大家天津，简称津，是中华人民共和国直辖市、国家中心城市、超大城市、环渤海地区经济中心、首批沿海开放城市，全国先进制造研发基地、北方国际航运核心区、金融创新运营示范区、改革开放先行区。"></e-check-icon>
        <e-check-icon class="mt20 plr20" v-model="select" text="请认真阅读"></e-check-icon>

        <e-check-list class="mt20" :max="3" ref="checkList" tip v-model="selectIndex" :disabled="false" :list="checkList" :label-right="true" color="yellow" @change="print" plain>
            <template slot-scope="{item,index}">
                <e-item no-padding flex-direction="row">
                    <e-item-side :width="10">
                        <img src="https://cn.vuejs.org/images/logo.png">
                    </e-item-side>
                    <e-item-main>
                        {{item.text}}
                    </e-item-main>
                </e-item>
            </template>
        </e-check-list>
        {{selectIndex}}
        <a href="javacript:;" @click="choose">choose</a>
        <div class="mt20 pt20">
            <e-checker v-model="selectData" type="checkbox" default-item-class="demo-default bd-g9" selected-item-class="demo-selected text-blue bd-blue" disabled-item-class="demo-disabled">
                <e-checker-item v-for="el in checkList" :value="el">
                    hello
                </e-checker-item>
            </e-checker>
        </div>
        {{selectData}}
    </e-layout>
</template>
<script type="text/javascript">
export default {
    name: 'check',
    data() {
        return {
            select: false,
            checkList: [{
                value: 1,
                text: '目标是通过尽可能简单的\nAPI 实现响应的数据绑定和组合的视图组件',
            }, {
                value: 2,
                text: '上海'
            }, {
                value: 2,
                text: '天津'
            }, {
                value: 2,
                text: '广州'
            }, {
                value: 2,
                text: '深圳'
            }, {
                value: 2,
                text: '成都'
            }, ],
            selectData: [{
                value: 1,
                text: '目标是通过尽可能简单的\nAPI 实现响应的数据绑定和组合的视图组件',
            }],
            selectIndex:[5]
        }
    },
    methods: {
        choose() {
            this.$refs.checkList.choose(1, 2, 3, 4, 0);
        },
        print(value) {

        }
    }
}

</script>
<style lang="scss">
.demo-item {
    border-width: 0.013rem;
    border-style: solid;
    padding: 0.267rem 0.267rem;
    border-radius: 0.133rem;
    width: 1.333rem;
    height: 0.4rem;
    margin-left: 0.267rem;
}

.demo-selected {
    @extend .demo-item;
    border-color: blue;
    position: relative;
    &:after{
        position: absolute;
        content:'\e8b9';
        font-family: iconfont;
        font-size: 2em;
        bottom:-0.013rem;
        right: 0;
    }
}

.demo-default {
    @extend .demo-item;
    border-color: #000;
}

.demo-disabled {
    @extend .demo-item;
    border-color: #eee;
}

</style>
