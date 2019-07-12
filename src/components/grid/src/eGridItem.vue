<template>
    <div class="e-grid-item" :style="styles" :class="gridItemClass" @click="$emit('click')">
        <slot>
            <div class="e-grid-item-icon" v-if="hasIconSlot">
                <slot name="icon"></slot>
            </div>
            <div class="e-grid-item-label font12 text-g3" v-if="hasLabelSlot">
                <slot name="label"></slot>
            </div>
        </slot>
    </div>
</template>
<script type="text/javascript">
export default {
    name: 'e-grid-item',
    props:{
        value:Number,
    },
    data(){
    	return {
    		selfIndex:this.value ? this.value : 0,
    	}
    },
    inject:['grid'],
    computed: {
        cols() {
            return this.grid.cols;
        },
        styles() {
            let width = 100 / this.cols + '%';
            return {
                width: width
            }
        },
        gridItemClass() {
            let classes = [`bd-${this.grid.bdColor}`];
            if (this.grid.hideVerticalDividers && this.position.col !== this.cols - 1) {
                classes.push('no-r-border');
                
            }
            if (this.position.col === this.cols - 1 && this.grid.hideLrBorder) {
                classes.push('no-r-border');   
            }
            if(this.grid.hideTbBorder){
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
    }
}

</script>
