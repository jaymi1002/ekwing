<template>
	<e-layout>
		<stu-header>
            <p class="font20">counter</p>
        </stu-header>
        <e-content>
        <p class="tc lh2 font16">按钮主题:</p>
        <e-check-list type="radio" label-right v-model="theme" default-type="no-check" active-type="check" :icon-size="20" reverse>
            <e-check-item v-for="item in themeList" :value="item">
                <span>{{item}}</span>
            </e-check-item>
        </e-check-list>
        <p class="tc lh2 font16">其他:</p>
        <e-check-icon v-model="btnCircle" text="按钮是否圆角" default-type="no-check" active-type="check"  :icon-size="20"></e-check-icon>
        <e-separator></e-separator>
        <div class="pt20">
			<e-item>
				<e-item-side class="font16">
					计数：
				</e-item-side>
				<e-item-main justify-content="end">
					<e-counter :btn-theme="`counter-${theme}`" :btn-circle="btnCircle" v-model="value" label="周"></e-counter>
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
        </e-content>
	</e-layout>
</template>
<script type="text/javascript">
import { eCounter } from '@/components';
import mergeProps from '@/../example/lib/mergeProps';
	export default{
		name:'counter',
		data(){
			return {
				value:100,
				theme:'primary',
				themeList:['primary','green'],
				btnCircle:false,
				counterInfo:mergeProps(eCounter),
			}
		}
	}
</script>