/*
 * @Author: lifangfang
 * @Date:   2018-12-04 13:48:22
 * @Last Modified by:   lifangfang
 * @Last Modified time: 2019-06-19 15:15:41
 */
import Vue from 'vue';
import * as components from './components.js';
import * as directives from './directives.js';
import './style/base.scss';
export * from './components';

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
    Vue.prototype.$alertSimple = MessageBox.alertSimple;
    Vue.prototype.$confirm = MessageBox.confirm;
    Vue.prototype.$confirmSimple = MessageBox.confirmSimple;
    Vue.prototype.$ajaxBar = ajaxBar; 
    for (let key in directives) {
    	if(directives[key].name){
    		Vue.directive(directives[key].name,directives[key]);
    	}
    }
};
export default ekwingCom;
