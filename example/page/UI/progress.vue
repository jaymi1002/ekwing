<template>
    <e-layout title="layout">
        <stu-header title="progress"></stu-header>
        <e-content>
        <div style="margin:0 auto;">
            <e-progress :value="progress" inner-color="primary"></e-progress>
        </div>
        <div style="width:4.0rem;margin:0 auto;">
            <e-ring :progress="progress" start-color="blue" end-color="blue-tiny"></e-ring>
        </div>
        <div style="width:8.0rem;margin:0 auto;">
            <e-cir-progress :progress="progress" :stroke-width="2" start-color="green" end-color="green" btn-color="green"></e-cir-progress>
        </div>
        <div class="font14 pt30">
            <param-table :list="ringInfo">
                <template slot="title">组件html tag：e-ring</template>
                <!-- <template slot="tip">enterClass leaveClass 取值范围是animate库的类名</template> -->
            </param-table>
        </div>
        <div class="font14">
            <param-table :list="ringExt">
                <template slot="title">额外</template>
            </param-table>
        </div>
        <div class="font14 pt30">
            <param-table :list="cirProgressInfo">
                <template slot="title">组件html tag：e-cir-progress</template>
                <template slot="tip">color : stroke-color;btnColor: bg-color</template>
            </param-table>
        </div>
        </e-content>
    </e-layout>
</template>
<script type="text/javascript">
import {eRing,eCirProgress} from '@/components';
import mergeProps from '@/../example/lib/mergeProps';
export default {
    data() {
        return {
            progress: 10,
            ringInfo:mergeProps(eRing),
            ringExt:[{
                name:'ended',
                type:'v-on/@'
            }],
            cirProgressInfo:mergeProps(eCirProgress),
            cirProgressExt:[],
            timer:null
        }
    },
    mounted(){
        // this.timer = setInterval(() => {
        //     this.progress+=5;
        //     if(this.progress >= 100){
        //         clearInterval(this.timer);
        //     }
        // },1000);
    }
}

</script>
