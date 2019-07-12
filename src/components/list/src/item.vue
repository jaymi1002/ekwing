<template>
    <div class="e-item" :class="itemclass" @click="$emit('click')">
        <slot></slot>
    </div>
</template>
<script type="text/javascript">
export default {
    name: "e-item",
    props: {
        touchActive: Boolean,
        activeClass: String,
    },
    computed: {
        itemclass() {
            let classes = [];
            if (this.$parent.isList && this.$parent.touchActive) {
                if (this.$parent.activeClass) {
                    classes.push(this.$parent.activeClass);
                    return classes;
                }
                classes.push('default-active');
                return classes;
            }

            if (this.touchActive) {
                if (this.activeClass) {
                    classes.push(this.activeClass);
                    return classes;
                }
                classes.push('default-active');
                return classes;
            }
        }
    }
}

</script>
