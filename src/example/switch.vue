<template>
    <e-layout title="switch">
        <e-switch v-model="value"></e-switch>
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
