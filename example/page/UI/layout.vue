<template>
    <e-layout head-color="f5">
        <e-header title="layout" v-if="head">
            <template slot="left" v-if="headerLeftSlot">
                <e-icon type="face-smile" :size="24" color="g3" @click="goback"></e-icon>
            </template>
            <template slot="title" v-if="headerTitleSlot">
                <div class="tc lh1-5 ptb10">
                    <p class="font20">单词闯关</p>
                    <p class="font16 lh1">单词闯关</p>
                </div>
            </template>
            <template slot="title" v-else>
                Layout
            </template>
            <template slot="right" v-if="headerRightSlot">
                <e-icon class="mr20" type="face-smile" :size="24" color="blue" @click="rightClick"></e-icon>
            </template>
        </e-header>
        <e-content>
        <div class="lh1-5">
            <e-check-icon default-type="no-check" active-type="check" :icon-size="20" v-model="head" text="head"></e-check-icon>
            <e-separator></e-separator>
            <e-check-icon default-type="no-check" active-type="check" :icon-size="20" v-model="headerRightSlot" text="headerRightSlot"></e-check-icon>
            <e-separator></e-separator>
            <e-check-icon default-type="no-check" default-color="g6" active-type="check" :icon-size="20" v-model="headerTitleSlot" text="headerTitleSlot"></e-check-icon>
            <e-separator></e-separator>
            <e-check-icon default-type="no-check" default-color="g6" active-type="check" :icon-size="20" v-model="headerLeftSlot" text="headerLeftSlot"></e-check-icon>
        </div>
        <div class="font14 ptb30">
            <param-table :list="layoutInfo">
                <template slot="title">组件html tag：e-layout</template>
            </param-table> 
            <param-table :list="layoutExt">
            </param-table>
        </div>
        <div class="font14 ptb30">
            <param-table :list="headerInfo">
                <template slot="title">组件html tag：e-header</template>
            </param-table>
            <param-table :list="headerExt">
            </param-table>
        </div>
        </e-content>
    </e-layout>
</template>
<script type="text/javascript">
import { eLayout,eHeader } from '@/components';
import mergeProps from '@/../example/lib/mergeProps';
export default {
    name: 'layout',
    data() {
        return {
            head: true,
            headerRightSlot: true,
            headerTitleSlot: true,
            headerLeftSlot: true,
            layoutInfo:mergeProps(eLayout),
            layoutExt:[{
                name:'header',
                type:'slot',
            }],
            headerInfo:mergeProps(eHeader),
            headerExt:[{
                name:'left',
                type:'slot',
            },{
                name:'title',
                type:'slot',
            },{
                name:'right',
                type:'slot',
            }]
        }
    },
    methods: {
        goback() {
            window.history.go(-1);
        },
        rightClick(){
            alert('rightClick');
        }
    }
}

</script>
