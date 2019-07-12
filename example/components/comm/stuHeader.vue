<template>
	<e-header :title="title" fixed @goback="commGoback">
		<div slot="title" v-if="!title">
			<slot></slot>
		</div>
	</e-header>
</template>
<script type="text/javascript">
	import {eHeader} from '@/components/layout';
	export default{
		name:'stu-header',
		// extends:eHeader,
		props:{
			title:String,
		},
		methods:{
			commGoback(){
				window.history.go(-1);
			}
		}
	}
</script>
<style lang="scss">
</style>