<template>
    <div class="e-check-list">
        <template v-if="title || $slots.title">
            <p class="title font16 bold">
                <slot name="title">{{title}}</slot>
            </p>
            <e-separator :bd-color="bdColor"></e-separator>
        </template>
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
        title: String,
        tip: Boolean,
        type: {
            type: String,
            default: 'checkbox',
            validator(value){
                return ['radio','checkbox'].indexOf(value) > -1;
            }
        },
        bdColor:String,
        reverse:Boolean,
        noBorder:Boolean,
        touchActive: Boolean,
        activeClass:String,
    },
    mounted(){
    },
}
</script>
