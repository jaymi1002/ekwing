<template>
    <div class="e-check-list">
        <template v-for="(el,index) in list">
            <e-check-item :pointer="index">
                <slot v-bind:item="el" v-bind:index="index">{{el.text || el.value}}</slot>
            </e-check-item>
        </template>
    </div>
</template>
<script type="text/javascript">
import eCheckItem from './eCheckItem.vue';
import { isEqual, contain, indexOf } from '@/ekwing/src/helpers/object-comm.js'
export default {
    name: 'e-check-list',
    components: {
        eCheckItem
    },
    model: {
        prop: 'value',
        event: 'change',
    },
    props: {
        list: {
            type: Array,
            default: () => []
        },
        value: [Number, Array],
        max: Number,
        min: Number,
        labelRight: Boolean,
        color: String,
        tip: Boolean,
        disabled: Boolean,
        type: {
            type: String,
            default: 'checkbox'
        },
        plain: Boolean,
        radioRequire: {
            type: Boolean,
            default: true
        },
    },
    data() {
        return {
            currentValue: this.value,
        }
    },
    created() {
        if (!this._isValid) {
            this.$emit('error');
            throw Error('max min arguments no valid');
            return false;
        }
        this.init();
    },
    computed: {
        total() {
            return this.list.length;
        },
        _max() {
            if (this.max === undefined) {
                return this.total;
            }
            return Math.min(Math.max(this.max, this.min ? this.min : 0, 0), this.total);
        },
        _min() {
            if (this.min === undefined) {
                return 0;
            }
            return Math.max(Math.min(this.max ? this.max : this.total, this.min, this.total), 0);
        },
        _isValid() {
            return this.list.length >= this._max && this._max > this._min;
        },
        _disabled() {
            return this.disabled || !this._isValid;
        },
    },
    methods: {
        init() {
            if (this.type !== 'radio' && this._min > 0) {
                let arr = this.currentValue ? this.currentValue : [],
                    len = this._min - this.currentValue.length,
                    index = 0;
                while (arr.length < len) {
                    if (arr.indexOf(index) === -1) {
                        arr.push(index);
                    }
                    index++;
                }
                this.currentValue = arr;
            }
            if (this.type === 'radio' && this.radioRequire && !this.currentValue) {
                this.currentValue = 0;
            }
        },
        overflow(str) {
            switch (str) {
                case 'up':
                    this.$emit('upOverflow');
                    if (this.tip) {
                        this.$toast({
                            content: `最多选择${this._max}项`
                        });
                    }
                    break;
                case 'down':
                    this.$emit('downOverflow');
                    if (this.tip) {
                        this.$toast({
                            content: `最少选择${this._min}项`
                        });
                    }
                    break;
            }
        },
        choose(...choiceArr) {
            if (choiceArr.length > this._max) {
                this.overflow('up');
                return false;
            }
            if (choiceArr.length < this._min) {
                this.overflow('down');
                return false;
            }
            this.currentValue = choiceArr;
        },
        chooseReverse() {
            let _this = this;
            if (this.list.length - this.currentValue.length > this._max) {
                this.overflow('up');
                return false;
            }
            if (this.list.length - this.currentValue.length < this._min) {
                this.overflow('down');
                return false;
            }
            let newArr = [];
            this.list.forEach(function(el, index) {
                if (_this.currentValue.indexOf(index) < 0) {
                    newArr.push(index);
                }
            });
            this.currentValue = newArr;
        }
    },
    watch: {
        value(newValue) {
            this.currentValue = newValue;
        },
        currentValue(newValue) {
            this.$emit('change', newValue);
        }

    }
}

function pure(obj) {
    return JSON.parse(JSON.stringify(obj));
}

</script>
<style lang="scss">
@import '../style/check.scss';

</style>
