<template>
    <e-layout>
        <stu-header slot="header">
            <p class="font20">accordion</p>
        </stu-header>
        <p class="example-table-title font16">组件html tag：e-accordion</p>
        <table class="example-table">
            <thead>
                <tr>
                    <th>参数</th>
                    <th>类型</th>
                    <th>是否必须</th>
                    <th>默认值</th>
                    <th>备注</th>
                </tr>
            </thead>  
            <tbody>
                <tr>
                    <th>value</th>
                    <th>string/array</th>
                    <th>否</th>
                    <th>无</th>
                    <th>可使用v-model</th>
                </tr>
                <tr>
                    <th>activeClass</th>
                    <th>string/array</th>
                    <th>否</th>
                    <th>''</th>
                    <th>展开时的class</th>
                </tr>
                <tr>
                    <th>disabled</th>
                    <th>Boolean</th>
                    <th>否</th>
                    <th>false</th>
                    <th>是否禁用</th>
                </tr>
                <tr>
                    <th>radio</th>
                    <th>Boolean</th>
                    <th>否</th>
                    <th>false</th>
                    <th>是否单选</th>
                </tr>
                <tr>
                    <th>animate</th>
                    <th>Boolean</th>
                    <th>否</th>
                    <th>false</th>
                    <th>是否启动动画</th>
                </tr>
                <tr>
                    <th>noArrow</th>
                    <th>Boolean</th>
                    <th>否</th>
                    <th>false</th>
                    <th>是否隐藏箭头</th>
                </tr>
            </tbody>
        </table>

        <p class="example-table-title font16">组件html tag：e-accordion-item</p>
        <table class="example-table">
            <thead>
                <tr>
                    <th>参数</th>
                    <th>类型</th>
                    <th>是否必须</th>
                    <th>默认值</th>
                    <th>备注</th>
                </tr>
            </thead>  
            <tbody>
                <tr>
                    <th>title</th>
                    <th>string</th>
                    <th>否</th>
                    <th>无</th>
                    <th>显示头部文案</th>
                </tr>
                <tr>
                    <th>slot "title"</th>
                    <th>html</th>
                    <th>否</th>
                    <th>无</th>
                    <th>title的slot</th>
                </tr>
                <tr>
                    <th>slot "content"</th>
                    <th>html</th>
                    <th>否</th>
                    <th>无</th>
                    <th>content的slot</th>
                </tr>
            </tbody>
        </table>

        <p class="example-table-title font16">尝试一下</p>
        <e-separator></e-separator>
        <e-check-icon v-model="animate" text="animate" default-type="no-check" default-color="g6" active-type="check" active-color="blue" :icon-size="20"></e-check-icon>
        <e-separator></e-separator>
        <e-check-icon v-model="radio" text="radio" default-type="no-check" default-color="g6" active-type="check" active-color="blue" :icon-size="20"></e-check-icon>
        <e-separator></e-separator>
        <e-accordion class="mt20" :animate="animate" :radio="radio">
            <e-accordion-item v-for="item in list">
                <template slot="title">
                    <p class="font16">{{item.title}}</p>
                </template>
                <template slot="content">
                    {{item.content}}
                </template>
            </e-accordion-item>
        </e-accordion>
        <p class="plr30">value:{{value}}</p>
    </e-layout>
</template>
<script>
import { eAccordion } from '@';
export default {
    name: 'accordion',
    data() {
        return {
            animate: false,
            radio: false,
            msg: 'Welcome to ekwing',
            list: [{
                title: '北京',
                content: '北京，简称“京”，是中华人民共和国首都、直辖市、国家中心城市、超大城市，全国政治中心、文化中心、国际交往中心、科技创新中心，是世界著名古都和现代化国际城市，是中国共产党中央委员会、中华人民共和国中央人民政府和全国人民代表大会常务委员会的办公所在地。',
            }, {
                title: '上海',
                content: '上海，简称“沪”或“申”，是中国共产党的诞生地，是中华人民共和国省级行政区、直辖市，国家历史文化名城，国际经济、金融、贸易、航运、科技创新中心。上海位于中国华东地区，界于东经120°52′-122°12′，北纬30°40′-31°53′之间，地处长江入海口，东隔东中国海与日本九州岛相望，南濒杭州湾，北、西与江苏、浙江两省相接，上海市总面积6340.5平方千米。',
            }, {
                title: '天津',
                content: '天津，简称津，是中华人民共和国直辖市、国家中心城市、超大城市、环渤海地区经济中心、首批沿海开放城市，全国先进制造研发基地、北方国际航运核心区、金融创新运营示范区、改革开放先行区。',
            }, {
                title: '深圳',
                content: '深圳，简称“深”，别称“鹏城”，是中国四大一线城市之一，广东省省辖市、计划单列市、副省级市、国家区域中心城市、超大城市，国务院定位的全国性经济中心城市和国际化城市、国家创新型城市、国际科技产业创新中心、全球海洋中心城市、国际性综合交通枢纽，粤港澳大湾区四大中心城市之一，中国三大全国性金融中心之一。',
            }],
            value: [1]
        }
    },
    methods: {
        choose() {
            alert('1')
        }
    },
    components: {
        eAccordion,
    },
    created() {}
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.demo-active-item {
    background-color: #e5f7ff;
}

</style>
