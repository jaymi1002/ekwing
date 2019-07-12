<template>
    <i class="iconfont" @click="proxyClick" :class="iconClass" :style="styles">
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
        color: String,
        disabled: Boolean,
    },
    computed: {
        iconClass() {
            let classes = [`font${this.size}`];
            if(this.color){
                classes.push(`text-${this.color}`);
            }
            if(this.type){
                classes.push(`icon-${this.type}`);
            }
            return classes;
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

