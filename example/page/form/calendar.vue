<template>
    <e-layout>
    	<stu-header slot="header" title="calendar"></stu-header>
    	<e-check-icon v-model="multiSelect" text="多选" default-type="no-check" active-type="check" :icon-size="20"></e-check-icon>
    	<e-separator></e-separator>
        <div class="fix p20 font16 text-g3">
            <a class="right" href="javascript:;" @click="show">显示</a>
        </div>
        <div class="plr30">
	        <template v-if="typeof value === typeof ''">
	        	<p class="font14 lh2 text-g3">
	        		{{value}}
	        	</p>
	        </template>
	        <template v-else>
				<p class="font14 lh2 text-g3" v-for="el in value">
					{{el}}
				</p>
			</template>
		</div>
        <e-calendar ref="calendar" :multi-select="multiSelect" v-model="value"></e-calendar>
        <div class="font14 ptb30">
            <param-table :list="calendarInfo">
                <template slot="title">组件html tag：e-calendar</template>
                <template slot="tip">theme:bg-theme</template>
            </param-table>
        </div>
    </e-layout>
</template>
<script type="text/javascript">
import { eCalendar } from '@/components';
import mergeProps from '@/../example/lib/mergeProps';
export default {
	data(){
		return {
			multiSelect:false,
			value:'2019-04-05',
			calendarInfo:mergeProps(eCalendar)
		}
	},
	methods:{
		show(){
			this.$refs.calendar.show();
		}
	}
}

</script>
