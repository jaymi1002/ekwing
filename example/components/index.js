/*
* @Author: lifangfang
* @Date:   2019-06-04 11:31:44
* @Last Modified by:   lifangfang
* @Last Modified time: 2019-06-25 15:26:32
*/
import Vue from 'vue';
import stuHeader from './comm/stuHeader.vue';
import infoTable from './comm/infoTable.vue';
import paramTable from './comm/paramTable.vue';
import areaAccordion from './accordion/areaAccordion';

Vue.component(stuHeader.name, stuHeader);
Vue.component(areaAccordion.name, areaAccordion);
Vue.component(infoTable.name, infoTable);
Vue.component(paramTable.name, paramTable);
