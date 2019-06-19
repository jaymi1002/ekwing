<template>
    <div class="e-header flex flex-center" :class="classes">
        <div class="pct15 left">
            <slot name="left">
            </slot>
        </div>
        <p class="pct70 title font18 text-g3">
            <slot name="title">
                {{title}}
            </slot>
        </p>
        <div class="pct15 right">
            <slot name="right"></slot>
        </div>
    </div>
</template>
<script type="text/javascript">
import { height }  from '../../../helpers/dom';
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
        heightType: {
            type: String,
            default: 'single',
            validator(value) {
                return ['double', 'single'].indexOf(value) > -1;
            }
        }
    },
    mounted() {
        this.$nextTick(() => {
            vueBus.$emit('headerChange',height(this.$el));
        });
    },
    updated() {
        vueBus.$emit('headerChange',height(this.$el));
    },
    computed: {
        classes() {
            let classes = [];
            if (this.shadow) {
                classes.push('shadow');
            }
            classes.push(`${this.heightType}`);
            return classes;
        }
    },
    methods: {
    }
}

</script>
<style lang="scss">
.e-header {
    overflow: hidden;
    >* {
        height: 100%;
    }
    &.shadow {
        box-shadow: 0.027rem 0.027rem 0.067rem #eee;
    }
    &.single {
        height: 1.2rem;
    }
    &.double {
        height: 1.5rem;
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
