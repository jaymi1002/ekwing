<template>
	<p class="title font16 bold">
		<slot>{{title}}</slot>
	</p>
</template>
<script type="text/javascript">
	export default {
		name:'e-check-title',
		props:{
			title:String,
		}
	}
</script>