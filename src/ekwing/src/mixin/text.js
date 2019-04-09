/*
 * @Author: lifangfang
 * @Date:   2019-02-22 11:59:11
 * @Last Modified by:   lifangfang
 * @Last Modified time: 2019-03-25 17:42:14
 */
export default {
    props: {
        text: String,
        bold: Boolean,
        italic: Boolean,
        underline: Boolean,
        through: Boolean,
        display: {
            type: String,
            default: 'block',
            validator(value) {
                return ['block', 'inline', 'inline-block'].indexOf(value) !== -1;
            }
        },
        cursor: {
            type: String,
            default: 'default',
            validator(value) {
                return ['default', 'pointer', 'text'].indexOf(value) !== -1;
            }
        },
        color: {
            type: String,
            default: 'g6'
        },
        size: {
            type: Number,
            default: 14
        },
        lh:{
        	type: Number,
        	default: 1
        },
        family:{
        	type:String,
        	validator(value){
        		return ['fa','fw','fs','ft'].indexOf(value) !== -1;
        	}
        }
    },
    computed:{
    	textStyles(){
    		let styles = {
    			cursor:this.cursor,
                display: this.display,
    			'line-height':this.lh
    		};
    		if(this.bold){
    			styles['font-weight'] = 500;
    		}
    		if(this.italic){
    			styles['font-style'] = 'italic';
    		}
    		if(this.through){
    			styles['text-decoration'] = 'line-through';
    		}
    		if(this.underline){
    			styles['text-decoration'] = 'underline';
    		}
    		return styles;
    	},
    	textClasses(){
    		let classes = [`text-${this.color}`,`font${this.size}`];
    		if(this.family){
    			classes.push(this.family);
    		}
    		return classes;
    	}
    }
}
