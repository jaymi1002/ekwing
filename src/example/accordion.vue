<template>
    <e-layout head shadow title="accordion">
        <p class="font18 tc lh3 bold fa">animate</p>
        <e-accordion active-class="demo-active-item" :value="0">
            <e-accordion-item v-for="item in list">
                <template slot="title">
                    <e-item no-padding>
                        <e-item-main justify-content="start">
                            <p class="font16 lh3">{{item.title}}</p>
                        </e-item-main>
                        <e-item-side right>
                            <e-icon type="close-hollow" size="1.5em"></e-icon>
                        </e-item-side>
                    </e-item>
                </template>
                <template slot="content">
                    {{item.content}}
                </template>
            </e-accordion-item>
        </e-accordion>
        <p class="font18 tc lh3 bold fa">animate false</p>
        <e-accordion active-class="demo-active-item" :value="0" :animate="false">
            <e-accordion-item v-for="item in list">
                <template slot="title">
                    <e-item no-padding>
                        <e-item-main justify-content="start">
                            <p class="font16 lh3">{{item.title}}</p>
                        </e-item-main>
                        <e-item-side right>
                            <e-icon type="close-hollow" size="1.5em"></e-icon>
                        </e-item-side>
                    </e-item>
                </template>
                <template slot="content">
                    {{item.content}}
                </template>
            </e-accordion-item>
        </e-accordion>

        <p class="font18 tc lh3 bold fa">radio false</p>
        <e-accordion active-class="demo-active-item" :value="[0]" :radio="false">
            <e-accordion-item v-for="item in list">
                <template slot="title">
                    <e-item no-padding>
                        <e-item-main justify-content="start">
                            <p class="font16 lh3">{{item.title}}</p>
                        </e-item-main>
                        <e-item-side right>
                            <e-icon type="close-hollow" size="1.5em"></e-icon>
                        </e-item-side>
                    </e-item>
                </template>
                <template slot="content">
                    {{item.content}}
                </template>
            </e-accordion-item>
        </e-accordion>
    </e-layout>
</template>
<script>
import { eAccordion } from '@/ekwing/src';
export default {
    name: 'accordion',
    data() {
        return {
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
            value: 1
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
