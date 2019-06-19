<template>
	<e-layout>
		<stu-header slot="header">
            <p class="font20">counter</p>
        </stu-header>
        <div class="pt20">
        	<e-input class="plr30" style="height:1.867rem" v-model="value" label="计数器：">
        		<e-counter btn-theme="primary" v-model="value"></e-counter>
        	</e-input>
        	<br>
        	<e-counter btn-theme="primary-2" v-model="value"></e-counter>
        </div>
	</e-layout>
</template>
<script type="text/javascript">
	export default{
		name:'counter',
		data(){
			return {
				value:2
			}
		}
	}
</script>