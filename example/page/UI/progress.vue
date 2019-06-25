<template>
    <e-layout title="layout">
        <stu-header slot="header" title="progress"></stu-header>
        <div style="width:4.0rem;margin:0 auto;">
            <e-ring :progress="progress"></e-ring>
        </div>
        <div style="width:8.0rem;margin:0 auto;">
            <e-cir-progress :progress="progress" btnColor="green"></e-cir-progress>
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
    </e-layout>
</template>
<script type="text/javascript">
import {eRing,eCirProgress} from '@/components';
import mergeProps from '@/../example/lib/mergeProps';
export default {
    data() {
        return {
            progress: 0,
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
        this.timer = setInterval(() => {
            this.progress+=2;
            if(this.progress >= 100){
                clearInterval(this.timer);
            }
        },1000);
    }
}

</script>
