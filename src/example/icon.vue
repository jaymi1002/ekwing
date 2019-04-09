<template>
    <e-layout head title="ICON" shadow>
    <div class="hello">
        <div class="tc">
            <e-icon type="arrow-left" @click="choose" size="2em" @disabledHandle="disabledChoose"></e-icon>
        </div>
        <div class="tc">
            <e-icon type="no-check" @click="choose" size="2em" disabled @disabledHandle="disabledChoose"></e-icon>
        </div>
        <div class="tc">
            <e-icon type="face-smile" @click="choose" size="2em"></e-icon>
        </div>
        <div class="tc">
            <e-icon type="face-cry" @click="choose" size="2em"></e-icon>
        </div>
        <div class="tc">
            <e-icon type="face-no" @click="choose" size="2em"></e-icon>
        </div>
        <div class="tc">
            <e-icon type="face-smile" @click="choose" size="2em"></e-icon>
        </div>
        <div class="tc">
            <e-icon type="face-smile" @click="choose" size="2em"></e-icon>
        </div>
    </div>
    </e-layout>
</template>
<script>
import { eButton, eIcon, eRing } from '@/ekwing/src';
export default {
    name: 'icon',
    data() {
        return {

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
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
