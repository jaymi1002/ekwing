<template>
    <div class="e-header flex flex-center" :class="classes">
        <div class="pct15 left" @click="$emit('goback')">
            <slot name="left">
                <e-icon type="arrow-left" :size="iconSize" :color="iconColor"></e-icon>
            </slot>
        </div>
        <p class="pct70 title font18 text-g3">
            <slot name="title">
                {{title}}
            </slot>
        </p>
        <div class="pct15 right font18">
            <slot name="right">
            </slot>
        </div>
    </div>
</template>
<script type="text/javascript">
import { height } from '../../../helpers/dom';
import vueBus from '../../../helpers/vueBus';
export default {
    name: 'e-header',
    props: {
        title: {
            type: String,
        },
        shadow: {
            type: Boolean,
            default: true
        },
        fixed: Boolean,
        iconSize:{
            type:Number,
            default:24
        },
        iconColor:{
            type:String,
            default:'g6'
        }
    },
    mounted() {
        this.$nextTick(() => {
            if (this.fixed) {
                vueBus.$emit('headerChange', height(this.$el));
            }
        });
    },
    updated() {
        if (this.fixed) {
            vueBus.$emit('headerChange', height(this.$el));
        }
    },
    computed: {
        classes() {
            let classes = [];
            if (this.shadow) {
                classes.push('shadow');
            }
            return classes;
        }
    }
}

</script>
<style lang="scss">
.e-header {
    overflow: hidden;
    min-height: 1.173rem;
    >* {
        height: 100%;
    }
    &.shadow {
        box-shadow: 0.027rem 0.027rem 0.067rem #eee;
    }
    .left,
    .right,
    .title {
        display: flex;
        align-items: center;
    }
    .title {
        justify-content: center;
    }
    .left {
        justify-content: flex-start;
    }
    .right {
        justify-content: flex-end;
    }
}

</style>
