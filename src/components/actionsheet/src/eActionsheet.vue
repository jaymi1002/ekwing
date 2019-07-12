<template>
    <e-modal direction="bottom" ref="modal" :mask-click-disabled="maskClickDisabled">
        <div class="e-actionsheet-wrap">
            <div class="main">
                <div class="actionsheet-list" v-if="!horizontal">
                    <slot></slot>
                </div>
                <e-grid v-else class="actionsheet-list-horizontal" :cols="cols" hide-vertical-dividers hide-tb-border>
                    <slot></slot>
                </e-grid>
            </div>
            <div class="cancel-wrap" @click="hide" v-if="!noCancel">
                <a href="javascript:;" class="cancel-btn font16 text-g6">
                    取消
                </a>
            </div>
        </div>
    </e-modal>
</template>
<script type="text/javascript">
import separator from '../../../mixin/separator.js';
export default {
    name: 'e-actionsheet',
    provide() {
        return {
            actionsheet: this
        }
    },
    props: {
        //水平特有属性
        horizontal: Boolean,
        cols: {
            type: Number,
            default: 4
        },
        autoClose: {
            type: Boolean,
            default: true,
        },
        maskClickDisabled: Boolean,
        noCancel: Boolean,
    },
    methods: {
        show() {
            this.$refs.modal.show();
        },
        hide() {
            this.$emit('cancelHandle');
            this.$refs.modal.hide();
        },
        choose(index) {
            this.$emit('chooseHandle', index);
            if (this.autoClose) {
                this.$refs.modal.hide();
            }
        }
    }
}

</script>
