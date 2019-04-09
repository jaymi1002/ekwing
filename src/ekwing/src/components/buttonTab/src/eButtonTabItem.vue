<template>
    <a href="javascript:;" class="tab-item font14" :style="itemStyle" @click="tabClick" :class="itemClass">
        <slot></slot>
    </a>
</template>
<script type="text/javascript">
export default {
    name: 'e-button-tab-item',
    props: {
    	value:{
    		type:[Number,String],
    		required:true
    	}
    },
    computed: {
        itemStyle() {
            return {
                width: 100 / this.$parent.tabNum + '%'
            }
        },
        itemClass(){
        	if(this.$parent.current === this.value){
        		return ['tab-active'];
        	}
        }
    },
    methods:{
    	tabClick(){
    		this.$parent.current = this.value;
    	}
    }
}

</script>
<style lang="scss">
@import "../style/buttonTab.scss";
</style>
