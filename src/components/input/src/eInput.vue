<template>
    <div class="e-input-wrap font14">
        <div class="input-label text-g3" v-if="label || $slots.label">
            <slot name="label">{{label}}</slot>
        </div>
        <div class="input-main">
            <input :class="inputClass" 
                   :style="inputStyle" 
                   :type="inputType" 
                   :autocomplete="autocomplete" 
                   :spellcheck="spellcheck" 
                   :placeholder="placeholder" 
                   :readonly="readonly" 
                   :disabled="disabled" 
                   :name="name" 
                   :maxlength="max" 
                   ref="input" 
                   @focus="onFocus" 
                   @blur="onBlur" 
                   @keyup="onKeyup"
                   @click="onClick" 
                   @change="onChange" 
                   @input="onInput" 
                   v-model="currentValue" />
        </div>
        <div class="input-status" v-if="validate">
            <e-icon class="ml20" :size="20" type="close-cir" @click="clear" color="g9" v-if="currentValue.length > 0 && inFocus && !readonly && !disabled && !hideClear"></e-icon>
            <e-icon class="ml20" :size="28" :type="pwdIconType" color="g9" v-if="type === 'password' && currentValue.length > 0 && inFocus" @click="togglePwdVisible"></e-icon>
        </div>
        <div class="input-right-label" v-if="$slots.default">
            <slot></slot>
        </div>
    </div>
