/*
 * @Author: lifangfang
 * @Date:   2018-12-04 13:48:22
 * @Last Modified by:   lifangfang
 * @Last Modified time: 2019-03-21 18:12:35
 */
import Vue from 'vue';
import * as components from './components.js';
import * as directives from './directives.js';
import './style/base.scss';
export * from './components';
// export * from './libs';

const ekwingCom = {
    ...components
};

let MessageBox = components.MessageBox;
let ajaxBar = components.ajaxBar;
ekwingCom.install = function(Vue, options = {}) {
    for (let key in components) {
        if (components[key].name) {
            Vue.component(components[key].name, components[key]);
        }
    }
    Vue.prototype.$toast = MessageBox.toast;
    Vue.prototype.$alert = MessageBox.alert;
    Vue.prototype.$confirm = MessageBox.confirm;
    Vue.prototype.$ajaxBar = ajaxBar; 
    for (let key in directives) {
    	if(directives[key].name){
    		Vue.directive(directives[key].name,directives[key]);
    	}
    }
};
export default ekwingCom;
