/*
* @Author: lifangfang
* @Date:   2019-03-18 18:00:18
* @Last Modified by:   lifangfang
* @Last Modified time: 2019-06-25 19:02:04
*/
export default{
	props:{
		activeType: {
			type:String,
			required:true
		},
		defaultType: {
			type:String,
			required:true
		},
		activeColor: {
			type:String,
			default:'primary'
		},
		defaultColor: {
			type:String,
			default: 'primary'
		},
		iconSize: {
			type:Number,
			default:20
		}
	}
}