<template>
    <a :href="href" class="e-btn font14" @click="proxyClick" :class="classes" :style="styles">
        <i v-if="loading" class="e-btn-loading"></i><slot>{{text}}</slot>
    </a>
</template>
<script type="text/javascript">
import proxyClick from '../../../mixin/proxyClick.js';
export default {
    name: 'e-button',
    mixins: [proxyClick],
    props: {
        size: {
            type: String,
            default: 'middle', // mini、middle、max
            validator(value) {
                return ['mini', 'middle', 'max'].indexOf(value) !== -1;
            }
        },
        corner: {
            type: String,
            default: 'default', // default
            validator(value) {
                return ['default', 'cir', 'no'].indexOf(value) !== -1;
            }
        },
        plain: Boolean,
        color: {
            type:String,
            default:'default'
        },
        loading: Boolean,
        href: {
            type: String,
            default: 'javascript:;'
        },
        text: String
    },
    computed: {
        classes() {
            let classes = [`e-btn-size-${this.size}`, `e-btn-corner-${this.corner}`];
            let colorPrefix = this.plain ? 'e-btn-plain' : 'e-btn';
            if(this.plain){
                classes.push('e-btn-plain');
            }
            classes.push(`${colorPrefix}-${this.color}`);
            //是否禁止点击
            if (this.disabled) {
                classes.push('e-btn-disabled');
            }

            return classes;
        },
        styles() {}
    },
    methods: {

    },
}

</script>
<style lang="scss">
@import '../../../style/base/flex.scss';
@import './eButton.scss';

</style>
