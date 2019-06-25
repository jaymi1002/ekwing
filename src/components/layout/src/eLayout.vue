<template>
    <div class="e-layout overflow-hidden">
        <slot name="header"></slot>
        <div ref="layoutContent" class="e-layout-content" :class="contentClasses">
            <slot></slot>
        </div>
    </div>
</template>
<script type="text/javascript">
import vueBus from '../../../helpers/vueBus';
export default {
    name: 'e-layout',
    props: {
        overHidden: {
            type: Boolean,
        }
    },
    data() {
        return {
            headerHeight: 0,
        }
    },
    created(){
        vueBus.$on('headerChange',(height) => {
            if(this.$slots.header){
                this.headerHeight = height;
            }
        });
    },
    computed: {
        contentClasses() {
            let classes = [];
            classes.push(this.overHidden ? 'overflow-hidden' : 'overflow-auto');
            return classes;
        }
    },
    methods: {},
    watch: {
        headerHeight(newVal) {
            this.$refs.layoutContent.style.height = `calc(100% - ${newVal}px)`;
        }
    }
}

</script>
<style lang="scss">
.e-layout {
    height: 100%;
    width: 100%;
    .e-layout-content {
        height: 100%;
        box-sizing: border-box;
        width: 100%;
        -webkit-overflow-scrolling: touch;
        margin-top: -0.013rem;
    }
}

</style>
