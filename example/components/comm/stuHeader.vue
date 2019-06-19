<template>
	<e-header :title="title">
		<div slot="left" class="ml10">
			<e-icon type="arrow-left" :size="28" @click="goback"></e-icon>
		</div>
		<div slot="title" v-if="!title">
			<slot></slot>
		</div>
	</e-header>
</template>
<script type="text/javascript">
	export default{
		name:'stu-header',
		props:{
			title:String,
		},
		methods:{
			goback(){
				window.history.go(-1);
			}
		}
	}
</script>
<style lang="scss">
	
</style>