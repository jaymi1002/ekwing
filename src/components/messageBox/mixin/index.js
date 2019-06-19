/*
 * @Author: lifangfang
 * @Date:   2019-05-14 16:18:29
 * @Last Modified by:   lifangfang
 * @Last Modified time: 2019-05-20 16:29:44
 */
export default {
    props: {
        title: String,
        content: String,
        maskClickDisabled: Boolean,
        enterClass: String,
        leaveClass: String,
        type:{
            type:String,
            default:'alert',
            validator(value){
                return ['alert', 'confirm'].indexOf(value) > -1;
            }
        }
    },
    computed:{
       
    },
    methods:{
		show() {
			this.$refs.modal.show();
		},
        cancel() {
            this.$refs.modal.hide();
            this.$emit('cancelHandle');
        },
        confirm() {
            this.$refs.modal.hide();
            this.$emit('confirmHandle');
        }
    }
}
