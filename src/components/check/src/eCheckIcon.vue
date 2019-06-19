<template>
    <div class="e-check-icon" @click="trigger">
        <e-icon v-if="iconType" :type="iconType" :disabled="disabled" :color="iconColor" :size="iconSize"></e-icon>
        <slot><span class="label font14">{{text}}</span></slot>
    </div>
</template>
<script type="text/javascript">
import checkMixin from '../mixin/check';
export default {
    name: 'e-check-icon',
    model: {
        prop: 'value',
        event: 'change'
    },
    props: {
        value: Boolean,
        text: String,
        disabled:Boolean
    },
    computed:{
        iconColor(){
            return this.value ? this.activeColor : this.defaultColor;
        },
        iconType(){
            return this.value ? this.activeType : this.defaultType;
        },
    },
    mixins: [checkMixin],
    methods: {
        trigger() {
        	if(this.disabled){
        		return false;
        	}
            this.$emit('change', !this.value);
        }
    }
}

</script>
