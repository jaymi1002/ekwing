<template>
	<e-layout head title="badge">
		<stu-header slot="header" title="badge"></stu-header>
		<p class="tc lh3 font16">尝试一下</p>
		<e-separator></e-separator>
		<div class="input-wrap plr30">
            <e-input type="text" v-model="label" label="label值:" placeholder="请输入"></e-input>
         </div>
        <e-separator></e-separator>
		<div class="pt30 plr30">
			<e-badge :label="label"></e-badge>
		</div>
		<div class="font14 pt30">
            <param-table :list="badgeInfo">
                <template slot="title">组件html tag：e-badge</template>
                <template slot="tip">
                    使用color 需要在业务中配置 bg-color
                </template>
            </param-table>
        </div>
        <div class="font14">
            <param-table :list="badgeExt">
                <template slot="title">额外</template>
            </param-table>
        </div>
	</e-layout>
</template>
<script type="text/javascript">
import {eBadge} from '@/components';
import mergeProps from '@/../example/lib/mergeProps';
	export default{
		name:'badge',
		data(){
			return {
				label:'',
				badgeInfo:mergeProps(eBadge),
				badgeExt:[{
					name:'default',
					type:'slot',
				}]
			}
		}
	}
</script>
<style lang="scss">
	.input-wrap{
		height: 1.333rem;
	}
</style>