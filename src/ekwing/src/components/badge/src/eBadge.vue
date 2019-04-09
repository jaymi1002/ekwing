<template>
	<p class="e-badge font12" :class="badgeClass">
		{{number}}
	</p>
</template>
<script type="text/javascript">
	export default{
		name:'e-badge',
		props:{
			color:{
				type:String,
				default:'error',
			},
			number:Number,
		},
		computed:{
			badgeClass(){
				let classes = ['text-white',`bg-${this.color}`];
				if(this.number === undefined){
					classes.push('no-number');
				}
				return classes;
			}
		}
	}
</script>
<style lang="scss">
	.e-badge{
		display: inline-block;;
		min-width: 0.4rem;
		padding:0.013rem 0.107rem 0;
		text-align: center;
		line-height: 0.4rem;
		border-radius: 9999px;
		font-weight: 500;
		box-sizing:border-box;
		vertical-align: baseline;
		&.no-number{
			min-width: 0.267rem;
			min-height: 0.267rem;
			padding:0;
		}
	}
</style>