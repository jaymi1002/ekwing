<template>
	<div class="e-counter">
		<e-button slot="label" :width="110" :height="50" inline :theme="btnTheme" plain @click="reduce">
			<e-icon type="reduce" :size="iconSize"></e-icon>
		</e-button>
		<input class="e-counter-input font14" type="number" v-model="currentValue">
		<e-button :width="110" :height="50" plain inline :theme="btnTheme" @click="plus">
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
			btnTheme:{
				type:String,
				default:'primary'
			},
			iconSize:{
				type:Number,
				default:20
			},
		},
		data(){
			return {
				currentValue: this.value + ''
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
		.e-counter-input{
			margin: 0 0.133rem;
			width: 0.667rem;
			text-align: center;
			line-height: 2;
		}
	}
</style>