<template>
    <i class="iconfont" @click="proxyClick" v-bind:class="classes" :style="styles">
    </i>
</template>
<script type="text/javascript">
import '@/ekwing/src/style/iconfonts/style.css';
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
            type: String,
            default: '1em'
        },
        color: {
            type: String,
            default: 'blue'
        }
    },
    data() {
        return {

        }
    },
    computed: {
        classes() {
            return [`icon-${this.type}`, `text-${this.color}`];
        },
        styles() {
            return {
                'font-size': this.size,
                'opacity': (this.disabled ? 0.5 : 1.0),
            }
        }
    },
    methods:{

    }
}

</script>

