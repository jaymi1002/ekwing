<template>
    <e-modal ref="modal" :enterClass="enterClass" :leaveClass="leaveClass" :mask-click-disabled="maskClickDisabled" @maskClickHandle="$emit('cancelHandle')">
        <div class="e-dialog-simple">
            <div class="main">
                <div class="top">
                    <div class="top-text tc">
                        <p class="title font16 bold text-g3">{{title}}</p>
                        <p class="content font14 text-g6" v-html="content"></p>
                    </div>
                </div>
                <div class="btn-wrap tc" v-if="type === 'alert'">
                    <e-button class="btn-item" :class="btnItemClass" :width="540" :height="96" inline @click="confirm" type="rect">
                        {{btnConfirmTxt}}
                    </e-button>
                </div>
                <div class="btn-wrap tc" v-else>
                    <e-button class="btn-item" :class="btnItemClass" :width="270" :height="96" type="rect" inline plain @click="cancel">
                        {{btnCancelTxt}}
                    </e-button>
                    <e-button class="btn-item" :class="btnItemClass" :width="270" :height="96" type="rect" inline  @click="confirm">
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
    mixins: [mixin],
    props: {
        btnConfirmTxt: {
            type: String,
            default: '确认'
        },
        btnCancelTxt: {
            type: String,
            default: '取消'
        },
        btnColor:String
    },
    computed:{
        btnItemClass(){
            return `text-${this.btnColor}`;
        }
    },
    methods: {

    }
}

</script>
<style lang="scss">
@import '../style/messageBox.scss';

</style>
