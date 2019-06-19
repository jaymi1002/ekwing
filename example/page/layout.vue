<template>
    <e-layout head-color="f5">
        <e-header slot="header" title="layout" v-if="head" :heightType="headerTitleSlot ? 'double' : 'single'">
            <template slot="left" v-if="headerLeftSlot">
                <e-icon class="ml20" type="arrow-left" :size="24" color="g3" @click="goback"></e-icon>
            </template>
            <template slot="title" v-if="headerTitleSlot">
                <div class="tc lh1-5">
                    <p class="font20">单词闯关</p>
                    <p class="font14">starter unit one</p>
                </div>
            </template>
            <template slot="title" v-else>
                Layout
            </template>
            <template slot="right" v-if="headerRightSlot">
                <e-icon class="mr20" type="face-smile" :size="24" color="blue" @click="rightClick"></e-icon>
            </template>
        </e-header>
        <div class="lh1-5">
            <e-check-icon default-type="no-check" default-color="g6" active-type="check" active-color="blue" :icon-size="20" v-model="head" text="head"></e-check-icon>
            <e-separator></e-separator>
            <e-check-icon default-type="no-check" default-color="g6" active-type="check" active-color="blue" :icon-size="20" v-model="headerRightSlot" text="headerRightSlot"></e-check-icon>
            <e-separator></e-separator>
            <e-check-icon default-type="no-check" default-color="g6" active-type="check" active-color="blue" :icon-size="20" v-model="headerTitleSlot" :text="headerTitleSlot ? 'headerType:double' : 'headerType:single'"></e-check-icon>
            <e-separator></e-separator>
            <e-check-icon default-type="no-check" default-color="g6" active-type="check" active-color="blue" :icon-size="20" v-model="headerLeftSlot" text="headerLeftSlot"></e-check-icon>
        </div>
    </e-layout>
</template>
<script type="text/javascript">
export default {
    name: 'layout',
    data() {
        return {
            head: true,
            headerRightSlot: true,
            headerTitleSlot: true,
            headerLeftSlot: true,
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
