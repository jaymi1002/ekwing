<template>
    <div class="e-check-icon" :class="{disabled:disabled}" @click="trigger">
        <e-icon v-if="value" :disabled="disabled" :type="plain ? 'check-plain' : 'check'" :color="color" :size="iconfFontSize"></e-icon>
        <e-icon v-else type="no-check" :disabled="disabled" :color="color" :size="iconfFontSize"></e-icon>
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
        plain: Boolean,
        value: Boolean,
        color: String,
        text: String,
        disabled:Boolean,
        tip:Boolean
    },
    mixins: [checkMixin],
    methods: {
        trigger() {
        	if(this.disabled){
        		if(this.tip){
        			this.$toast({
        				content:'选项目前不可选'
        			});
        		}
        		return false;
        	}
            this.$emit('change', !this.value);
        }
    }
}

</script>
<style lang="scss">
@import '../style/check.scss';
</style>
