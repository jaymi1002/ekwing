<template>
    <e-layout title="switch">
    	<e-header slot="header" title="switch"></e-header>
    	
        <e-switch class="mt20" v-model="value" color="blue"></e-switch>
        <e-switch-wrap reverse class="mt20">
            <div class="font16">hello</div>
            <e-switch slot="switch" v-model="value"></e-switch>
        </e-switch-wrap>
        <e-switch-wrap class="mt20">
            <div class="font16">hello</div>
            <e-switch slot="switch" v-model="value"></e-switch>
        </e-switch-wrap>
    </e-layout>
</template>
<script type="text/javascript">
export default {
    data() {
        return {
            value: false,
        }
    }
}

</script>
