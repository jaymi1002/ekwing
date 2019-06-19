<template>
    <div class="e-timeline">
        <slot></slot>
    </div>
</template>
<script type="text/javascript">
import flexLayout from '../../../mixin/flexLayout.js';
export default {
    name: 'e-timeline',
    mixins:[flexLayout],
    props: {
        activeColor: {
            type: String,
            default: 'blue'
        },
        iconType:{
        	type:String,
        	default:'circle'
        },
        activeIconType:{
        	type:String,
        	default:'circle'
        },
        justifyContent:{
        	type:String,
        	default:'center'
        }
    }
}

</script>
