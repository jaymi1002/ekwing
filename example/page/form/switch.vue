<template>
    <e-layout title="switch">
    	<stu-header slot="header" title="switch"></stu-header>
    	
        <e-switch class="mt20" v-model="value"></e-switch>
        <e-separator></e-separator>
        <e-switch-wrap reverse>
            <div class="font16">hello</div>
            <e-switch slot="switch" v-model="value"></e-switch>
        </e-switch-wrap>
        <e-separator></e-separator>
        <e-switch-wrap>
            <div class="font16">hello</div>
            <e-switch slot="switch" v-model="value"></e-switch>
        </e-switch-wrap>
        <e-separator></e-separator>
        <div class="font14 pt30">
            <param-table :list="switchWrapInfo">
                <template slot="title">组件html tag：e-switch-wrap</template>
            </param-table>
        </div>
        <div class="font14">
            <param-table :list="switchWrapExt">
                <template slot="title">额外</template>
            </param-table>
        </div>
        <div class="font14 pt30">
            <param-table :list="switchInfo">
                <template slot="title">组件html tag：e-switch</template>
                <template slot="tip">
                    <br>
                    color: bg-Color<br>
                    value: v-model
                </template>
            </param-table>
        </div>
    </e-layout>
</template>
<script type="text/javascript">
import {eSwitch,eSwitchWrap} from '@/components';
import mergeProps from '@/../example/lib/mergeProps';
export default {
    data() {
        return {
            value: false,
            switchInfo:mergeProps(eSwitch),
            switchWrapInfo:mergeProps(eSwitchWrap),
            switchWrapExt:[{
                name:'default',
                type:'slot'
            }]
        }
    }
}

</script>
