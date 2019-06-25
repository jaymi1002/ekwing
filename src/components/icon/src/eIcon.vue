<template>
    <i class="iconfont" @click="proxyClick" v-bind:class="classes" :style="styles">
        <span class="e-icon-error" v-if="!type">
            error
        </span>
    </i>
</template>
<script type="text/javascript">
import proxyClick from '../../../mixin/proxyClick.js';
export default {
    name: 'e-icon',
    mixins:[proxyClick],
    props: {
        type: {
            require: true,
            type: String,
        },
        size: {
            type: Number,
            default: 14,
        },
        color: {
            type:String,
            default:'primary'
        },
        disabled: Boolean,
    },
    computed: {
        classes() {
            return [`icon-${this.type}`, `text-${this.color}`,`font${this.size}`];
        },
        styles() {
            return {
                'opacity': (this.disabled ? 0.5 : 1.0),
            }
        }
    },
    methods:{

    }
}

</script>
<style lang="scss">
    .e-icon-error{
        color: #FA5151;
    }
</style>

