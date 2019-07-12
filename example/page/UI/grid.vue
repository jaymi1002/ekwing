<template>
    <e-layout title="grid">
        <stu-header title="grid">
        </stu-header>
        <e-content>
            <e-check-icon v-model="hideLrBorder" text="hideLrBorder" default-type="no-check" default-color="g6" active-type="check" active-color="blue" :icon-size="20"></e-check-icon>
            <e-check-icon v-model="hideVerticalDividers" text="hideVerticalDividers" default-type="no-check" default-color="g6" active-type="check" active-color="blue" :icon-size="20"></e-check-icon>
            <e-check-icon v-model="hideTbBorder" text="hideTbBorder" default-type="no-check" default-color="g6" active-type="check" active-color="blue" :icon-size="20"></e-check-icon>
            <e-separator></e-separator>
            <div class="input-wrap plr30">
                <e-input style="height:1.333rem;" v-model="cols" label="cols:" type="number"></e-input>
            </div>
            <div class="plr10">
                <e-grid class="mt20" :cols="parseInt(cols)" :hide-vertical-dividers="hideVerticalDividers" :hide-lr-border="hideLrBorder" :hide-tb-border="hideTbBorder">
                    <e-grid-item @click="go" v-for="(el,index) in list" :key="index" :value="index">
                        <!-- <img slot="icon" :src="el.img" height="60px" width="60px" /> -->
                        <e-icon slot="icon" :type="el.icon" :size="30"></e-icon>
                        <template slot="label">{{el.title}}</template>
                    </e-grid-item>
                </e-grid>
            </div>
            <div class="font14 ptb30">
                <param-table :list="gridInfo">
                    <template slot="title">组件html tag：e-grid</template>
                    <template slot="tip">bdColor css需配置bd-color</template>
                </param-table>
                <param-table :list="gridExt">
                </param-table>
            </div>
            <div class="font14 ptb30">
                <param-table :list="gridItemExt">
                    <template slot="title">组件html tag：e-grid-item</template>
                </param-table>
            </div>
        </e-content>
    </e-layout>
</template>
<script type="text/javascript">
import { eGrid, eGridItem } from '@/components';
import mergeProps from '@/../example/lib/mergeProps';
export default {
    data() {
        return {
            cols: 4,
            hideLrBorder: false,
            hideTbBorder: false,
            hideVerticalDividers: false,
            list: [{
                title: 'QQ',
                img: 'http://res.ekwing.com/images/student/qq.png',
                color: 'blue',
                icon: 'face-smile',
            }, {
                title: '微信',
                img: 'http://res.ekwing.com/images/student/wechat.png',
                color: 'blue',
                icon: 'face-cry',
            }, {
                title: 'QQ朋友圈',
                img: 'http://res.ekwing.com/images/student/qzone.png',
                color: 'blue',
                icon: 'arrow-left'
            }, {
                title: '微信朋友圈',
                img: 'http://res.ekwing.com/images/student/wx_zone68.png',
                color: 'blue',
                disabled: true,
                icon: 'arrow-right'
            }, {
                title: 'QQ',
                img: 'http://res.ekwing.com/images/student/qq.png',
                color: 'blue',
                icon: 'arrow-right'
            }, {
                title: '微信',
                img: 'http://res.ekwing.com/images/student/wechat.png',
                color: 'blue',
                icon: 'arrow-right'
            }, {
                title: 'QQ朋友圈',
                img: 'http://res.ekwing.com/images/student/qzone.png',
                color: 'blue',
                icon: 'arrow-right'
            }, {
                title: '微信朋友圈',
                img: 'http://res.ekwing.com/images/student/wx_zone68.png',
                color: 'blue',
                disabled: true,
                icon: 'arrow-right'
            }, {
                title: 'QQ',
                img: 'http://res.ekwing.com/images/student/qq.png',
                color: 'blue',
                icon: 'arrow-right'
            }, {
                title: '微信',
                img: 'http://res.ekwing.com/images/student/wechat.png',
                color: 'blue',
                icon: 'arrow-right'
            }, {
                title: 'QQ朋友圈',
                img: 'http://res.ekwing.com/images/student/qzone.png',
                color: 'blue',
                icon: 'arrow-right'
            }, {
                title: '微信朋友圈',
                img: 'http://res.ekwing.com/images/student/wx_zone68.png',
                color: 'blue',
                disabled: true,
                icon: 'arrow-right'
            }],
            gridInfo: mergeProps(eGrid),
            gridExt: [{
                name: 'default',
                type: 'slot',
            }],
            gridItemInfo: mergeProps(eGridItem),
            gridItemExt: [{
                name: 'icon',
                type: 'slot',
                require: false,
                default: '无',
                comment: 'icon插入可以为图片或者为字体图标'
            }, {
                name: 'label',
                type: 'slot',
                require: false,
                default: '无',
                comment: '文案'
            }]
        }
    },
    methods: {
        go() {
            alert('go');
        }
    }
}

</script>
