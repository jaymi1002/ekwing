<template>
	<div class="e-grid" :class="{'e-grid-no-border':!showLrBorder}">
		<slot></slot>
	</div>
</template>
<script type="text/javascript">
	export default{
		name:'e-grid',
		props:{
			cols:{
				type:Number,
				default:1,
			},
			showLrBorder:Boolean,
			showVerticalDividers:Boolean,
		},
		data(){
			return {
				rowNum:0,
			}
		},
		mounted(){
			this.rowNum = Math.ceil(this.$children.length / this.cols);
			// console.log(this.rowNum);
		},
		watch:{
			cols(newVal){
				this.rowNum = Math.ceil(this.$children.length / this.cols);
			}
		}
	}
</script>
<style lang="scss">
	@import "../style/eGrid.scss";
</style>
