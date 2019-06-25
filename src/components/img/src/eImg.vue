<template>
    <div class="e-img-loading" :style="imgStyle">
        <img :src="src" v-if="loaded && !error">
        <div class="placeholder" v-if="error">
            <slot name="error">
                <e-icon :type="iconError" :size="iconErrorSize" color="g9"></e-icon>
            </slot>
        </div>
        <div class="placeholder" v-if="!loaded && !error">
            <slot name="loading">
                <e-icon :type="icon" :size="iconSize" color="g9"></e-icon>
            </slot>
        </div>
    </div>
</template>
<script type="text/javascript">
import { preLoadImg } from '../../../helpers/img.js';
export default {
    name: 'e-img',
    props: {
        src: {
            type: String,
            require: true,
        },
        inline:Boolean,
        //可继承属性
        icon:{
            type:String,
            default:'img-loading',
        },
        iconSize:{
            type:Number,
            default:60
        },
        iconError:{
            type:String,
            default:'img-error'
        },
        iconErrorSize:{
            type:Number,
            default:60
        }
    },
    computed:{
        imgStyle(){
            return {
                display: this.inline ? 'inline-block' : 'block'
            }
        }
    },
    data() {
        return {
            loaded: false,
            error: false,
        }
    },
    mounted() {
        let _this = this;
        preLoadImg({
            src:this.src,
            success(){
                _this.loaded = true;
            },
            error(){
                _this.error = true;
            }
        });
    }
}

</script>
<style lang="scss">
@import '../style/img.scss';

</style>
