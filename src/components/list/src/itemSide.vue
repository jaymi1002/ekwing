<template>
    <div class="e-item-side" :class="sideClass" :style="sideStyle">
        <slot></slot>
    </div>
</template>
<script type="text/javascript">
import flexLayout from '../../../mixin/flexLayout.js';
import { isLastChild } from '../../../helpers/parent-children.js';
export default {
    name: 'e-item-side',
    mixins: [flexLayout],
    props: {
        width: {
            type: Number,
        },
        right: Boolean,
        justifyContent: {
            type: String,
            default: 'center',
            validator(value) {
                return ['start', 'end', 'center', 'between', 'around'].indexOf(value) !== -1;
            }
        }
    },
    data() {
        return {
            isLastChild: false,
        }
    },
    computed: {
        sideStyle() {
            return {
                width: (this.width ? this.width / 75 + 'rem' : 'auto'),
            }
        },
        sideClass() {
            let classes = this.flexClasses;
            if (this.isLastChild || this.right) {
                classes.push('e-item-side-right');
            }
            return classes;
        }
    },
    mounted() {
        this.isLastChild = isLastChild(this);
    }
}

</script>
