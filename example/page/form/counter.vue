<template>
	<e-layout>
		<stu-header slot="header">
            <p class="font20">counter</p>
        </stu-header>
        <div class="pt20">
			<e-item>
				<e-item-side class="font16">
					计数：
				</e-item-side>
				<e-item-main justify-content="end">
					<e-counter btn-theme="primary" v-model="value"></e-counter>
				</e-item-main>
			</e-item>
			<e-separator></e-separator>
        </div>
        <div class="font14 ptb30">
            <param-table :list="counterInfo">
                <template slot="title">组件html tag：e-counter</template>
                <template slot="tip">
                	必须配置icon-plus 和 icon-reduce<br>
                	btnTheme: button的主题
                </template>
            </param-table>
        </div>
	</e-layout>
</template>
<script type="text/javascript">
import { eCounter } from '@/components';
import mergeProps from '@/../example/lib/mergeProps';
	export default{
		name:'counter',
		data(){
			return {
				value:2,
				counterInfo:mergeProps(eCounter),
			}
		}
	}
</script>