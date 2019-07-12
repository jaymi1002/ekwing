<template>
    <e-layout>
        <stu-header title="toast"></stu-header>
        <e-content>
        <e-check-list type="radio" label-right v-model="type" default-type="no-check" active-type="check" :icon-size="20" reverse>
            <e-check-item v-for="item in typeList" :value="item">
                <span>{{item}}</span>
            </e-check-item>
        </e-check-list>
        <e-button theme="primary" class="mt20" @click="toast">
            <span class="font18">toast</span>
        </e-button>
        <div class="font14 pt30">
            <param-table :list="toastInfo">
                <template slot="title">组件html tag：e-toast</template>
            </param-table>
        </div>
        <div class="font14">
            <param-table :list="toastExt">
                <template slot="title">额外</template>
            </param-table>
        </div>
        </e-content>
    </e-layout>
</template>
<script type="text/javascript">
import {toast} from '@/components';
import mergeProps from '../../lib/mergeProps';
export default {
	data(){
		return {
            type:'default',
            typeList:['error','default','loading','warning','success'],
			toastInfo:mergeProps(toast),
			toastExt:[{
				name:'closeHandle',
				type:'v-on/@'
			},{
				name:'default',
				type:'slot'
			}]
		}
	},
    methods: {
        toast() {
            let toastInstance = this.$toast({
                content: '请求成功，成功了',
                type: this.type
            });
        }
    }
}

</script>
