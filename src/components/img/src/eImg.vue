<template>
    <div class="e-img-loading" :style="imgStyle">
        <img :src="src" v-if="loaded && !error">
        <div class="placeholder img-icon-error" :class="placeholderClass" v-if="error" @click="againLoad">
            <slot name="error">
                <e-icon :type="iconError" :size="iconErrorSize" :color="iconErrorColor"></e-icon>
            </slot>
        </div>
        <div class="placeholder img-icon-loading" :class="placeholderClass" v-if="!loaded && !error">
            <slot name="loading">
                <e-icon :type="iconLoading" :size="iconLoadingSize" :color="iconLoadingColor"></e-icon>
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
        inline: Boolean,
        //可继承属性
        bgColor: String,
        iconLoading: {
            type: String,
            default: 'img-loading',
        },
        iconLoadingSize: {
            type: Number,
            default: 60
        },
        iconError: {
            type: String,
            default: 'img-error'
        },
        iconErrorSize: {
            type: Number,
            default: 60 
        },
        iconLoadingColor:String,
        iconErrorColor:String,
    },
    computed: {
        imgStyle() {
            return {
                display: this.inline ? 'inline-block' : 'block'
            }
        },
        placeholderClass(){
            if(!this.bgColor){
                return 'default';
            }
            return `bg-${this.bgColor}`;
        }
    },
    data() {
        return {
            loaded: false,
            error: false,
        }
    },
    mounted() {
        this.loadImg();
    },
    methods: {
        againLoad() {
            this.error = false;
            this.loadImg();
        },
        loadImg() {
            let _this = this;
            preLoadImg({
                src: this.src,
                success() {
                    _this.loaded = true;
                },
                error() {
                    _this.error = true;
                }
            });
        }
    }
}

</script>
<style lang="scss">
@import '../style/img.scss';

</style>
