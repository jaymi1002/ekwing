/*
 * @Author: lifangfang
 * @Date:   2019-02-21 14:51:27
 * @Last Modified by:   lifangfang
 * @Last Modified time: 2019-06-04 16:15:18
 */
export default {
    props: {
        disabled: {
            type: Boolean,
            default: false,
        }
    },
    methods: {
        proxyClick(e) {
            if (this.disabled) {
            	this.$emit('disabledHandle');
                return false;
            }
            this.$emit('click',e);
        }
    }
}
