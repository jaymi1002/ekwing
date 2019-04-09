<template>
    <div class="e-grid-item" :style="styles" :class="gridItemClass" @click="$emit('click')">
        <div class="e-grid-item-icon" v-if="hasIconSlot">
            <slot name="icon"></slot>
        </div>
        <div class="e-grid-item-label font12 text-g3" v-if="hasLabelSlot">
            <slot name="label"></slot>
        </div>
        <slot></slot>
    </div>
</template>
<script type="text/javascript">
import {getSelfIndex} from '../../../helpers/parent-children.js';
export default {
    name: 'e-grid-item',
    props: {
        label: String,
        icon: String,
        // link: String,
    },
    data(){
    	return {
    		selfIndex:0
    	}
    },
    computed: {
        rowNum() {
            return this.$parent.rowNum;
        },
        cols() {
            return this.$parent.cols;
        },
        styles() {
            let width = 100 / this.rowNum + '%';
            return {
                width: width
            }
        },
        gridItemClass() {
            if (!this.$parent.showVerticalDividers && this.position.col !== this.rowNum - 1) {
                return 'e-grid-item-no-border';
            }
            if (this.position.col === this.rowNum - 1 && !this.$parent.showLrBorder) {
                return 'e-grid-item-no-border';
            }
        },
        position() {
            let index = this.selfIndex;
            return {
                row: Math.floor(index / this.rowNum),
                col: Math.floor(index % this.rowNum)
            }
        },
        hasIconSlot(){
        	return !!this.$slots.icon;
        },
        hasLabelSlot(){
        	return !!this.$slots.label;
        }
    },
    mounted() {
        let _this = this;
        this.selfIndex = getSelfIndex(this);
    },
    methods: {}
}

</script>
<style lang="scss">
@import "../style/eGrid.scss";

</style>
