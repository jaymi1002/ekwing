<template>
    <div class="header" :class="{horizontal:actionsheet.horizontal}" v-if="title || explain">
        <p class="title font18" :class="titleClass" v-if="title">
            <slot name="title">{{title}}</slot>
        </p>
        <p class="explain font14" :class="explainClass" v-if="explain">
        	<slot name="explain">{{explain}}</slot>
        </p>
    </div>
</template>
<script type="text/javascript">
export default {
    name: 'e-actionsheet-header',
    props: {
        title: String,
        explain: String,
        titleColor: String,
        explainColor: String,
    },
    inject: ['actionsheet'],
    computed: {
        titleClass() {
            if (this.titleColor) {
                return `text-${this.titleColor}`;
            }
            return 'text-g3';
        },
        explainClass() {
            if (this.explainColor) {
                return `text-${this.explainColor}`;
            }
            return 'text-g9';
        }
    }
}

</script>
