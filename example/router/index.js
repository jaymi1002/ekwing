import Vue from 'vue'
import Router from 'vue-router'
import index from '../page/index'
import accordion from '../page/accordion'
import actionsheet from '../page/actionsheet'
import badge from '../page/badge'
import button from '../page/button'
import buttonTab from '../page/buttonTab'
import calendar from '../page/calendar'
import check from '../page/check'
import datetime from '../page/datetime';
import grid from '../page/grid';
import img from '../page/img'
import layout from '../page/layout'
import list from '../page/list'
import modal from '../page/modal'
import progress from '../page/progress'
import ajaxbar from '../page/ajaxbar'
import flex from '../page/flex'
import sassDemo from '../page/sassDemo'
import icon from '../page/icon'
import scroll from '../page/scroll'
import scrollPage from '../page/scrollPage'
import textarea from '../page/textarea'
import input from '../page/input'
import Switch from '../page/switch';
import directives from '../page/directives'
import range from '../page/range'
import test from '../page/test'
import card from '../page/card'
import counter from '../page/counter'


import getwordtoll from '../page/fact/getwordtoll';
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            component: index
        }, {
            path: '/accordion',
            name: 'accordion',
            component: accordion
        }, {
            path: '/actionsheet',
            component: actionsheet
        }, {
            path: '/badge',
            component: badge
        }, {
            path: '/button', 
            component: button,
        }, {
            path: '/buttonTab', 
            component: buttonTab,
        }, {
            path: '/calendar', 
            component: calendar,
        }, {
            path:'/card',
            component:card,
        },{
            path: '/check', 
            component: check
        }, {
            path: '/datetime', 
            component: datetime
        }, {
            path: '/grid',
            component: grid
        },
        {
            path: '/icon', 
            name: 'icon',
            component: icon
        }, {
            path: '/img',
            component: img
        },
        {
            path: '/layout',
            name: 'layout',
            component: layout
        },
        {
            path: '/ajaxbar',
            component: ajaxbar
        },
        {
            path: '/modal',
            component: modal
        }, {
            path: '/list',
            component: list,
            // props: (route) => ({ id: route.query.id }),
            props: {default:true} ,
            children: [{
                path: 'icon',
                component: button
            }]
        },{
            path:'/progress',
            component:progress,
        },
        {
            path: '/range',
            name: 'range',
            component: range
        },{
            path: '/scroll',
            component: scroll
        },{
            path: '/scroll-page',
            component: scrollPage
        },
        {
            path:'/textarea',
            component:textarea
        },
        {
            path: '/input',
            component: input
        },{
            path:'/switch',
            component: Switch
        },{
            path: '/directives',
            component: directives
        },{
            path: '/test',
            component: test
        },{
            path: '/fact/getwordtoll',
            component:getwordtoll
        },
        {
            path: '/counter',
            component: counter
        }
    ],
});
