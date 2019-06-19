/*
* @Author: lifangfang
* @Date:   2019-02-22 11:22:34
* @Last Modified by:   lifangfang
* @Last Modified time: 2019-04-04 16:39:50
*/
export default {
    props: {
        'alignItems': {
            type: String,
            default: 'center',
            validator(value) {
                return ['start', 'end', 'center', 'baseline', 'stretch'].indexOf(value) !== -1;
            }
        },
        'justifyContent': {
            type: String,
            default: 'start',
            validator(value) {
                return ['start', 'end', 'center', 'between', 'around'].indexOf(value) !== -1;
            }
        },
        'flexDirection': {
            type: String,
            default: 'row',
            validator(value) {
                return ['row', 'row-reverse', 'column', 'column-reverse'].indexOf(value) !== -1;
            }
        }
    },
    computed: {
        flexClasses() {
            return [`items-${this.alignItems}`, `justify-${this.justifyContent}`, this.flexDirection.replace(/-/, ' ')];
        },
    }
}
