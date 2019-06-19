<template>
    <e-modal :direction="direction" ref="modal" :mask-click-disabled="maskClickDisabled">
        <div class="e-actionsheet-wrap">
            <div class="main">
                <div class="header" :class="{horizontal:horizontal}" v-if="title || explain">
                    <p class="title bold font18 text-g3" v-if="title">{{title}}</p>
                    <p class="explain font14 text-g9" v-if="explain">{{explain}}</p>
                </div>
                <div class="actionsheet-list" v-if="!horizontal">
                    <template v-for="(el,index) in list">
                        <e-separator></e-separator>
                        <a href="javascript:;" class="actionsheet-item font16 text-g3" @click="choose(index)" :key="index" :class="{disabled:el.disabled}">
                            {{el.title}}
                        </a>
                    </template>
                </div>
                <e-grid v-else class="actionsheet-list-horizontal" :cols="cols" hide-vertical-dividers>
                    <template v-for="(el,index) in list">
                        <e-grid-item href="javascript:;" class="actionsheet-item font16 text-g3" @click="choose(index)" :key="index" :class="{disabled:el.disabled}">
                            <template v-if="el.img">
                                <img class="icon-img" slot="icon" :src="el.img" />
                            </template>
                            <p slot="label" class="icon-label font12 text-g6">{{el.title}}</p>
                        </e-grid-item>
                    </template>
                </e-grid>
            </div>
            <div class="cancel-wrap" @click="hide" v-if="!noCancel">
                <a href="javascript:;" class="cancel-btn font16 text-g3">
                    取消
                </a>
            </div>
        </div>
    </e-modal>
</template>
<script type="text/javascript">
/*
list:{
        title:'北京烤鸭',
        disabled:false,
        img:''
    }
*/
export default {
    name: 'e-actionsheet',
    props: {
        //水平特有属性
        horizontal: Boolean,
        cols:{
            type:Number,
            default:4
        },
        //共有属性
        list: {
            type: Array,
            require: true,
        },
        title: String,
        explain: String,
        autoClose: {
            type: Boolean,
            default: true,
        },
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
                this.$emit('cancelHandle');
                this.$refs.modal.hide();
            } else {
                if (this.list[index].disabled) {
                    return false;
                }
                this.$emit('chooseHandle', index);
                if (this.autoClose) {
                    this.$refs.modal.hide();
                }
            }
        }
    }
}

</script>
