<template>
    <b :class="classes" :style="styles">
		<slot>{{text}}</slot>
	</b>
</template>
<script type="text/javascript">
import mixinText from '../../../mixin/text.js';
export default {
    name: 'e-b',
    mixins: [mixinText],
    props:{
        type:{
            type:String,
            default:'inline',
        },
        bold:{
            default:true,
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