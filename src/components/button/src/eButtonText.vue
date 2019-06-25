<template>
    <a href="javascript:;" class="e-btn-text" @click="$emit('click')">
    	<slot></slot>
    </a>
</template>
<script type="text/javascript">
export default {
    name: 'e-button-text',
}
</script>
<style lang="scss">
.e-btn-text:active {
    opacity: 0.5;
}
</style>
