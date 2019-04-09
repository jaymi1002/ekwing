<template>
    <p :class="classes" :style="styles">
		<slot>{{text}}</slot>
	</p>
</template>
<script type="text/javascript">
import mixinText from '../../../mixin/text.js';
export default {
    name: 'e-p',
    mixins: [mixinText],
    props:{
        type:{
            type:String,
            default:'block',
        }
    },
    computed: {
        classes() {
            return this.textClasses;
        },
        styles() {
            return this.textStyles;
        }
    }
}

</script>
