<template>
	<e-layout title="datetime">
		<e-datetime ref="myDatetime" v-model="value" start-date="2008-09-24 23:20" end-date="2023-09-02 10:22" :format="format">
        </e-datetime>
        <p class="lh2">
        	<a href="javascript:;" @click="$refs.myDatetime.show();">显示</a>
        </p>
        {{value}}
	</e-layout>
</template>
<script type="text/javascript">
	export default{
		data(){
			return {
				value:'2023-09-02 07:00',
				format:'YYYY-MM-DD'
			}
		}
	}
</script>