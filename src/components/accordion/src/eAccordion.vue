<template>
    <ul class="accordion text-g3">
        <slot></slot>
    </ul>
</template>
<script type="text/javascript">
import separator from '../../../mixin/separator.js';
export default {
    name: 'e-accordion',
    model: {
        prop: 'value',
        event: 'change'
    },
    provide() {
        return {
            accordion: this
        }
    },
    props: {
        activeClass: [String, Array],
        disabled: Boolean,
        value: [Number, Array],
        radio: Boolean,
        animate: Boolean,
        noArrow: Boolean,

        //icon设置 type默认是arrow-up
        iconColor: {
            type: String,
            default: 'g6'
        },
        iconSize: {
            type: Number,
            default: 20
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
        this.$nextTick(() => {
            if (this.value !== undefined) {
                this.currentIndex = this.value;
            }
        });
    },
    watch: {
        currentIndex(newVal, oldVal) {
            this.$nextTick(() => {
                this.$emit('change', newVal);
            });
        },
        value(newVal) {
            if (this.currentIndex !== this.value) {
                this.currentIndex = this.value;
            }
        },
        radio(newVal) {
            if (newVal) {
                this.currentIndex = this.currentIndex[0];
            } else {
                this.currentIndex = [this.currentIndex];
            }
        }
    }
}

</script>
