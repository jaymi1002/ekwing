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
            } else {
                if (typeof this.label === typeof 0 && this.label > 9) {
                    classes.push('type-2');
                }

                if (typeof this.label === typeof '' && this.label.length > 1) {
                    classes.push('type-2');
                }
            }

            if (this.color) {
                classes.push(`bg-${this.color}`);
            } else {
                classes.push('badge-default');
            }
            return classes;
        }
    }
}

</script>
<style lang="scss">
.e-badge {
    display: inline-block;
    text-align: center;
    min-width: 0.48rem;
    height: 0.48rem;
    line-height: 0.47rem;
    border-radius: 9999px;
    font-weight: 500;
    box-sizing: border-box;
    color: #fff;
    &.dot {
        min-width: unset;
        width: 0.213rem;
        height: 0.213rem;
        padding: 0;
    }
    &.badge-default {
        background-color: #FA5151;
    }

    &.type-2 {
        padding-left: 0.227rem;
        padding-right: 0.227rem;
    }
}

</style>
