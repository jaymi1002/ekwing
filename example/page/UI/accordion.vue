<template>
    <e-layout>
        <stu-header>
            <p class="font20">accordion</p>
        </stu-header>
        <e-content>
            <p class="tc lh3 font16">尝试一下</p>
            <e-separator></e-separator>
            <e-check-icon v-model="animate" text="animate" default-type="no-check" active-type="check" :icon-size="20"></e-check-icon>
            <e-separator></e-separator>
            <e-check-icon v-model="radio" text="radio" default-type="no-check" active-type="check" :icon-size="20"></e-check-icon>
            <e-separator></e-separator>
            <e-check-icon v-model="disabled" text="disabled" default-type="no-check" active-type="check" :icon-size="20"></e-check-icon>
            <e-separator></e-separator>
            <e-separator class="mt20"></e-separator>
            <e-accordion v-model="index" :animate="animate" :radio="radio" :disabled="disabled">
                <e-accordion-item v-for="(item,key) in list" :value="key">
                    <e-accordion-header :title="item.title">
                        <p class="font18">{{item.title}}</p>
                    </e-accordion-header>
                    <e-accordion-content class="">
                        {{item.content}}
                    </e-accordion-content>
                    <e-separator></e-separator>
                </e-accordion-item>
            </e-accordion>
            <div class="font14 ptb30">
                <param-table :list="accordionInfo">
                    <template slot="title">组件html tag：e-accordion</template>
                    <template slot="tip">必须设置字体图标 arrow-up</template>
                </param-table>
                <param-table :list="accordionExt">
                    <!-- <template slot="title">组件html tag：e-accordion</template> -->
                </param-table>
            </div>
            <div class="font14 ptb30">
                <param-table :list="accordionItemInfo">
                    <template slot="title">组件html tag：e-accordion-item</template>
                </param-table>
                <param-table :list="accordionItemExt">
                </param-table>
            </div>
            <div class="font14 ptb30">
                <param-table :list="accordionHeader">
                    <template slot="title">组件html tag：e-accordion-header</template>
                </param-table>
            </div>
        </e-content>
    </e-layout>
</template>
<script>
import { eAccordion, eAccordionItem, eAccordionHeader, eAccordionContent } from '@/components';
import mergeProps from '@/../example/lib/mergeProps';
export default {
    name: 'accordion',
    data() {
        return {
            index: [0],
            animate: false,
            radio: false,
            disabled: false,
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
            value: [1],

            //参数说明
            accordionInfo: mergeProps(eAccordion),
            accordionItemInfo: mergeProps(eAccordionItem),
            accordionHeader: mergeProps(eAccordionHeader),
            accordionContent: mergeProps(eAccordionContent),
            accordionExt: [{
                name: 'default',
                type: 'slot',
            }],
            accordionItemExt: [{
                name: 'title',
                type: 'slot',
            }, {
                name: 'content',
                type: 'slot',
            }],
        }
    },
    mounted() {},
    methods: {
        choose() {

        }
    },
    created() {}
}

</script>
<style lang="scss">
.demo-active-item {
    background-color: #e5f7ff;
}

</style>
