<template>
    <e-modal ref="modal" :enterClass="enterClass" :leaveClass="leaveClass" :mask-click-disabled="maskClickDisabled" @maskClickHandle="$emit('cancelHandle')">
        <div class="e-dialog">
            <div class="main">
                <div class="top">
                    <slot>
                        <div class="tc" v-if="image">
                            <img ref="image" class="top-image" :src="image" />
                        </div>
                        <div class="top-text tc">
                            <p class="title font16 bold text-g3">{{title}}</p>
                            <p class="content font14 text-g6" v-html="content"></p>
                        </div>
                    </slot>
                </div>
                <div class="btn-wrap tc" v-if="type === 'alert'">
                    <e-button :width="280" :height="76" inline :theme="btnTheme" @click="confirm" class="btn">
                        {{btnConfirmTxt}}
                    </e-button>
                </div>
                <div class="btn-wrap tc" v-else>
                    <e-button class="btn-item" :width="250" :height="76" inline plain active-type="scale" :theme="btnTheme" @click="cancel">
                        {{btnCancelTxt}}
                    </e-button>
                    <e-button class="btn-item" :width="250" :height="76" inline active-type="scale" :theme="btnTheme"  @click="confirm">
                        {{btnConfirmTxt}}
                    </e-button>
                </div>
            </div>
        </div>
    </e-modal>
</template>
<script type="text/javascript">
import mixin from '../mixin';
export default {
    name: 'e-dialog',
    mixins:[mixin],
    props: {
        enterClass: {
            type: String,
            default: 'zoomIn',
        },
        leaveClass: {
            type: String,
            default: 'zoomOut',
        },
        btnTheme: String,
        image: String,
        btnConfirmTxt: {
            type: String,
            default: '确认'
        },
        btnCancelTxt:{
            type: String,
            default: '取消'
        },
    },
    mounted(){
        if(this.image){
            let _this = this;
            this.$nextTick().then(() => {
                return new Promise((resolve, reject) => {
                    this.$refs.image.onload = () => {
                        resolve();
                    };
                    this.$refs.image.onerror = () => {
                        reject();
                    };
                });
            }).then(() => {
                this.$refs.modal.refreshPos();
            });
        }
    },
    data() {
        return {

        }
    },
    methods: {

    }
}

</script>
<style lang="scss">
@import '../style/messageBox.scss';

</style>
