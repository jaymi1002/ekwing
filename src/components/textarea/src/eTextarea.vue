<template>
    <div class="e-textarea">
        <div class="content">
            <textarea
            :autocomplete="autocomplete" 
            :spellcheck="spellcheck" 
            :placeholder="placeholder" 
            :readonly="readonly" 
            :disabled="disabled" 
            :name="name" 
            :rows="rows" 
            :cols="cols" 
            :maxlength="maxlength" 
            ref="textarea" 
            @click="onClick" 
            @input="onInput" 
            @change="onChange" 
            @blur="onBlur" 
            @focus="onFocus" 
            v-model="currentValue">
            </textarea>
            <p class="count-wrap mr10" v-if="counter">{{count}}<span class="font14 text-g9"><span class="mlr5">/</span>{{maxlength}}</span></p>
        </div>
    </div>
</template>
<script type="text/javascript">
import Autosize from 'autosize';
export default {
    name: 'e-textarea',
    model:{
        prop:'value',
        event:'change'
    },
    props: {
        maxlength: {
            type: Number,
            default: 100
        },
        value: String,
        name: String,
        rows: {
            type: Number,
            default: 10
        },
        cols: {
            type: Number,
            default: 30
        },
        placeholder: String,
        autocomplete: {
            type: String,
            default: 'off',
        },
        spellcheck: {
            type: Boolean,
            default: false
        },
        autosize: Boolean,
        counter: Boolean,
        disabled: Boolean,
        readonly: Boolean,

    },
    data() {
        return {
            currentValue: this.value ? this.value : ''
        }
    },
    mounted() {
        setTimeout(() => {
            if (this.autosize) {
                this.bindAutosize();
            }
        });
    },
    computed: {
        count() {
            return this.currentValue.length;
        }
    },
    methods: {
        bindAutosize() {
            Autosize(this.$refs.textarea);
        },
        unbindAutosize() {
            Autosize.destroy(this.$refs.textarea);
        },
        updateAutosize() {
            Autosize.update(this.$refs.textarea)
        },
        focus() {
            this.$refs.textarea.focus();
        },
        onFocus(e){
            this.$emit('focusHandle',this.currentValue,e);
        },
        onClick(e){
            this.$emit('clickHandle',this.currentValue,e);
        },
        onBlur(e){
            this.$emit('blurHandle',this.currentValue,e);
        },
        onInput(e){
            this.$emit('inputHandle',this.currentValue,e);
        },
        onChange(e){
            this.$emit('changeHandle',this.currentValue,e);
        }
    },
    watch: {
        currentValue(newVal) {
            this.$emit('change', newVal);
        },
        value(newVal) {
            this.currentValue = newVal;
            this.$nextTick(() => {
                this.updateAutosize()
            });
        },
        autosize(newVal) {
            if (newVal) {
                this.bindAutosize();
            } else {
                this.unbindAutosize();
            }
        }
    }
}

</script>
