<template>
    <div class="e-list">
        <slot></slot>
    </div>
</template>
<script type="text/javascript">
export default {
    name: 'e-list',
    props: {
        touchActive: Boolean,
        activeClass: String,
    },
    data(){
    	return {
    		isList:true
    	}
    }
}
</script>

