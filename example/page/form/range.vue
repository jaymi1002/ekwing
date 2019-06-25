<template>
    <e-layout shadow>
        <stu-header slot="header">
            <p class="font20">range</p>
        </stu-header>
        <div class="range flex justify-center items-center">
            <div class="pct100">
                <e-range color="primary" v-model="progress"></e-range>
                <br>
                <br>
                <br>
                <e-range color="green" tip v-model="progressArr" side-show></e-range>
                <br>
            </div>
        </div>
        <div class="font14 pt30">
            <param-table :list="rangeInfo">
                <template slot="title">组件html tag：e-range</template>
                <template slot="tip">color: bg-color</template>
            </param-table>
        </div>
    </e-layout>
</template>
<script type="text/javascript">
import {eRange} from '@/components';
import mergeProps from '@/../example/lib/mergeProps';
export default {
    name: 'range',
    data() {
        return {
            progress: 0,
            progressArr: [0, 20],
            rangeInfo:mergeProps(eRange),
        }
    },
    methods: {

    }
}

</script>
<style type="text/css">
.range {
    margin-top: 1.333rem;
}

</style>
