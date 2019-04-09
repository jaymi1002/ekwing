<template>
    <div class="e-header flex flex-center" :class="classes">
        <div class="pct10 flex flex-center">
            <slot name="leftSlot">
                <e-icon type="arrow-left" size="2em" color="g3" @click="$emit('goback')"></e-icon>
            </slot>
        </div>
        <p class="pct80 flex flex-center">
            <slot name="titleSlot">
                <span class="font18">{{title}}</span>
            </slot>
        </p>
        <div class="pct10 flex flex-center">
            <slot name="rightSlot"></slot>
        </div>
    </div>
</template>
<script type="text/javascript">
export default {
    name: 'e-header',
    props: {
        bgColor: {
            type: String,
            default: 'transparent',
        },
        title: {
            type: String,
            default: '',
        },
        shadow: {
            type: Boolean
        }
    },
    computed: {
        classes() {
        	let classes = [`bg-${this.bgColor}`];
        	if(this.shadow){
        		classes.push('e-header-shadow');
        	}
            return classes;
        }
    }
}

</script>
<style lang="scss">
.e-header {
    height: 1.2rem;
    overflow: hidden;
    >* {
        height: 100%;
    }
    &-shadow{
    	box-shadow: 0.027rem 0.027rem 0.067rem #eee;
    }
}

</style>
