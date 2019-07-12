/*
* @Author: lifangfang
* @Date:   2019-03-18 18:00:18
* @Last Modified by:   lifangfang
* @Last Modified time: 2019-07-03 18:24:24
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
		activeColor: String,
		defaultColor:String,
		iconSize: {
			type:Number,
			default:20
		}
	}
}