<template>
	<e-layout title="directives">
		<div class="tc font18">
			<a href="javascript:;" v-tap="[tap,'hello']">tap</a>
		</div>
		<div class="mt20 demo1 bg-blue" v-touch-hold:300="hold">
			<pre>{{holdBackData}}</pre>
		</div>
		<div class="mt20 demo1 bg-blue" v-touch-swipe.up="swipe">
			<pre>{{swipeBackData}}</pre>
		</div>
		<div class="mt20 demo1 bg-blue" v-touch-pan.prevent.stop.horizontal="pan">
			<pre>{{panBackData}}</pre>
		</div>
	</e-layout>
</template>
<script type="text/javascript">
	export default{
		data(){
			return {
				holdBackData:null,
				swipeBackData:null,
				panBackData:null
			}
		},
		methods:{
			tap(value){
				console.log(value)
			},
			hold(value){
				this.holdBackData = value;
			},
			swipe(value){
				this.swipeBackData = value;
			},
			pan(value){
				this.panBackData = value;
			}
		}
	}
</script>
<style lang="scss">
	.demo1{
		width: 100%;
		height: 8.0rem;
		margin-top:1.333rem;
	}
</style>