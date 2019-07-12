<template>
    <e-layout>
        <stu-header title="Icon"></stu-header>
        <e-content>
            <div class="pt20">
                <div class="tc">
                    <e-icon type="arrow-left" @click="choose" :size="size" @disabledHandle="disabledChoose"></e-icon>
                </div>
                <div class="tc">
                    <e-icon type="no-check" @click="choose" :size="size" disabled @disabledHandle="disabledChoose"></e-icon>
                </div>
                <div class="tc">
                    <e-icon type="face-smile" @click="choose" :size="size"></e-icon>
                </div>
                <div class="tc">
                    <e-icon type="face-cry" @click="choose" :size="size"></e-icon>
                </div>
                <div class="tc">
                    <e-icon type="face-no" @click="choose" :size="size"></e-icon>
                </div>
                <div class="tc">
                    <e-icon type="face-smile" @click="choose" :size="size"></e-icon>
                </div>
                <div class="tc">
                    <e-icon type="face-smile" @click="choose" :size="size"></e-icon>
                </div>
                <div class="font14 ptb30">
                    <param-table :list="iconInfo">
                        <template slot="title">组件html tag：e-icon</template>
                        <template slot="tip">css需要配置
                            <br> type:icon-type
                            <br> size: font-size
                            <br> color:text-color
                            <br>
                        </template>
                    </param-table>
                </div>
            </div>
        </e-content>
    </e-layout>
</template>
<script>
import { eIcon } from '@/components';
import mergeProps from '@/../example/lib/mergeProps';
export default {
    name: 'icon',
    data() {
        return {
            size: 24,
            iconInfo: mergeProps(eIcon)
        }
    },
    methods: {
        choose() {
            alert('别点我');
        },
        disabledChoose() {
            alert('我被禁止了');
        }
    },
    components: {
        eIcon,
    },
    created() {}
}

</script>
<style>


</style>
