<template>
	<div class="e-grid" :class="gridClass">
		<slot></slot>
	</div>
</template>
<script type="text/javascript">
	export default{
		name:'e-grid',
		props:{
			cols:{
				type:Number,
				default:4,
			},
			hideLrBorder:Boolean,
			hideTbBorder:Boolean,
			hideVerticalDividers:Boolean,
			bdColor:{
				type:String,
				default:'e0'
			}
		},
		provide(){
			return {
				grid:this
			}
		},
		computed:{
			gridClass(){
				let classes = [`bd-${this.bdColor}`];
				if(this.hideLrBorder){
					classes.push('no-l-border');
				}
				if(this.hideTbBorder){
					classes.push('no-t-border');
				}
				return classes;
			}
		}
	}
</script>
