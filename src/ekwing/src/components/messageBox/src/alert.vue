<template>
    <e-modal ref="modal">
        <div class="ptb20 plr20 message-box e-alert">
            <div class="content">
                <div class="top">
                    <img class="top-image" v-if="image" :src="image" />
                    <div class="top-text font14 tc" ref="content">
                        <slot></slot>
                    </div>
                </div>
                <div class="btn-wrap mt20">
                    <e-button :btn-color="btnColor" @click="cancel" class="btn">
                        {{btnTxt}}
                    </e-button>
                </div>
            </div>
        </div>
    </e-modal>
</template>
<script type="text/javascript">
export default {
    name: 'e-alert',
    props: {
        btnTxt: {
            type: String,
            default: '知道了'
        },
        btnColor: {
            type: String,
            default: 'blue',
        },
        image: String
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
        }
    }
}

</script>
<style lang="scss">
    @import '../style/messageBox.scss';
</style>
