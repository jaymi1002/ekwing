<template>
    <e-modal :direction="direction" ref="modal" :mask-click-disabled="maskClickDisabled">
        <div class="e-actionsheet" :class="{'e-actionsheet-middle':middle}">
        	<!--vertical-->
            <e-list touch-active class="actionsheet-list" v-if="!horizontal">
                <e-item class="actionsheet-item" v-if="hasHeader" :touch-active="false">
                    <e-item-main justify-content="center" class="font16">
                        <slot name="header"></slot>
                    </e-item-main>
                </e-item>
                <e-item v-for="(el,index) in list" class="actionsheet-item" :class="{disabled:el.disabled}" @click="choose(index)" :touch-active="!el.disabled">
                    <e-item-main justify-content="center">
                        <p class="font16 tc" :class="[!el.color ? 'text-g3' : `text-${el.color}`]">{{el.title}}</p>
                    </e-item-main>
                </e-item>
            </e-list>
            <!--horizontal-->
            <e-grid v-else class="actionsheet-list" show-vertical-dividers :cols="cols" :show-vertical-dividers="showVerticalDividers">
                <e-grid-item v-for="(el,index) in list" class="actionsheet-item" @click="choose(index)" :class="{disabled:el.disabled}">
                    <template v-if="el.img">
                        <img slot="icon" :src="el.img" />
                    </template>
                    <template slot="label">{{el.title}}</template>
                </e-grid-item>
            </e-grid>

            <div class="actionsheet-cancel-divider" v-if="!noCancel"></div>
            <e-list border-type="none">
                <e-item class="actionsheet-item" v-if="!noCancel" @click="choose(-1)">
                    <e-item-main justify-content="center">
                        <span class="font16" :class="['text-g3']">取消</span>
                    </e-item-main>
                </e-item>
            </e-list>
        </div>
    </e-modal>
</template>
<script type="text/javascript">
/*
list:{
	    title:'北京烤鸭',
	    disabled:false,
	    color:'blue',
        img:''
	}
*/
export default {
    name: 'e-actionsheet',
    props: {
        list: {
            type: Array,
            require: true,
        },
        
        //水平特有属性
        horizontal: Boolean,
        cols:Number,
        showVerticalDividers:Boolean,

        //共有属性
        autoClose: {
            type: Boolean,
            default: true,
        },
        middle: Boolean,
        maskClickDisabled: Boolean,
        noCancel: Boolean,
    },
    computed: {
        direction() {
            if (this.middle) {
                return 'middle';
            } else {
                return 'bottom';
            }
        },
        hasHeader() {
            return !!this.$slots.header;
        }
    },
    methods: {
        show() {
            this.$refs.modal.show();
        },
        hide() {
            this.$refs.modal.hide();
        },
        choose(index) {
            if (index == -1) {
                this.$emit('cancel');
                this.$refs.modal.hide();
            } else {
                if (this.list[index].disabled) {
                    return false;
                }
                this.$emit('choose', index);
                if (this.autoClose) {
                    this.$refs.modal.hide();
                }
            }


        }
    }
}

</script>
<style lang="scss">
@import '../style/actionsheet.scss';

</style>
