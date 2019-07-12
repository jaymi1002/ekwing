<template>
	<e-layout>
        <stu-header title="checkIcon"></stu-header>
    	<e-check-icon default-type="no-check" active-color="green" default-color="g9" active-type="check" :icon-size="16" v-model="select" text="请认真阅读以下协议,同意之后再确定。请认真阅读以下协议,同意之后再确定。"></e-check-icon>
    	<e-separator></e-separator>
    	<div class="font14 ptb30">
            <param-table :list="checkIconInfo">
                <template slot="title">组件html tag：e-check-icon</template>
            </param-table>
        </div>
    </e-layout>
</template>
<script type="text/javascript">
import {eCheckIcon} from '@/components';
import mergeProps from '@/../example/lib/mergeProps';
	export default {
		name:'check-icon',
		data(){
			return {
				select:false,
				checkIconInfo:mergeProps(eCheckIcon)
			}
		}
	}
</script>
