import Vue from 'vue'
import Router from 'vue-router'
import index from '@/example/index'
import accordion from '@/example/accordion'
import actionsheet from '@/example/actionsheet'
import badge from '@/example/badge'
import button from '@/example/button'
import buttonTab from '@/example/buttonTab'
import calendar from '@/example/calendar'
import check from '@/example/check'
import datetime from '@/example/datetime';
import grid from '@/example/grid';
import img from '@/example/img'
import layout from '@/example/layout'
import list from '@/example/list'
import modal from '@/example/modal'
import progress from '@/example/progress'
import ajaxbar from '@/example/ajaxbar'
import flex from '@/example/flex'
import sassDemo from '@/example/sassDemo'
import icon from '@/example/icon'
import scroll from '@/example/scroll'
import scrollPage from '@/example/scrollPage'
import textarea from '@/example/textarea'
import input from '@/example/input'
import Switch from '@/example/switch';
import directives from '@/example/directives'
import range from '@/example/range'

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
            path: '/button', //button
            component: button,
        }, {
            path: '/buttonTab', //button
            component: buttonTab,
        }, {
            path: '/calendar', //button
            component: calendar,
        }, {
            path: '/check', //check
            component: check
        }, {
            path: '/datetime', //check
            component: datetime
        }, {
            path: '/grid', //check
            component: grid
        },
        {
            path: '/icon', //icon
            name: 'icon',
            component: icon
        }, {
            path: '/img',
            component: img
        },
        {
            path: '/layout', //layout
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
            // props: {default:true} ,
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
        }
    ],
});
