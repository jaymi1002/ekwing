<template>
    <span :class="classes" :style="styles">
        <slot>{{text}}</slot>
    </span>
</template>
<script type="text/javascript">
import mixinText from '../../../mixin/text.js';
export default {
    name: 'e-span',
    mixins: [mixinText],
    props:{
        type:{
            type:String,
            default:'inline',
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
