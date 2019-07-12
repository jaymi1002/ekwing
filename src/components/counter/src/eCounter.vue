<template>
	<div class="e-counter font16 text-g3">
		<e-button class="mr10" :width="52" :height="52" :disabled="min >= value" :border-radius="btnCircle ? 9999: 4" inline :theme="btnTheme" plain @click="reduce">
			<e-icon type="reduce" :size="iconSize"></e-icon>
		</e-button>
		<div class="e-counter-content">
			{{currentValue}}{{label}}
		</div>
		<e-button class="ml10" :width="52" :height="52" :disabled="max <= value" :border-radius="btnCircle ? 9999 : 4" plain inline :theme="btnTheme" @click="plus">
			<e-icon type="plus" :size="iconSize"></e-icon>
		</e-button>
		
	</div>
</template>
<script type="javascript:;">
	export default {
		name:'e-counter',
		model:{
			prop:'value',
			event:'change'
		},
		props:{
			value:{
				type:Number,
				default:0
			},
			btnTheme:String,
			iconSize:{
				type:Number,
				default:18
			},
			label:String,
			max:{
				type:Number,
				default:100
			},
			min:{
				type:Number,
				default:0,
			},
			btnCircle:Boolean
		},
		data(){
			return {
				currentValue: this.value + '',
			}
		},
		methods:{
			plus(){
				this.currentValue = parseInt(this.currentValue) + 1;
			},
			reduce(){
				this.currentValue = parseInt(this.currentValue) - 1;
			}
		},
		watch:{
			value(newVal){
				this.currentValue = newVal + '';
			},
			currentValue(newVal){
				this.$emit('change',parseInt(newVal));
			}
		}
	}
</script>
<style lang="scss">
	.e-counter{
		display: inline-block;
		height: 0.707rem;
		.e-counter-content{
			width: 1.333rem;
			text-align: center;
			display: inline-block;
		}
	}
</style>