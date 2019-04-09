<template>
    <div class="e-switch" :class="switchClass" @click="trigger">
    </div>
</template>
<script type="text/javascript">
export default {
    name: 'e-switch',
    model: {
        prop: 'value',
        event: 'change',
    },
    props: {
        value: Boolean,
        color: {
            type: String,
            default: 'blue',
        }
    },
    computed: {
        switchClass() {
            let classes = [];
            classes.push(`e-switch-${this.color}`);
            if(this.active){
            	classes.push('active');
            }
            return classes;
        }
    },
    data() {
        return {
            active: this.value
        }
    },
    methods: {
        trigger() {
            this.active = !this.active;
            this.$emit('change', this.active);
        }
    },
    watch: {
        value(newVal) {
            this.active = newVal;
        }
    }
}

</script>
<style lang="scss">
	@import '../style/eSwitch.scss';
</style>
