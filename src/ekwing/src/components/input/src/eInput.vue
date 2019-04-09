<template>
    <e-item :b-border="bBorder" :t-border="tBorder" class="font14">
        <e-item-side class="text-g3">
            <slot name="title">{{title}}</slot>
        </e-item-side>
        <e-item-main class="e-input">
            <div class="e-input-wrap">
                <input :class="inputClass" :type="type" :autocomplete="autocomplete" :autocapitalize="autocapitalize" :autocorrect="autocorrect" :spellcheck="spellcheck" :placeholder="placeholder" :readonly="readonly" :disabled="disabled" :name="name" :maxlength="max" ref="input" @focus="onFocus" @blur="onBlur" @keyup="onKeyup" v-model="currentValue" />
            </div>
            <div class="e-input-clear" v-if="!clearHide">
                <e-icon class="vm" size="1.3em" type="close-cir" @click="clear" color="g9" v-if="currentValue.length > 0 && inFocus && !readonly && !disabled"></e-icon>
            </div>
        </e-item-main>
        <e-item-side v-if="validate">
            <e-icon v-if="(!typeValid && currentValue.length > 0) || (!inFocus && visited && required && currentValue.length === 0)" @click="toastError" size="1.5em" color="error" type="tip-error-cir"></e-icon>
            <e-icon v-if="!inFocus && valid" size="1.5em" color="right" type="tip-right-cir"></e-icon>
        </e-item-side>
    </e-item>
</template>
<script type="text/javascript">
import isEmail from 'validator/lib/isEmail';
import isMobilePhone from 'validator/lib/isMobilePhone';
import isInt from 'validator/lib/isInt';
import isFloat from 'validator/lib/isFloat';
import matches from 'validator/lib/matches';
export default {
    name: 'e-input',
    props: {
        value: [String, Number],
        autoSize: Boolean,
        type: {
            type: String,
            default: 'text',
            validator(val) {
                return ['number', 'tel', 'email', 'text', 'password'].indexOf(val) > -1;
            }
        },
        autocorrect: Boolean,
        autocapitalize: Boolean,
        autocomplete: Boolean,
        spellcheck: Boolean,
        placeholder: {
            type: String,
            default: '写点什么吧...'
        },
        disabled: Boolean,
        readonly: Boolean,
        name: String,
        maxNum: {
            type: Number,
            default: 25
        },
        minNum: {
            type: Number,
            default: 0,
        },
        border: {
            type: Boolean,
            default: true,
        },
        title: String,
        validate: Boolean,
        required: Boolean,
        clearHide: Boolean,
        tip: Boolean,
        tBorder:Boolean,
        bBorder:Boolean,
    },
    created() {

    },
    data() {
        return {
            currentValue: this.value ? this.value : '',
            firstError: '',
            errors: {},
            valid: false,
            inFocus: false,
            visited:false,
        }
    },
    computed: {
        max() {
            if (this.type === 'tel') {
                return 11;
            } else {
                return this.maxNum;
            }
        },
        inputClass() {
            let classes = [];
            if (this.readonly || this.disabled) {
                classes.push('e-input-disabled');
            }
            return classes;
        },
        typeValid() {
            if (this.type === 'tel') {
                return isMobilePhone(this.currentValue, ['zh-CN']);
            }
            if (this.type === 'email') {
                return isEmail(this.currentValue);
            }
            if (this.type === 'number') {
                return isInt(this.currentValue) || isFloat(this.currentValue);
            }
            if (this.type === 'password') {
                return matches(this.currentValue, /^[a-zA-Z0-9_]{6,12}$/);
            }
            return true;
        }
    },
    methods: {
        onBlur(e) {
            this.inFocus = false;
            this.getValid();
            if (this.tip && !this.valid) {
                this.toastError();
            }
        },
        onFocus(e) {
        	this.visited = true;
            this.inFocus = true;
            this.$emit('onFocus', e);
        },
        onKeyup(e) {
            if (e.key === 'enter') {
                e.target.blur();
            }
            this.$emit('onEnter', this.currentValue, e);
        },
        clear() {
            this.currentValue = '';
            this.$refs.input.focus();
            this.$emit('onClear');
        },
        getError() {
            this.firstError = this.errors[Object.keys(this.errors)[0]];
        },
        validator() {
            if (!this.currentValue && !this.required) {
                return;
            }
            if (!this.currentValue && this.required) {
                this.errors.required = '必须要填写哦~';
            }
            if (this.currentValue.length < this.min) {
                this.errors.min = `输入字符长度要大于${this.min}哦~`;
            }
            if (this.currentValue.length > this.max) {
                this.errors.max = `输入字符长度要小于${this.max}哦~`;
            }
            if (this.type === 'tel' && !this.typeValid) {
                this.errors.tel = '手机号码不符合格式';
            }
            if (this.type === 'email' && !this.typeValid) {
                this.errors.email = '邮箱地址不符合格式';
            }
            if (this.type === 'number' && !this.typeValid) {
                this.errors.number = '只能输入数字';
            }
            if (this.type === 'password' && !this.typeValid) {
                this.errors.password = '密码只能包含数组字母下划线(6-12位)';
            }
            this.getError();
        },
        toastError() {
            this.$toast({
                content: this.firstError,
                duration: 2000
            });
        },
        getValid() {
        	this.errors = {};
            if (this.validate) {
                this.validator();
            }
            if (Object.keys(this.errors).length > 0) {
                this.valid = false;
            } else {
                this.valid = true;
            }
        }
    },
    watch: {
        value(newVal) {
            this.currentValue = newVal;
            this.getValid();
        },
        currentValue(newVal, oldVal) {
            this.$emit('update:value', newVal);
        }
    }
}

</script>
<style lang="scss">
@import '../style/input.scss';

</style>
