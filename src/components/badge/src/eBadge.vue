<template>
    <p class="e-badge font12" :class="badgeClass">
        <slot>{{label}}</slot>
    </p>
</template>
<script type="text/javascript">
export default {
    name: 'e-badge',
    props: {
        color: {
            type: String,
            default: 'error',
        },
        label: [String, Number],
    },
    computed: {
        badgeClass() {
            let classes = [];
            if (this.dot || this.label === undefined) {
                classes.push('dot');
            }
            return classes;
        }
    }
}

</script>
<style lang="scss">
.e-badge {
    display: inline-block;
    min-width: 0.4rem;
    padding: 0.013rem 0.107rem 0;
    text-align: center;
    line-height: 1.2;
    border-radius: 9999px;
    font-weight: 500;
    box-sizing: border-box;
    vertical-align: middle;
    color: #fff;
    background-color: #FA5151;
    &.dot {
        min-width: 0.267rem;
        min-height: 0.267rem;
        padding: 0;
    }
}

</style>
