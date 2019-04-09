<template>
    <e-layout head title="range" shadow>
        <div class="range flex justify-center items-center">
        	<div class="pct100">
                <e-range color="blue" v-model="progress" side-show></e-range>
                <br>
                <e-range color="yellow" v-model="progress" side-show></e-range>
                <br>
                <e-range color="green" v-model="progress" side-show></e-range>
                <br>
        		<e-range color="error" v-model="progress" side-show></e-range>
        	</div>
        </div>
    </e-layout>
</template>
<script type="text/javascript">
export default {
    name: 'range',
    data(){
    	return {
    		progress:0
    	}
    },
    methods:{

    }
}
	
</script>
<style type="text/css">
.range {
	margin-top: 0.667rem;
    /* height: 0.267rem; */
}

</style>
