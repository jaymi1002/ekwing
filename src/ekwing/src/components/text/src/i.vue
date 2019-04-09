<template>
    <i :class="classes" :style="styles">
		<slot>{{text}}</slot>
	</i>
</template>
<script type="text/javascript">
import mixinText from '../../../mixin/text.js';
export default {
    name: 'e-i',
    mixins: [mixinText],
    props:{
        type:{
            type:String,
            default:'inline',
        },
        italic:{
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