<template>
    <ul class="accordion">
        <slot></slot>
    </ul>
</template>
<script type="text/javascript">
export default {
    name: 'e-accordion',
    model: {
        prop: 'value',
        event: 'change'
    },
    props: {
        title: String,
        activeClass: {
            type: [String, Array],
            default: 'bg-transparent'
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        value: {
            type: [Number, Array],
        },
        radio: {
            type: Boolean,
            default: true,
        },
        animate: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            currentIndex: this.radio ? -1 : [],
        }
    },
    computed: {},
    methods: {
        next() {
            this.currentIndex++;
        },
        prev() {
            thiis.currentIndex--;
        }
    },
    mounted() {
        let _this = this;
        this.$nextTick(function() {
            setTimeout(function() {
                if (_this.value !== undefined) {
                    _this.currentIndex = _this.value;
                }
            });
        });
    },
    watch: {
        currentIndex(newVal, oldVal) {
            let _this = this;
            this.$nextTick(function() {
                _this.$emit('change', newVal);
            });
        },
        value(newVal) {
            this.currentIndex = this.value;
        }
    }
}

</script>
<style lang="scss">
@import "../style/accordion.scss";

</style>
