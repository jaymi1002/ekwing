<template>
	<e-layout title="textarea">
		<div class="plr20">	
			<e-textarea class="mt20" title="写作" :value.sync="areaText"></e-textarea>
			<e-textarea class="mt20" autosize :value.sync="areaText"></e-textarea>
		</div>
	</e-layout>
</template>
<script type="text/javascript">
	export default{
		name:'textarea',
		data(){
			return {
				areaText:''
			}
		},
		created(){
			window.myInput = this;	
		},
		methods:{
			getError(){
				console.log(this.$refs.myInput.firstError);
			}
		}
	}
</script>