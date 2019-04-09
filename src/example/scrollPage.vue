<template>
    <e-layout title="scrollPage">
        <e-scroll-page tip>
            <e-scroll-item style="">
                <div class="flex justify-center items-center" style="height:100%;width100%;">
                    <e-switch-wrap>
                        <div class="font16">hello</div>
                        <e-switch slot="switch" v-model="select"></e-switch>
                    </e-switch-wrap>
                </div>
            </e-scroll-item>
            <e-scroll-item style="">
                <div class="flex justify-center items-center" style="height:100%;width100%;">
                    <e-switch-wrap reverse class="mt20">
                    	<div class="font16">hello</div>
                    	<e-switch slot="switch" v-model="select"></e-switch>
                    </e-switch-wrap>
                </div>
            </e-scroll-item>
            <e-scroll-item>
                <div class="flex justify-center items-center" style="height:100%;width100%;">
                   <e-switch v-model="select"></e-switch>
                </div>
            </e-scroll-item>
            <e-scroll-item style="">
                <div class="flex justify-center items-center" style="height:100%;width100%;">
                   
                </div>
            </e-scroll-item>
        </e-scroll-page>
    </e-layout>
</template>
<script type="text/javascript">
export default {
	data(){
		return {
			areaText:'',
			select:false
		}
	}
}

</script>
