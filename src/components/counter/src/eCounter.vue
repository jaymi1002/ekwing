<template>
	<div class="e-counter">
		<e-input type="number" align="center" v-model="currentValue">
			<e-button slot="label" :width="100" :height="50" :theme="btnTheme" plain @click="reduce">
				<e-icon type="reduce" :size="iconSize"></e-icon>
			</e-button>
			<e-button :width="100" :height="50" plain :theme="btnTheme" @click="plus">
				<e-icon type="plus" :size="iconSize"></e-icon>
			</e-button>
		</e-input>
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
		width: 4.0rem;
	}
</style>