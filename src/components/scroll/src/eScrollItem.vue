<template>
	<div class="e-scroll-item" :style="{height:height,width:width,float:float}">
		<slot></slot>
	</div>
</template>
<script type="text/javascript">
	export default{
		name:'e-scroll-item',
		computed:{
			height(){
				if(!this.$parent.horizontal){
					return this.$parent.childSizePer + '%';
				}else{
					return '100%';
				}
			},
			width(){
				if(this.$parent.horizontal){
					return this.$parent.childSizePer + '%';
				}else{
					return '100%';
				}
			},
			float(){
				if(this.$parent.horizontal){
					return 'left';
				}
				return 'unset';
			}
		}
	}
</script>
