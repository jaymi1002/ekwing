<template>
    <div class="e-checker-box">
        <slot></slot>
    </div>
</template>
<script type="text/javascript">
import { isEqual, contain, indexOf } from '../../../helpers/object-comm.js'
export default {
    name: 'e-checker',
    model: {
        prop: 'value',
        event: 'change',
    },
    props: {
        max: Number,
        min: Number,
        defaultItemClass: String,
        selectedItemClass: String,
        disabledItemClass: String,
        type: {
            type: String,
            default: 'radio'
        },
        value: [String, Number, Array, Object],
        disabled: Boolean,
    },
    created() {
        if (this.type === 'checkbox') {
            if (typeof this.value !== typeof [] ||
                this.min && this.value.length < this.min ||
                this.max && this.value.length > this.max) {
                throw new Error('value 传入有误');
            }
        }
    },
    data() {
        return {
            currentValue: this.value
        }
    },
    watch: {
        value(newValue) {
            this.currentValue = this.value;
        },
        currentValue() {
            this.$emit('change', this.currentValue);
        }
    },
    methods: {
        selectAll() {
        	//单选不起作用
            if (this.type === 'radio') {
                return false;
            }
            this.currentValue = [];
            this.$children.forEach((el) => {
                let _componentTag = el.$options._componentTag;
                if (_componentTag === 'e-check-item' || _componentTag === 'e-checker-item') {
                    this.currentValue.push(el.value);
                }
            });
        },
        selectInvert() {
        	//单选不起作用
            if (this.type === 'radio') {
                return false;
            }
            let currentValue = [];
            this.$children.forEach((el) => {
            	let _componentTag = el.$options._componentTag;
                if ((_componentTag === 'e-check-item' || _componentTag === 'e-checker-item') && indexOf(this.currentValue, el.value) < 0) {
                    currentValue.push(el.value);
                }
            });
            this.currentValue = currentValue;
        },
        selectNone() {
            if (this.type === 'radio') {
                this.currentValue = null;
            } else {
                this.currentValue = [];
            }
        }
    }
}

</script>
