<template>
	<e-layout shadow>
        <stu-header slot="header">
            <p class="font18">separator</p>
        </stu-header>
        <e-separator class="mt30"></e-separator>
        <e-separator class="mt30" :width="640" align="center"></e-separator>
        <e-separator class="mt30" bd-style="dashed" bd-color="primary"></e-separator>
        <e-separator class="mt30" bd-style="dotted" bd-color="primary"></e-separator>
        <e-separator class="mt30" :width="640" align="left" bd-color="primary"></e-separator>
        <e-separator class="mt30" :width="640" align="right" bd-color="primary"></e-separator>
        <e-separator class="mt30" bd-style="dotted" bd-color="primary"></e-separator>
        <div class="font14 pt30">
            <param-table :list="separatorInfo">
                <template slot="title">组件html tag：e-separator</template>
                <template slot="tip">bdColor: bd-bdColor</template>
            </param-table>
        </div>
	</e-layout>
</template>
<script type="text/javascript">
import {eSeparator} from '@/components';
import mergeProps from '@/../example/lib/mergeProps';
	export default{
		data(){
			return {
				separatorInfo:mergeProps(eSeparator)
			}
		}
	}
</script>