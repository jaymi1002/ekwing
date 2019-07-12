<template>
    <div class="e-check-list">
        <slot></slot>
    </div>
</template>
<script type="text/javascript">
import checkMixin from '../mixin/check';
import eChecker from './eChecker.vue';
export default {
    name: 'e-check-list',
    mixins:[checkMixin],
    extends:eChecker,
    props: {
        tip: Boolean,
        type: {
            type: String,
            default: 'checkbox',
            validator(value){
                return ['radio','checkbox'].indexOf(value) > -1;
            }
        },
        reverse:Boolean,
        touchActive: Boolean,
        activeClass:[String,Array]
    }
}
</script>
