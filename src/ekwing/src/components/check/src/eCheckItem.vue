<template>
    <div class="e-check-item" @click="select" :class="{reverse:labelRight}">
        <div class="item-side" :class="{disabled:disabled}">
            <e-icon v-if="actived" :disabled="disabled" :type="plain ? 'check-plain' : 'check'" :color="color" :size="iconfFontSize"></e-icon>
        	<e-icon v-else type="no-check" :disabled="disabled" :color="color" :size="iconfFontSize"></e-icon>
        </div>
        <div class="item-content font14">
            <slot></slot>
        </div>
    </div>
</template>
<script type="text/javascript">
import checkMixin from '../mixin/check';
export default {
    name: 'e-check-item',
    props: {
        pointer: {
            type: [Number],
            required: true,
        }
    },
    computed: {
        actived() {
            if (this.$parent.type === 'radio') {
                return this.$parent.currentValue === this.pointer;
            } else if (this.$parent.currentValue && this.$parent.currentValue.length > 0) {
                return this.$parent.currentValue.indexOf(this.pointer) > -1;
            } else {
                return false;
            }
        },
        labelRight() {
            return this.$parent.labelRight;
        },
        color() {
            return this.$parent.color;
        },
        plain() {
            return this.$parent.plain;
        },
        disabled() {
            return this.$parent.disabled;
        }
    },
    mixins: [checkMixin],
    methods: {
        select() {
            if (this.disabled) {
                return false;
            }
            if (this.$parent.type === 'radio') {
                this.selectRadio();
            } else {
                this.selectCheckBox();
            }
        },
        selectRadio() {
            this.$parent.currentValue = this.pointer;
        },
        selectCheckBox() {
            if (!this.$parent.currentValue || this.$parent.currentValue === null) {
                this.$parent.currentValue = []
            }
            let index = this.$parent.currentValue.indexOf(this.pointer);
            if (index > -1) {
                if (this.$parent.currentValue.length === this.$parent._min) {
                    this.$parent.overflow('down');
                    return false;
                }
                this.$parent.currentValue.splice(index, 1);
            } else {
                if (this.$parent.currentValue.length === this.$parent._max) {
                    this.$parent.overflow('up');
                    return false;
                }
                this.$parent.currentValue.push(this.pointer);
            }
        }
    }
}
</script>
<style lang="scss">
@import '../style/check.scss';
</style>