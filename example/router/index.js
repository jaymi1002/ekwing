import Vue from 'vue'
import Router from 'vue-router'
import index from '../page/index'
import directives from '../page/directives'
Vue.use(Router)
//check
import checker from '../page/check/checker.vue';
import checkIcon from '../page/check/checkIcon.vue';
import checkLevels from '../page/check/checkLevels.vue';
import checkList from '../page/check/checkList.vue';

//form
import button from '../page/form/button.vue';
import calendar from '../page/form/calendar.vue';
import counter from '../page/form/counter.vue';
import datetime from '../page/form/datetime.vue';
import input from '../page/form/input.vue';
import range from '../page/form/range.vue';
import Switch from '../page/form/switch.vue';
import textarea from '../page/form/textarea.vue';
//popup
import actionsheet from '../page/popup/actionsheet'
import dialog from '../page/popup/dialog';
import activePop from '../page/popup/activePop';
import toast from '../page/popup/toast';
import modal from '../page/popup/modal'

//scroll
import scroll from '../page/scroll/scroll'
import scrollPage from '../page/scroll/scrollPage'
import scrollPop from '../page/scroll/scrollPop'

//UI
import accordion from '../page/UI/accordion';
import ajaxbar from '../page/UI/ajaxbar';
import badge from '../page/UI/badge';
import buttonWrap from '../page/UI/buttonWrap';
import card from '../page/UI/card';
import flex from '../page/UI/flex';
import grid from '../page/UI/grid';
import icon from '../page/UI/icon';
import img from '../page/UI/img';
import layout from '../page/UI/layout';
import list from '../page/UI/list';
import progress from '../page/UI/progress';
import separator from '../page/UI/separator';

export default new Router({
    routes: [{//check
        path: '/checkIcon',
        component: checkIcon,
    }, {
        path: '/checker',
        component: checker,
    }, {
        path: '/checkList',
        component: checkList,
    }, {
        path: '/checkLevels',
        component: checkLevels,
    }, {//form
        path: '/button',
        component: button
    }, {
        path: '/calendar',
        component: calendar
    }, {
        path: '/counter',
        component: counter
    }, {
        path: '/datetime',
        component: datetime
    }, {
        path: '/input',
        component: input
    }, {
        path: '/range',
        component: range
    }, {
        path: '/switch',
        component: Switch
    }, {
        path: '/textarea',
        component: textarea
    }, {//popup
        path: '/actionsheet',
        component: actionsheet
    }, {
        path: '/activePop',
        component: activePop
    }, {
        path: '/dialog',
        component: dialog
    }, {
        path: '/modal',
        component: modal
    }, {
        path: '/toast',
        component: toast
    }, {//scroll
        path: '/scroll',
        component: scroll
    }, {
        path: '/scrollPage',
        component: scrollPage
    }, {
        path: '/scrollPop',
        component: scrollPop
    }, {//UI
        path: '/accordion',
        component: accordion
    }, {
        path: '/ajaxbar',
        component: ajaxbar
    }, {
        path: '/badge',
        component: badge
    }, {
        path: '/buttonWrap',
        component: buttonWrap
    }, {
        path: '/card',
        component: card
    }, {
        path: '/flex',
        component: flex
    }, {
        path: '/grid',
        component: grid
    }, {
        path: '/icon',
        component: icon
    }, {
        path: '/img',
        component: img
    }, {
        path: '/layout',
        component: layout
    }, {
        path: '/list',
        component: list
    }, {
        path: '/progress',
        component: progress
    }, {
        path: '/separator',
        component: separator
    }, {
        path: '/',
        component: index
    },{
        path:'/directives',
        component:directives
    }],
});