</template>
<script type="text/javascript">
import isEmail from 'validator/lib/isEmail';
import isMobilePhone from 'validator/lib/isMobilePhone';
import isInt from 'validator/lib/isInt';
import isFloat from 'validator/lib/isFloat';
import matches from 'validator/lib/matches';
import trim from 'validator/lib/trim';
let timer = {};
export default {
    name: 'e-input',
    model: {
        prop: 'value',
        event: 'change',
    },
    props: {
        value: [String, Number],
        type: {
            type: String,
            default: 'text',
            validator(val) {
                return ['number', 'tel', 'email', 'text', 'password'].indexOf(val) > -1;
            }
        },
        autocomplete: {
            type: String,
            default: 'off',
        },
        spellcheck: {
            type: Boolean,
            default: false,
        },
        placeholder: String,
        disabled: Boolean,
        readonly: Boolean,
        name: String,
        maxlength: {
            type: Number,
            default: 25
        },
        minlength: {
            type: Number,
            default: 0,
        },
        align:{
            type:String,
            default:'left',
            validator(value){
                return ['left','center','right'].indexOf(value) > -1;
            }
        },
        label: String,
        validate: Boolean,
        required: Boolean,
        tip: Boolean,
        trim: Boolean,
        hideClear:Boolean
    },
    data() {
        return {
            currentValue: this.value ? this.value : '',
            firstError: '',
            errors: {},
            valid: false,
            inFocus: false,
            visited: false,
            pwdVisible: false,
        }
    },
    created(){
        if(this.isTel){
            this.currentValue = this.formTel(this.currentValue);
        }
    },
    computed: {
        isNumber() {
            return this.type === 'number';
        },
        isTel() {
            return this.type === 'tel';
        },
        isPassword() {
            return this.type === 'password';
        },
        isEmail() {
            return this.type === 'email';
        },
        isText(){
            return this.type === 'text';
        },
        pwdIconType() {
            return this.pwdVisible ? 'pwd-hidden' : 'pwd-visible';
        },
        inputType() {
            if (this.isPassword) {
                return this.pwdVisible ? 'text' : 'password';
            }
            return this.type;
        },
        max() {
            if (this.isTel) {
                return 13;
            } else if (this.isPassword) {
                return 12;
            } else {
                return this.maxlength;
            }
        },
        min() {
            if (this.isPassword) {
                return 6;
            } else {
                return this.minlength;
            }

        },
        inputStyle(){
            return {
                'text-align':this.align
            }
        },
        inputClass() {
            let classes = [];
            if (this.readonly || this.disabled) {
                classes.push('disabled');
            }
            return classes;
        },
        typeValid() {
            if (this.isTel) {
                return isMobilePhone(this.currentValue.replace(/\s+/g,''),['zh-CN']);
            }
            if (this.isEmail) {
                return isEmail(this.currentValue);
            }
            if (this.isNumber) {
                return isInt(this.currentValue) || isFloat(this.currentValue);
            }
            if (this.isPassword) {
                return matches(this.currentValue, /^[a-zA-Z0-9_]{6,12}$/);
            }
            return true;
        },
    },
    methods: {
        togglePwdVisible() {
            this.pwdVisible = !this.pwdVisible;
            this.$refs.input.focus();
            return false;
        },
        onBlur(e) {
            clearTimeout(timer[this._uid]);
            this.inFocus = false;
            this.getValid();
            timer[this._uid] = setTimeout(() => {
                if (this.tip && !this.valid) {
                    this.toastError();
                }
                this.$emit('blurHandle', this.errors, this.firstError);
            }, 200);
        },
        onFocus(e) {
            clearTimeout(timer[this._uid]);
            this.visited = true;
            this.inFocus = true;
            this.$emit('focusHandle', e);
        },
        onKeyup(e) {
            if (e.key.toLowerCase() === 'enter') {
                e.target.blur();
            }
            this.$emit('enterHandle', this.currentValue, e);
        },
        onClick(e) {
            this.$emit('clickHandle', this.currentValue, e);
        },
        onInput(e) {
            this.$emit('inputHandle', this.currentValue, e);
        },
        onChange(e) {
            this.$emit('changeHandle', this.currentValue, e);
        },
        clear() {
            this.currentValue = '';
            this.$refs.input.focus();
            this.$emit('clearHandle');
        },
        //验证器
        validator() {
            if (!this.currentValue && !this.required) {
                return;
            }
            if (!this.currentValue && this.required) {
                this.errors.required = '必须要填写';
            }

            if (this.isTel && !this.typeValid) {
                this.errors.tel = '手机号码不符合格式';
            }
            if (this.isEmail && !this.typeValid) {
                this.errors.email = '邮箱地址不符合格式';
            }
            if (this.isNumber && !this.typeValid) {
                this.errors.number = '只能输入数字';
            }
            if (this.isPassword && !this.typeValid) {
                this.errors.password = '密码只能包含数组字母下划线';
            }

            if (this.currentValue.length < this.min && this.isText) {
                this.errors.min = `输入字符长度必须不小于${this.min}`;
            }
            if (this.currentValue.length > this.max && this.isText) {
                this.errors.max = `输入字符长度必须不大于${this.max}`;
            }
            
            this.firstError = this.errors[Object.keys(this.errors)[0]];
        },
        toastError() {
            this.$toast({
                content: this.firstError,
                duration: 2000
            });
        },
        getValid() {
            this.errors = {};
            this.firstError = '';
            if (this.validate) {
                this.validator();
            }
            if (Object.keys(this.errors).length > 0) {
                this.valid = false;
            } else {
                this.valid = true;
            }
        },
        formTel(telStr){
            telStr =  telStr.replace(/\s+/g,'');
            let telArr = telStr.split('');
            if(telArr[3] !== undefined && telArr[3] !== ' '){
                telArr.splice(3,0,' ');
            }
            if(telArr[8] !== undefined && telArr[8] !== ' '){
                telArr.splice(8,0,' ');
            }
            telStr = telArr.join('');
            return telStr;
        }
    },
    watch: {
        value(newVal) {
            if(this.isTel){
                this.currentValue =  this.formTel(newVal);
            }else{
                this.currentValue = newVal;
            }
        },
        currentValue(newVal, oldVal) {
            let val = newVal;
            if (this.trim) {
                val = trim(val);
            }
            if(this.isTel){
                val = val.replace(/\s+/g,'');
            }
            if (this.isNumber && newVal.length > this.max) {
                this.currentValue = oldVal;
            } else {
                this.$emit('change', val);
            }
        }
    }
}

</script>
