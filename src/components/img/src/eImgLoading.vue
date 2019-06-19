<template>
    <div class="e-img-loading" :class="{'bg-ec':!loaded}">
        <img :src="src" v-if="loaded && !error">
        <div class="placeholder" v-if="error">
            <e-icon :type="iconError" :size="iconErrorSize" color="g9"></e-icon>
        </div>
        <div class="placeholder" v-if="!loaded && !error">
            <e-icon :type="icon" :size="iconSize" color="g9"></e-icon>
        </div>
    </div>
</template>
<script type="text/javascript">
import { preLoadImg } from '../../../helpers/img.js';
export default {
    name: 'e-img-loading',
    props: {
        src: {
            type: String,
            require: true,
        },
        icon:{
            type:String,
            default:'pic',
        },
        iconSize:{
            type:Number,
            default:40
        },
        iconError:{
            type:String,
            default:'pic-error'
        },
        iconErrorSize:{
            type:Number,
            default:40
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
