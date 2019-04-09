/*
 * @Author: lifangfang
 * @Date:   2019-01-18 14:35:25
 * @Last Modified by:   lifangfang
 * @Last Modified time: 2019-04-09 14:27:17
 */
import toastVue from './toast';
import alertVue from './alert';
import confirmVue from './confirm';
import namespace from '../../../helpers/utils/namespace';
import Vue from 'vue';

function getInstance(type) {
    switch (type) {
        case 'toast':
            return namespace.get('toastInstance') ||
                namespace.set('toastInstance',
                    new(Vue.extend(toastVue))({
                        el: document.createElement('div')
                    }));
        case 'alert':
            return namespace.get('alertInstance') ||
                namespace.set('alertInstance',
                    new(Vue.extend(alertVue))({
                        el: document.createElement('div')
                    }));
        case 'confirm':
            return namespace.get('confirmInstance') ||
                namespace.set('confirmInstance',
                    new(Vue.extend(confirmVue))({
                        el: document.createElement('div')
                    }));
    }
}

let instance = {
    toast: null,
    alert: null,
    confirm: null
};

function toast(config) {
    instance.toast.visibility = true;
    if (config.icon) {
        instance.toast.icon = config.icon;
    }
    if (config.duration) {
        instance.toast.duration = config.duration;
    }
    if (config.ended && typeof config.ended === typeof(() => {})) {
        instance.toast.$on('ended', config.ended);
    }
    if (config.started && typeof config.started === typeof(() => {})) {
        instance.toast.$on('started', config.started);
    }

    instance.toast.$nextTick(() => {
        if (config.content) {
            instance.toast.$refs.content.innerHTML = config.content;
        }
    });
}

function alert(config) {
    instance.alert.show();
    instance.alert.image = config.image;
    instance.alert.$nextTick(() => {
        if (config.content) {
            instance.alert.$refs.content.innerHTML = config.content;
        }
    });
    instance.alert.btnTxt = '取消';
}

function confirm(config) {
    instance.confirm.show();
    instance.confirm.image = config.image;
    instance.confirm.$nextTick(() => {
        if (config.content) {
            instance.confirm.$refs.content.innerHTML = config.content;
        }
    });
}

function MessageBox(config) {
    let { type } = config;
    instance[type] = getInstance(type);
    switch (type) {
        case 'toast':
            toast(config);
            break;
        case 'alert':
            alert(config);
            break;
        case 'confirm':
            confirm(config);
            break;
    }
    instance[type].$mount();
    document.body.appendChild(instance[type].$el);
}
MessageBox.toast = function(config) {
    MessageBox(Object.assign({ type: 'toast' }, config));
};
MessageBox.alert = function(config) {
    MessageBox(Object.assign({ type: 'alert' }, config));
};
MessageBox.confirm = function(config) {
    MessageBox(Object.assign({ type: 'confirm' }, config));
};
export default MessageBox;
