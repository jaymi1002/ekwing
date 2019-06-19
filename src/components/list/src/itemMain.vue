<template>
    <div class="e-item-main" :class="mainClass">
        <slot></slot>
    </div>
</template>
<script type="text/javascript">
import flexLayout from '../../../mixin/flexLayout.js';
export default {
    name: 'e-item-main',
    mixins:[flexLayout],
    computed:{
    	mainClass(){
    		return this.flexClasses;
    	}
    }
}

</script>
