<template>
    <e-layout>
        <stu-header title="toast"></stu-header>
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
    </e-layout>
</template>
<script type="text/javascript">
import {toast} from '@/components';
import mergeProps from '../../lib/mergeProps';
export default {
	data(){
		return {
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
                content: '请求成功',
                type: 'error'
            });
        }
    }
}

</script>
