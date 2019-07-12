<template>
    <e-modal ref="modal" direction="bottom">
        <div class="e-scroll-pop">
            <e-item class="e-scroll-pop-top font14">
                <e-item-side>
                    <e-button-text @click="hide" :class="`text-${btnColor}`">
                        取消
                    </e-button-text>
                </e-item-side>
                <e-item-main justify-content="center" class="font18">
                    <div class="tc">
                        <p class="font18" v-if="title || $slots.title">
                            <slot name="title">
                                {{title}}
                            </slot>
                        </p>
                        <p class="font14 text-g9 mt10" v-if="label || $slots.label">
                            <slot name="label">
                                {{label}}
                            </slot>
                        </p>
                    </div>
                </e-item-main>
                <e-item-side right>
                    <e-button-text @click="sure" :class="`text-${btnColor}`">
                        确定
                    </e-button-text>
                </e-item-side>
            </e-item>
            <div class="e-scroll-pop-content">
                <div class="scroller-wrap">
                    <e-scroller ref="year" :list="list" v-model="currentValue" :wheel="wheel">
                    </e-scroller>
                </div>
            </div>
        </div>
    </e-modal>
</template>
<script type="text/javascript">
export default {
    name: 'e-scroll-pop',
    model: {
        prop: 'value',
        event: 'change'
    },
    props: {
        list: {
            type: Array,
            required: true
        },
        value: {
            type: Number,
            required: true,
            default: 0
        },
        wheel: {
            type: Boolean,
            default: true
        },
        title: {
            type: String,
        },
        label: {
            type: String,
        },
        btnColor: {
            type:String,
            default:'g3'
        }
    },
    data() {
        return {
            currentValue: this.value
        }
    },
    methods: {
        show() {
            this.$refs.modal.show();
        },
        hide() {
            this.$refs.modal.hide();
        },
        sure() {
            this.$emit('change', this.currentValue);
            this.hide();
        }
    }
}

</script>
