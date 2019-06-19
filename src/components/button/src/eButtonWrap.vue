<template>
    <div class="e-btn-wrap" :class="classes">
        <slot></slot>
    </div>
</template>
<script type="text/javascript">
export default {
    name: 'e-button-wrap',
    props: {
        type: {
            type: String,
            default: 'cir',
            validator(value) {
                return ['cir', 'rect'].indexOf(value) > -1;
            }
        },
        theme: String,
    },
    computed: {
        classes() {
            let classes = [];
            classes.push(`e-btn-wrap-${this.type}`);
            return classes;
        }
    },
    data() {
        return {}
    }
}

</script>
