<template>
    <e-layout>
    <stu-header slot="header" title="Icon"></stu-header>
    <div class="pt20">
        <div class="tc">
            <e-icon type="arrow-left" color="green" @click="choose" :size="size" @disabledHandle="disabledChoose"></e-icon>
        </div>
        <div class="tc">
            <e-icon type="no-check" color="blue" @click="choose" :size="size" disabled @disabledHandle="disabledChoose"></e-icon>
        </div>
        <div class="tc">
            <e-icon type="face-smile" color="blue" @click="choose" :size="size"></e-icon>
        </div>
        <div class="tc">
            <e-icon type="face-cry" color="blue" @click="choose" :size="size"></e-icon>
        </div>
        <div class="tc">
            <e-icon type="face-no" color="green" @click="choose" :size="size"></e-icon>
        </div>
        <div class="tc">
            <e-icon type="face-smile" color="blue" @click="choose" :size="size"></e-icon>
        </div>
        <div class="tc">
            <e-icon type="face-smile" color="blue" @click="choose" :size="size"></e-icon>
        </div>
    </div>
    </e-layout>
</template>
<script>
import { eButton, eIcon, eRing } from '@';
export default {
    name: 'icon',
    data() {
        return {
            size:20
        }
    },
    methods: {
        choose() {
            alert('别点我');
        },
        disabledChoose(){
            alert('我被禁止了');
        }
    },
    components: {
        eIcon,
    },
    created() {
    }
}

</script>
<style>
</style>
