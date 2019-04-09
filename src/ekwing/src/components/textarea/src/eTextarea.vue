<template>
    <div class="e-textarea">
        <p class="title font16 g6" v-if="title">{{title}}</p>
        <div class="content">
            <textarea class="text-g3 font14" :autocomplete="autocomplete" :autocapitalize="autocapitalize" :autocorrect="autocorrect" :spellcheck="spellcheck" :placeholder="placeholder" :readonly="readonly" :disabled="disabled" :name="name" :rows="rows" :cols="cols" :maxlength="maxNum" ref="textarea" v-model="text">
            </textarea>
            <p class="count-wrap" v-if="!noShowNum">{{count}}<span class="font12 text-g9">/{{maxNum}}</span></p>
        </div>
    </div>
</template>
<script type="text/javascript">
import Autosize from 'autosize';
export default {
    name: 'e-textarea',
    props: {
        title: String,
        maxNum: {
            type: Number,
            default: 100
        },
        value: String,
        name: String,
        rows: {
            type: Number,
            default: 3
        },
        cols: {
            type: Number,
            default: 30
        },
        height: Number,
        placeholder: {
            type: String,
            default: '写点什么吧。。。'
        },
        autocomplete: {
            type: String,
            default: 'off',
        },
        autocapitalize: {
            type: String,
            default: 'off',
        },
        autocorrect: {
            type: String,
            default: 'off',
        },
        spellcheck: {
            type: String,
            default: 'false'
        },
        autosize: Boolean,
        noShowNum: Boolean,
        noPlaceholder: Boolean,
        disabled: Boolean,
        countWords: Boolean,
        readonly: Boolean

    },
    data() {
        return {
            text: this.value ? this.value : ''
        }
    },
    mounted() {
        let _this = this;
        this.$nextTick(function() {
            if (_this.autosize) {
                _this.bindAutosize();
            }
        });
    },
    computed: {
        count() {
            return this.text.length;
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
        }
    },
    watch: {
        text(newVal) {
            this.$emit('update:value', newVal);
        },
        value(newVal) {
            let _this = this;
            this.text = newVal;
            this.$nextTick(function() {
                _this.updateAutosize()
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
<style lang="scss">
@import "../style/eTextarea.scss";

</style>
