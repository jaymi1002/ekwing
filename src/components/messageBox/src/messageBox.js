/*
 * @Author: lifangfang
 * @Date:   2019-01-18 14:35:25
 * @Last Modified by:   lifangfang
 * @Last Modified time: 2019-05-28 11:42:56
 */
import toastVue from './toast';
import dialogSimpleVue from './dialogSimple';
import dialogVue from './dialog';
import namespace from '../../../helpers/utils/namespace';
import Vue from 'vue';

function getInstance(comp) {
    switch (comp) {
        case 'toast':
            return new(Vue.extend(toastVue))({
                el: document.createElement('div')
            });
        case 'dialog':
            return new (Vue.extend(dialogVue))({
                el: document.createElement('div')
            });
        case 'dialogSimple':
            return new (Vue.extend(dialogSimpleVue))({
                el: document.createElement('div')
            });
    }
}

let instance = {
    dialog: null,
    dialogSimple: null,
    toast: null
};

function toast(config) {
    instance.toast.show();
    Object.assign(instance.toast, config);
    if (config.closeHandle && typeof config.closeHandle === typeof (() => { })) {
        instance.toast.$once('closeHandle', config.closeHandle);
    }
}


function dialog(config) {
    instance.dialog.show();
    Object.assign(instance.dialog, config);
    if (config.cancelHandle && typeof config.cancelHandle === typeof (() => { })) {
        instance.dialog.$once('cancelHandle', config.cancelHandle);
    }
    if (config.confirmHandle && typeof config.confirmHandle === typeof (() => {})) {
        instance.dialog.$once('confirmHandle', config.confirmHandle);
    }
}

function dialogSimple(config) {
    instance.dialogSimple.show();
    Object.assign(instance.dialogSimple, config);
    if (config.cancelHandle && typeof config.cancelHandle === typeof (() => { })) {
        instance.dialogSimple.$once('cancelHandle', config.cancelHandle);
    }
    if (config.confirmHandle && typeof config.confirmHandle === typeof (() => { })) {
        instance.dialogSimple.$once('confirmHandle', config.confirmHandle);
    }
}

function MessageBox(comp,config) {
    instance[comp] = getInstance(comp);
    switch (comp) {
        case 'toast':
            toast(config);
            break;
        case 'dialog':
            dialog(config);
            break;
        case 'dialogSimple':
            dialogSimple(config);
    }
    instance[comp].$mount();
    return instance[comp];
}


MessageBox.toast = function(config) {
    return MessageBox('toast',config);
};
MessageBox.alert = function(config) {
    config.type = "alert";
    return MessageBox('dialog', config);
};
MessageBox.alertSimple = function(config) {
    config.type = "alert";
    return MessageBox('dialogSimple', config);
};
MessageBox.confirm = function(config) {
    config.type = 'confirm';
    return MessageBox('dialog', config);
};
MessageBox.confirmSimple = function(config) {
    config.type = 'confirm';
    return MessageBox('dialogSimple', config);
};
export default MessageBox;
