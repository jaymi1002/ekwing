<template>
    <e-modal ref="modal">
        <div class="ptb20 plr20 message-box e-confirm">
            <div class="top tc">
                <img class="top-image" v-if="image" :src="image" />
                <div class="top-text font14" ref="content">
                    <slot></slot>
                </div>
            </div>
            <div class="btn-wrap mt20">
                <e-button class="btn mr20" bg-color="white" :border-color="btnColor" @click="cancel" >
                    取消
                </e-button>
                <e-button class="btn" :btn-color="btnColor" @click="confirm">
                    确定
                </e-button>
            </div>
        </div>
    </e-modal>
</template>
<script type="text/javascript">
export default {
    name: 'e-confirm',
    props: {
        btnTxt: {
            type: String,
            default: '知道了'
        },
        btnColor: {
            type: String,
            default: 'blue',
        },
        image: {
            type: String,
            default: ''
        }
    },
    data() {
        return {

        }
    },
    methods: {
        show() {
            this.$refs.modal.show();
        },
        cancel() {
            this.$refs.modal.hide();
            this.$emit('cancel');
        },
        confirm() {
            this.$refs.modal.hide();
            this.$emit('confirm');
        }
    }
}
</script>
<style lang="scss">
    @import '../style/messageBox.scss';
</style>