<template>
    <a href="javascript:;" class="e-btn font14" 
        @click="proxyClick" 
        :class="classes" 
        :style="styles">
        <i v-if="loading" class="loading"></i>
        <slot>{{text}}</slot>
    </a>
</template>
<script type="text/javascript">
import proxyClick from '../../../mixin/proxyClick.js';
import {css} from '../../../helpers/dom.js';
export default {
    name: 'e-button',
    mixins:[proxyClick],
    props: {
        width: {
            type: Number,
            default: 750,
        },
        height: {
            type: Number,
            default: 96
        },
        type: {
            type: String,
            default: 'default',
            validator(value) {
                return ['default', 'cir', 'rect'].indexOf(value) > -1;
            }
        },
        plain: Boolean,
        activeType: {
            type: String,
            default: 'opacity',
            validator(value) {
                return ['opacity', 'scale'].indexOf(value) > -1;
            }
        },
        borderRadius:{
            type:Number,
            default:10,
        },
        loading: Boolean,
        disabled: Boolean,
        theme: String,
        inline:Boolean,
        text:String
    },
    data() {
        return {

        }
    },
    computed: {
        classes() {
            let classes = [`e-btn-type-${this.type}`],
                theme = this.theme;
            if(this.plain){
                if(this.type !== 'rect'){
                    classes.push('e-btn-border');
                }
                theme += '-plain';
            }
            if(this.disabled){
                classes.push(`${theme}-disabled`);
            }else{
                classes.push(`${theme}-default`);   
            }

            if(!this.disabled && !this.loading){
                classes.push(`e-btn-active-${this.activeType}`);
            }

            return classes;
        },
        styles() {
            let style = {
                height: `${this.height/75}rem`,
                width: `${this.width/75}rem`,
                'line-height':`${this.height/75}rem`,
            };
            if(this.plain && this.type !== 'rect'){
                style.height = `${(this.height - 4)/75}rem`;
                style['line-height'] = `${(this.height - 4)/75}rem`;
                style.width = `${(this.width - 4)/75}rem`;
            }
            if(this.inline){
                style['display'] = 'inline-block';
            }

            style['border-radius'] = this.type === 'cir' ? '9999px'  : (this.type === 'default' ? this.borderRadius / 75 + 'rem' : 'unset');
            return style;
        }
    }
}

</script>
