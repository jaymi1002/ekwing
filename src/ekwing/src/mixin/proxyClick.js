/*
 * @Author: lifangfang
 * @Date:   2019-02-21 14:51:27
 * @Last Modified by:   lifangfang
 * @Last Modified time: 2019-04-03 18:09:23
 */
export default {
    props: {
        disabled: {
            type: Boolean,
            default: false,
        }
    },
    methods: {
        proxyClick() {
            if (this.disabled) {
            	this.$emit('disabledHandle');
                return false;
            }

            this.$emit('click');
        }
    }
}
