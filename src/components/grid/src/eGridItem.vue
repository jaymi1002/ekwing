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
    },
    data(){
    	return {
    		selfIndex:0
    	}
    },
    computed: {
        cols() {
            return this.$parent.cols;
        },
        styles() {
            let width = 100 / this.cols + '%';
            return {
                width: width
            }
        },
        gridItemClass() {
            let classes = [`bd-${this.$parent.bdColor}`];
            if (this.$parent.hideVerticalDividers && this.position.col !== this.cols - 1) {
                classes.push('no-r-border');
                
            }
            if (this.position.col === this.cols - 1 && this.$parent.hideLrBorder) {
                classes.push('no-r-border');   
            }
            if(this.$parent.hideTbBorder){
                classes.push('no-b-border');
            }
            return classes;
        },
        position() {
            let index = this.selfIndex;
            return {
                row: Math.floor(index / this.cols),
                col: Math.floor(index % this.cols)
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
        this.selfIndex = getSelfIndex(this);
    },
    methods: {}
}

</script>
