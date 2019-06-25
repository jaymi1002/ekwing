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
        activeClass: {
            type: [String, Array]
        },
        disabled: Boolean,
        value: {
            type: [Number, Array],
        },
        radio: Boolean,
        animate: Boolean,
        noArrow: Boolean,

        //icon设置 type默认是arrow-up
        iconColor:{
            type:String,
            default:'g6'
        },
        iconSize:{
            type:Number,
            default:20
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
            if (_this.value !== undefined) {
                _this.currentIndex = _this.value;
            }
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
