<template>
    <p class="e-badge font12" :class="badgeClass">
        <slot>{{label}}</slot>
    </p>
</template>
<script type="text/javascript">
export default {
    name: 'e-badge',
    props: {
        color: String,
        label: [String, Number],
    },
    computed: {
        badgeClass() {
            let classes = [];
            if (!this.label) {
                classes.push('dot');
            }
            if(this.color){
                classes.push(`bg-${this.color}`);
            }else{
                classes.push('default');
            }
            return classes;
        }
    }
}

</script>
<style lang="scss">
.e-badge {
    display: inline-block;
    padding: 0.013rem 0.107rem 0;
    text-align: center;
    min-width: 0.4rem;
    height: 0.4rem;
    border-radius: 9999px;
    font-weight: 500;
    box-sizing: border-box;
    color: #fff;
    &.dot {
        min-width: unset;
        width: 0.267rem;
        height: 0.267rem;
        padding: 0;
    }
    &.default{
        background-color: #FA5151;
    }
}

</style>
