<template>
    <e-layout title="modal">
        <stu-header slot="header" title="modal"></stu-header>
        <e-check-list type="radio" v-model="value" default-type="no-check" active-type="check" :icon-size="20">
            <template v-for="(el,index) in checkList">
                <e-check-item :value="index">
                    {{el.value}}
                </e-check-item>
                <e-separator></e-separator>
            </template>
        </e-check-list>
        <p class="tc font18 mt20">
            <e-button :width="250" :height="76" theme="primary" inline @click="show">显示</e-button>
        </p>
        <e-modal ref="modal" :direction="checkList[value].value">
            <div class="demo-modal-1">
                <e-list touch-active border-type="incomplete">
                    <e-item>
                        <e-item-side>
                            <img class="my-head" border border-color="blue" src="https://cn.vuejs.org/images/logo.png" />
                        </e-item-side>
                        <e-item-main>
                            <div>
                                <p class="font18 g3">李方方</p>
                                <p class="font12 g9">励志学校</p>
                            </div>
                        </e-item-main>
                        <e-item-side align-items="start">
                            <e-icon type="arrow-right" color="g9" class="font20"></e-icon>
                        </e-item-side>
                    </e-item>
                    <e-item>
                        <e-item-side>
                            <img class="my-head" border border-color="blue" src="https://cn.vuejs.org/images/logo.png" />
                        </e-item-side>
                        <e-item-main>
                            <div>
                                <p class="font18 g3">李方方</p>
                                <p class="font12 g9">励志学校</p>
                            </div>
                        </e-item-main>
                        <e-item-side align-items="start">
                            <e-icon type="arrow-right" color="g9" class="font20"></e-icon>
                        </e-item-side>
                    </e-item>
                    <e-item>
                        <e-item-side>
                            <img class="my-head" border border-color="blue" src="https://cn.vuejs.org/images/logo.png" />
                        </e-item-side>
                        <e-item-main>
                            <div>
                                <p class="font18 g3">李方方</p>
                                <p class="font12 g9">励志学校</p>
                            </div>
                        </e-item-main>
                        <e-item-side align-items="start">
                            <e-icon type="arrow-right" color="g9" class="font20"></e-icon>
                        </e-item-side>
                    </e-item>
                    <e-item>
                        <e-item-side>
                            <img class="my-head" border border-color="blue" src="https://cn.vuejs.org/images/logo.png" />
                        </e-item-side>
                        <e-item-main>
                            <div>
                                <p class="font18 g3">李方方</p>
                                <p class="font12 g9">励志学校</p>
                            </div>
                        </e-item-main>
                        <e-item-side align-items="start">
                            <e-icon type="arrow-right" color="g9" class="font20"></e-icon>
                        </e-item-side>
                    </e-item>
                </e-list>
            </div>
            <div slot="content">
                1234567
            </div>
        </e-modal>
        <div class="font14 pt30">
            <param-table :list="modalInfo">
                <template slot="title">组件html tag：e-toast</template>
                <template slot="tip">enterClass leaveClass 取值范围是animate库的类名</template>
            </param-table>
        </div>
        <div class="font14">
            <param-table :list="modalExt">
                <template slot="title">额外</template>
            </param-table>
        </div>
    </e-layout>
</template>
<script type="text/javascript">
import {eModal} from '@/components';
import mergeProps from '../../lib/mergeProps';
export default {
    name: 'modal',
    created() {
        console.log(this);
    },
    data() {
        return {
            checkList: [{
                value: 'top',
                text: 'direction top'
            }, {
                value: 'left',
                text: 'direction left'
            }, {
                value: 'right',
                text: 'direction right'
            }, {
                value: 'bottom',
                text: 'direction bottom'
            }, {
                value: 'middle',
                text: 'direction middle'
            }],
            value: 0,
            'toggle': false,
            'list': [{
                title: '北京烤鸭',
                'img': 'https://cn.vuejs.org/images/logo.png',
                disabled: false,
                color: 'blue',
            }, {
                title: '北京烤鸭',
                'img': 'https://cn.vuejs.org/images/logo.png',
                disabled: true,
                color: 'blue',
            }, {
                title: '北京烤鸭',
                'img': 'https://cn.vuejs.org/images/logo.png',
                disabled: true,
                color: 'blue',
            }, {
                title: '北京烤鸭',
                'img': 'https://cn.vuejs.org/images/logo.png',
                disabled: true,
                color: 'blue',
            }],
            modalInfo:mergeProps(eModal),
            modalExt:[{
                name:'default',
                type:'slot'
            },{
                name:'maskClickHandle',
                type:'v-on/@'
            }]
        }
    },
    methods: {
        show() {
            this.$refs.modal.show();
        }
    }
}

</script>
<style lang="scss">
.demo-modal-1 {
    width: 100%;
    height: 50vh;
    background: #fff;
    overflow: auto;
}

.my-head {
    width: 1.333rem;
    height: 1.333rem;
}

.demo-btn-default {
    background-color: skyblue;
    color: #fff;
}

</style>
