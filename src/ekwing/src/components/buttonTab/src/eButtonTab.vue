<template>
    <div class="e-button-tab bd1px bd-solid" :class="tabWrapClass">
        <slot></slot>
        <a href="javascript:;" class="tab-bg" :class="tabBgClass" :style="tabBgStyle">
        </a>
    </div>
</template>
<script type="text/javascript">
export default {
    name: 'e-button-tab',
    model: {
        prop: 'value',
        event: 'change',
    },
    props: {
        type: {
            type: String,
            default: 'cir',
            validator(value) {
                return ['cir', 'default'].indexOf(value) !== -1;
            }
        },
        color: {
            type: String,
            default: 'blue',
        },
        value: {
            type:[Number, String],
            default:0
        },
        border:{
            type:Boolean,
            default:true,
        }
    },
    computed: {
        tabWrapClass() {
            return [`e-button-tab-${this.type}`,`bd-${this.color}`]
        },
        tabBgStyle() {
            let i;
            this.$children.forEach((el, index) => {
                if (el.value === this.current) {
                    i = index;
                }
            });
            return {
                left: (100 / this.tabNum * i + '%'),
                width: 100 / this.tabNum + '%'
            }
        },
        tabBgClass(){
            return `bg-${this.color}`;
        }
    },
    data() {
        return {
            current: this.value,
            tabNum: 1,
        }
    },
    mounted() {
        this.tabNum = this.$children.length;
    },
    watch: {
        value(newVal) {
            this.current = newVal;
        },
        current(newVal){
        	this.$emit('change',newVal);
        }
    }
}

</script>
<style lang="scss">
@import "../style/buttonTab.scss";

</style>
