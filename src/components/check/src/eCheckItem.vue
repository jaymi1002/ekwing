<template>
    <div class="e-check-item" :class="itemClasses">
        <e-item @click="select" :touch-active="$parent.touchActive" :active-class="$parent.activeClass">
            <e-item-side v-if="$parent.reverse">
                <e-icon v-if="iconType" :type="iconType" :disabled="$parent.disabled" :color="iconColor" :size="$parent.iconSize"></e-icon>
            </e-item-side>
            <e-item-main class="font14">
                <slot></slot>
            </e-item-main>
            <e-item-side v-if="!$parent.reverse">
                <e-icon v-if="iconType" :type="iconType" :disabled="$parent.disabled" :color="iconColor" :size="$parent.iconSize"></e-icon>
            </e-item-side>
        </e-item>
    </div>
</template>
<script type="text/javascript">
import eCheckerItem from './eCheckerItem';
export default {
    name: 'e-check-item',
    extends: eCheckerItem,
    computed: {
        iconColor() {
            return this.active ? this.$parent.activeColor : this.$parent.defaultColor;
        },
        iconType() {
            return this.active ? this.$parent.activeType : this.$parent.defaultType;
        },
    },
    methods: {

    }
}

</script>
