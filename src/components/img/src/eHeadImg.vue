<template>
    <div class="e-head-img" :class="headImgClass">
        <img :src="src" v-if="loaded && !error" />
        <div class="placeholder" v-if="!loaded || error">
            <e-icon type="head-default" :size="iconSize" color="g9"></e-icon>
        </div>
    </div>
</template>
<script type="text/javascript">
import { preLoadImg } from '../../../helpers/img.js';
export default {
    name: 'e-head-img',
    props: {
        src: {
            type: String,
            require: true,
        },
        circle: {
            type: Boolean,
            default: true,
        },
        border: Boolean,
        bdColor: {
            type: String,
            default: 'blue',
        }
    },
    data() {
        return {
            loaded: false,
            error: false,
            iconSize:20,
        }
    },
    computed: {
        headImgClass() {
            let classes = [];
            if (this.circle) {
                classes.push('cir');
            }
            if (this.border) {
                classes.push('border');
                classes.push(`bd-${this.bdColor}`);
            }
            return classes;
        },
    },
    mounted() {
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

</script>
<style lang="scss">
@import '../style/img.scss';

</style>
