<template>
    <a :href="href">
        <slot>{{text}}</slot>
    </a>
</template>
<script type="text/javascript">
import mixinText from '../../../mixin/text.js';
export default {
    name: 'e-a',
    mixins: [mixinText],
    props: {
        href: {
            type: String
        },
        type:{
        	type:String,
        	default:'inline'
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
