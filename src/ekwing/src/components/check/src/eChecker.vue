<template>
	<div class="e-checker-box">
		<slot></slot>
	</div>
</template>
<script type="text/javascript">
	export default {
		name:'e-checker',
		model:{
			prop:'value',
			event:'change',
		},
		props:{
			max:Number,
			defaultItemClass: String,
    		selectedItemClass: String,
    		disabledItemClass: String,
    		type:{
    			type:String,
    			default:'radio'
    		},
    		value:[String, Number, Array, Object],
		},
		data(){
			return {
				currentValue:this.value
			}
		},
		watch:{
			value(newValue){
				this.currentValue = this.value;
			},
			currentValue(){
				this.$emit('change',this.currentValue);
			}
		}
	}
</script>
<style lang="scss">
	@import '../style/check.scss';
</style>