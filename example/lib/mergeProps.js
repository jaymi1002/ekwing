/*
 * @Author: lifangfang
 * @Date:   2019-06-25 14:47:04
 * @Last Modified by:   lifangfang
 * @Last Modified time: 2019-06-25 19:04:16
 */
export default function(instance) {
	let props = {};
	let tableData = [];
    if (instance.mixins && instance.mixins.length > 0) {
    	instance.mixins.forEach((el) => {
    		Object.assign(props, el.props);
    	});
    }
    if(instance.extends){
        Object.assign(props, instance.extends.props);
    }
    Object.assign(props,instance.props);
    for(let key in props){
    	let data = {
    		name:key,
    	},el = props[key];
    	if(typeof el === typeof function(){}){
    		data.type = el.name;
    	}else{
    		if(typeof el.type === typeof []){
    			let type = [];
    			el.type.forEach(el => {
    				type.push(el.name);
    			});
    			data.type = type.join(',');
    		}else{
    			data.type = el.type.name;
    		}
    		
    		data.required = el.required;
    		data.default = el.default;
    		if(el.validator){
    			data.validator = el.validator.toString().match(/return (.*);/)[1];
    		}
    	}
    	if(data.type === "Boolean" && !data.default){
    		data.default = false;
    	}
    	tableData.push(data);
    }
    return tableData;
}
