<template>
    <div class="e-progress">
        <div class="e-progress-outter" :class="outterClass">
        </div>
        <div class="e-progress-inner" :class="innerClass" :style="innerStyle">
        </div>
    </div>
</template>
<script type="text/javascript">
export default {
    name: 'e-progress',
    props: {
        value: Number,
        outerColor: String,
        innerColor:String,
    },
    computed: {
        outterClass() {
        	if(this.outterColor){
        		return `bg-${this.outerColor}`;
        	}
            return 'outer-default';
        },
        innerClass() {
        	if(this.innerColor){
        		return `bg-${this.innerColor}`;
        	}
        	return 'inner-default';
            
        },
        innerStyle() {
            return {
                width: this.value + '%'
            }
        }
    }
}

</script>
