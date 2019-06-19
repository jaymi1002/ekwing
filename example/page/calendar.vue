<template>
    <e-layout title="calendar">
    	<e-item t-border b-border>
            <e-item-main justify-content="start">
                <e-check-icon class="lh2" v-model="multiSelect" text="multiSelect"></e-check-icon>
            </e-item-main>
        </e-item>
        <div class="fix p20 font16 text-g3">
            <a class="right" href="javascript:;" @click="show">显示</a>
        </div>
		{{value}}
        <e-calendar ref="calendar" :multi-select="multiSelect" v-model="value"></e-calendar>
    </e-layout>
</template>
<script type="text/javascript">
export default {
	data(){
		return {
			multiSelect:false,
			value:'2019-04-05'
		}
	},
	methods:{
		show(){
			this.$refs.calendar.show();
		}
	}
}

</script>
