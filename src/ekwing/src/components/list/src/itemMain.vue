<template>
    <div class="e-item-main" :class="classes">
        <slot></slot>
    </div>
</template>
<script type="text/javascript">
import flexLayout from '../../../mixin/flexLayout.js';
export default {
    name: 'e-item-main',
    mixins:[flexLayout],
    computed:{
    	classes(){
    		return this.flexClasses;
    	}
    }
}

</script>
<style lang="scss">
	@import '../style/list.scss';
</style>
