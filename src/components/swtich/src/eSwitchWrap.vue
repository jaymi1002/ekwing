<template>
	<div class="e-switch-wrap" :class="wrapClass">
		<div class="e-switch-hd">
			<slot><span class="font14">{{title}}</span></slot>
		</div>
		<div class="e-switch-fr">
			<slot name="switch"></slot>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		name:'e-switch-wrap',
		props:{
			title:String,
			reverse:Boolean,
		},
		computed:{
			wrapClass(){
				let classes = [];
				if(this.reverse){
					classes.push('row');
					classes.push('reverse');
				}
				return classes;
			}
		}
	}
</script>