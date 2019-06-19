<template>
    <div class="e-timeline-item" :class="itemClass">
        <div class="e-timeline-left">
            <slot name="left">{{time}}</slot>
            <e-icon class="time-icon" type="circle" :size="iconSize" :color="iconColor"> </e-icon>
        </div>
        <div class="e-timeline-right" :class="$parent.flexClasses">
            <slot name="right"></slot>
        </div>
    </div>
</template>
<script type="text/javascript">
export default {
    name: 'e-timeline-item',
    props: {
        active: Boolean,
        time:String
    },
    computed:{
        itemClass(){
            if(this.active){
                return ['active',`text-${this.$parent.activeColor}`];
            }
        },
        iconSize(){
            return this.active ? '1.5em' : '1.0em';
        },
        iconColor(){
            return this.active ? this.$parent.activeColor : 'g9';
        },
        iconType(){
            return this.active ? this.$parent.activeIconType : this.$parent.iconType;
        }
    }
}

</script>
<style lang="scss">
    @import '../style/timeline.scss';
</style>
