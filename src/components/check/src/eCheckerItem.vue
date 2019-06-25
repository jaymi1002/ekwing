<template>
    <div class="e-checker-item" :class="itemClasses" @click="select">
        <slot></slot>
    </div>
</template>
<script type="text/javascript">
import {isEqual,contains,indexOf} from '../../../helpers/object-comm.js'
export default {
    name: 'e-checker-item',
    props: {
        value: {
            type: [String, Number, Object],
            required: true,
        },
    },
    computed: {
        active() {
            if (this.isSimpleType) {
                if (this.$parent.type === 'radio') {
                    return this.$parent.currentValue === this.value;
                } else if (this.$parent.currentValue && this.$parent.currentValue.length > 0) {
                    return this.$parent.currentValue.indexOf(this.value) > -1;
                } else {
                    return false;
                }
            } else {
                if (this.$parent.type === 'radio') {
                    return isEqual(this.$parent.currentValue, this.value);
                } else if (this.$parent.currentValue && this.$parent.currentValue.length > 0) {
                    return contains(this.$parent.currentValue, this.value);
                }
            }
        },
        itemClasses() {
            let classes = [];
            if (this.active) {
                classes.push(this.$parent.selectedItemClass);
                classes.push('e-checker-item-selected');
            } else {
                classes.push(this.$parent.defaultItemClass);
                classes.push('e-checker-item-default');
            }
            if (this.$parent.disabled) {
                classes.push(this.$parent.disabledItemClass);
                classes.push('e-checker-item-disabled');
            }
            return classes;
        },
        isSimpleType() {
            if ((typeof this.value).toUpperCase() === 'NUMBER' || (typeof this.value).toUpperCase() === 'STRING') {
                return true;
            }
            return false;
        }
    },
    methods: {
        select() {
            if (this.$parent.type === 'radio') {
                this.selectRadio();
            } else {
                this.selectCheckBox();
            }
        },
        selectRadio() {
            this.$parent.currentValue = this.value;
        },
        overflow(){
        	if(this.$parent.tip){
        		this.$toast({
        			content:`最多选择${this.$parent.max}项`
        		});
        	}
        },
        downflow(){
            if(this.$parent.tip){
                this.$toast({
                    content:`最少选择${this.$parent.min}项`
                });
            }
        },
        selectCheckBox() {

            if (!this.$parent.currentValue || this.$parent.currentValue === null) {
                this.$parent.currentValue = []
            }
            let index = indexOf(this.$parent.currentValue, this.value);
            if(this.$parent.currentValue.length === this.$parent.max && index < 0){
            	this.overflow();
            	return false;
            }
            if(this.$parent.currentValue.length === this.$parent.min && index > -1){
                this.downflow();
                return false;
            }

            if (index > -1) {
                this.$parent.currentValue.splice(index, 1);
            } else {
                this.$parent.currentValue.push(this.value);
            }
        }
    }
}
</script>
