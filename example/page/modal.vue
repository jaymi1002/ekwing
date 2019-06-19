<template>
    <e-layout title="modal">
        <e-header slot="header" title="button"></e-header>
        <e-check-list type="radio" v-model="value" default-type="no-check" default-color="g6" active-type="check" active-color="blue" :icon-size="20">
            <e-check-item v-for="(el,index) in checkList" :value="index">
                {{el.text}}
            </e-check-item>
        </e-check-list>
        <p class="tc font18">
            <a href="javascript:;" @click="show">显示 <e-badge :number="1"></e-badge></a>
        </p>
        <e-modal ref="modal" :direction="checkList[value].value">
            <div class="demo-modal-1">
                <e-list touch-active border-type="incomplete">
                    <e-item>
                        <e-item-side>
                            <e-head-img class="my-head" border border-color="blue" src="https://cn.vuejs.org/images/logo.png"></e-head-img>
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
                            <e-head-img class="my-head" border border-color="blue" src="https://cn.vuejs.org/images/logo.png"></e-head-img>
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
                            <e-head-img class="my-head" border border-color="blue" src="https://cn.vuejs.org/images/logo.png"></e-head-img>
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
                            <e-head-img class="my-head" border border-color="blue" src="https://cn.vuejs.org/images/logo.png"></e-head-img>
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
        <e-active-pop ref="activePop" type="confirm" image="http://res.ekwing.com/images/student/background_wordmate.png" btn-theme="primary" @cancelHandle="cancelHandle" @confirmHandle="confirmHandle">
            <template slot="title">我的</template>
            <template slot="content">
                <ul class="tl">
                    <li>开启消息通知，更多资源上新早知道用于随堂作业，课后巩固</li>
                    <li>开启消息通知，更多资源上新早知道用于随堂作业，课后巩固</li>
                    <li>开启消息通知，更多资源上新早知道用于随堂作业，课后巩固</li>
                    <li>开启消息通知，更多资源上新早知道用于随堂作业，课后巩固</li>
                </ul>
            </template>
        </e-active-pop>
        <e-button theme="primary-2" class="mt20" @click="alert">
            <span class="font18">alert</span>
        </e-button>
        <e-button theme="primary" class="mt20" @click="confirm">
            <span class="font18">confirm</span>
        </e-button>
        <e-button theme="demo-btn" class="mt20" @click="alertSimple">
            <span class="font18">alert simple</span>
        </e-button>
        <e-button theme="primary-2" class="mt20" @click="confirmSimple">
            <span class="font18">confirm simple</span>
        </e-button>
        <e-button theme="primary" class="mt20" @click="activePop">
            <span class="font18">active pop</span>
        </e-button>
        <e-button theme="demo-btn" class="mt20" @click="toast">
            <span class="font18">toast</span>
        </e-button>
    </e-layout>
</template>
<script type="text/javascript">
export default {
    name: 'modal',
    created(){
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
            },{
                value: 'middle',
                text: 'direction middle'
            }],
            value:0,
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
            }]
        }
    },
    methods: {
        show() {
            this.$refs.modal.show();
        },
        alert(){
            this.$alert({
                title:'即将挑战',
                content:'开启消息通知，更多资源上新早知道用于随堂作业，课后巩固',
                btnTheme:'primary',
                image:'http://res.ekwing.com/images/student/bell.png',
                confirmHandle(){
                    alert('confirm');
                },
                cancelHandle(){
                    alert('cancel');
                },
                enterClass:'zoomIn',
                leaveClass:'zoomOut',
                maskClickDisabled:true,
            });
        },
        confirm(){
            this.$confirm({
                title:'即将挑战',
                content:'开启消息通知，更多资源上新早知道用于随堂作业，课后巩固',
                btnTheme:'primary',
                image:'http://res.ekwing.com/images/student/bell.png',
                confirmHandle(){
                    alert('confirm');
                },
                cancelHandle(){
                    alert('cancel');
                },
            });
        },
        alertSimple(){
            this.$alertSimple({
                title:'即将挑战',
                content:'开启消息通知，更多资源上新早知道用于随堂作业，课后巩固',
                btnColor:'blue',
                confirmHandle(){
                    alert('confirm');
                },
                maskClickDisabled:true,
            });
        },
        confirmSimple(){
            this.$confirmSimple({
                content:'开启消息通知，更多资源上新早知道用于随堂作业，课后巩固',
                btnColor:'blue',
                confirmHandle(){
                    alert('confirm');
                },
                cancelHandle(){
                    alert('cancel');
                }
            });
        },
        activePop(){
            this.$refs.activePop.show();
        },
        cancelHandle(){
            alert('cancel');
        },
        confirmHandle(){
            alert('confirm');
        },
        toast(){
            let toastInstance = this.$toast({
                content:'请求成功',
                type:'error'
            });
            setTimeout(() => {
                // toastInstance.hide();
            },2000);
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
.demo-btn-default{
    background-color: skyblue;
    color:#fff;
}

</style>
