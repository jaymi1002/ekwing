/*
 * @Author: lifangfang
 * @Date:   2019-03-21 17:55:55
 * @Last Modified by:   lifangfang
 * @Last Modified time: 2019-05-23 17:19:19
 */
import eAjaxBar from './eAjaxBar';
import namespace from '../../../helpers/utils/namespace';
import Vue from 'vue';

function getInstance() {
    let name = 'ajaxBarInstance';
    if (!namespace.get(name)) {
        namespace.set(name,
            new(Vue.extend(eAjaxBar))({
                el: document.createElement('div')
            }));
    }
    return namespace.get(name);
};


function ajaxBar({ event, color, position, reverse }) {
    let instance = getInstance();
    if (event === 'stop') {
        instance.stop();
        return false;
    }

    if (event !== 'start') {
        throw new Error('event must be stop or start');
    }

    if (color) {
        instance.color = color;
    }
    if (position) {
        instance.position = position;
    }
    instance.$mount();
    instance.progress = 0;
    instance.start();
}

export default ajaxBar;
