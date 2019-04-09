<template>
    <div class="e-item" :class="itemclass" @click="$emit('click')">
        <slot></slot>
    </div>
</template>
<script type="text/javascript">
import flexLayout from '../../../mixin/flexLayout.js';
export default {
    name: "e-item",
    mixins: [flexLayout],
    props: {
        touchActive: Boolean,
        noPadding: Boolean,
        tBorder: Boolean,
        bBorder: Boolean,
    },
    computed: {
        itemclass() {
            let classes = this.flexClasses;
            if (this.tBorder) {
                classes.push('bdt');
            }
            if (this.bBorder) {
                classes.push(`bd-whole`);
            } else if (this.$parent.$options._componentTag === 'e-list' && this.$parent.borderType) {
                classes.push(`bd-${this.$parent.borderType}`);
            }

            if (this.noPadding) {
                classes.push('no-padding');
            } else if (this.$parent.$options._componentTag === 'e-list' && this.$parent.noPadding) {
                classes.push('no-padding');
            }

            if (this.touchActive) {
                classes.push('active');
            } else if (this.$parent.$options._componentTag === 'e-list' && this.$parent.touchActive) {
                classes.push('active');
            }
            return classes;
        }
    }
}

</script>
<style lang="scss">
@import '../style/list.scss';

</style>
