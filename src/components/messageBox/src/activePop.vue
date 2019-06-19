<template>
    <e-modal ref="modal" :enterClass="enterClass" :leaveClass="leaveClass" :mask-click-disabled="maskClickDisabled" @maskClickHandle="$emit('cancelHandle')">
        <div class="e-active-pop">
            <div>
                <img class="top-img" :src="image" alt="">
            </div>
            <div class="main" :class="mainPop">
                <slot>
                    <div class="top-text tc">
                        <p class="title font16 bold text-g3" v-if="title || $slots.title"><slot name="title">{{title}}</slot></p>
                        <p class="content font14 text-g6" v-if="content || $slots.content">
                        	<slot name="content">content</slot>
                        </p>
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
                <e-button class="btn-item" :width="250" :height="76" inline active-type="scale" :theme="btnTheme" @click="confirm">
                    {{btnConfirmTxt}}
                </e-button>
            </div>
        </div>
    </e-modal>
</template>
<script type="text/javascript">
import mixin from '../mixin';
export default {
    name: 'e-active-pop',
    mixins: [mixin],
    props: {
        enterClass: {
            type: String,
            default: 'zoomIn',
        },
        leaveClass: {
            type: String,
            default: 'zoomOut',
        },
        image: {
            type: String,
            required: true,
        },
        btnTheme: String,
        btnConfirmTxt: {
            type: String,
            default: '确认'
        },
        btnCancelTxt: {
            type: String,
            default: '取消'
        },
    },
    computed:{
    	mainPop(){
    		return `main-${this.type}`;
    	}
    }
}

</script>
<style lang="scss">
@import '../style/messageBox.scss';
</style>
