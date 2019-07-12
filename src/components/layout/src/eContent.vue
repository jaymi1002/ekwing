<template>
    <div class="e-layout-content" :class="contentClasses">
        <slot></slot>
    </div>
</template>
<script type="text/javascript">
import vueBus from '../../../helpers/vueBus';
export default {
    name: 'e-content',
    props:{
    	overHidden:Boolean
    },
    data(){
    	return {
    		headerHeight:0
    	}
    },
    created(){
    	vueBus.$on('headerChange',(height) => {
    		this.headerHeight = height;
        });
    },
    computed: {
        contentClasses() {
            let classes = [];
            classes.push(this.overHidden ? 'overflow-hidden' : 'overflow-auto');
            return classes;
        }
    },
    watch: {
        headerHeight(newVal) {
            this.$el.style.height = `calc(100% - ${newVal}px)`;
        }
    }
}
</script>
