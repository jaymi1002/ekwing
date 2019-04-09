<template>
    <div class="e-layout overflow-hidden" :class="layoutClasses">
        <e-header v-if="head" :title="title" :bg-color="headColor" :shadow="shadow" @goback="windowGoback">
            <template slot="leftSlot">
                <slot name="headerLeftSlot"></slot>
            </template>
            <template slot="titleSlot">
                <slot name="headerTitleSlot"></slot>
            </template>
            <template slot="rightSlot">
                <slot name="headerRightSlot"></slot>
            </template>
        </e-header>
        <div class="e-layout-content" :class="contentClasses">
            <slot></slot>
        </div>
    </div>
</template>
<script type="text/javascript">
import eHeader from './eHeader.vue';
export default {
    name: 'e-layout',
    components: {
        eHeader
    },
    props: {
        head: {
            type: Boolean,
            default: true,
        },
        headColor: {
            type: String,
        },
        title: {
            type: String,
        },
        shadow: {
            type: Boolean,
            default: true,
        },
        overHidden: {
            type: Boolean,
        },
        bgColor: {
            type: String
        }
    },
    computed: {
        layoutClasses() {
            let classes = [];
            if (this.bgColor) {
                classes.push(`bg-${this.bgColor}`);
            }
            return classes;
        },
        contentClasses() {
            let classes = [];
            classes.push(this.overHidden ? 'overflow-hidden' : 'overflow-auto');
            classes.push(this.head ? 'content-with-header' : 'content-no-header');
            return classes;
        }
    },
    methods:{
        windowGoback(){
            window.history.back();
        }
    }
}

</script>
<style lang="scss">
.e-layout {
    height: 100%;
    width: 100%;
    .e-layout-content {
        box-sizing: border-box;
        width: 100%;
        -webkit-overflow-scrolling: touch;
    }
    .content-with-header {
        height: calc(100% - 1.2rem);
    }
    .content-no-header {
        height: 100%;
    }
}

</style>
