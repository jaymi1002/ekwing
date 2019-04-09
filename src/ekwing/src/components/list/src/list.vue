<template>
    <div class="e-list">
        <slot></slot>
    </div>
</template>
<script type="text/javascript">
export default {
    name: 'e-list',
    props: {
        noPadding: Boolean,
        borderType: {
            type: String,
            default: 'whole',
            validator(value) {
                return ['whole', 'incomplete', 'none'].indexOf(value) !== -1;
            }
        },
        touchActive: Boolean,
    },
    computed: {

    }
}

</script>
<style lang="scss">
@import '../style/list.scss';

</style>
