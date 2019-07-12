<template>
    <a v-if="!actionsheet.horizontal" href="javascript:;" class="actionsheet-item font16 text-g3" @click="choose(value)" :class="{disabled:disabled}">
        <slot>{{text}}</slot>
    </a>
    <e-grid-item v-else href="javascript:;" class="actionsheet-item text-g3" @click="choose(value)" :value="value" :class="{disabled:disabled}">
        <slot>
            <div>
                <img class="icon-img" :src="img" />
            </div>
            <p class="icon-label font12">{{text}}</p>
        </slot>
    </e-grid-item>
</template>
<script type="text/javascript">
export default {
    name: 'e-actionsheet-item',
    props: {
        value: Number,
        text: String,
        disabled: Boolean,
        img: String,
    },
    inject: ['actionsheet'],
    methods: {
        choose(index) {
            if(this.disabled){
                return false;
            }
            this.actionsheet.choose(index);
        }
    }
}

</script>
