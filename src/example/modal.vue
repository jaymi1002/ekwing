<template>
    <e-layout title="modal">
        <e-check-list type="radio" :list="checkList" label-right v-model="value">
            <div class="flex justify-center items-center" style="line-height:50px" slot-scope="{item,index}">
                <span>{{item.text}}</span>
            </div>
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
    </e-layout>
</template>
<script type="text/javascript">
export default {
    name: 'modal',
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
            // this.$refs.myCalendar.show();
            // this.$refs.myDatetime.show();
            // this.$confirm({
            //     content: '11',
            // });
            // this.toggle = true;
        }
    }
}

</script>
<style lang="scss">
.demo-modal-1 {
    width: 100%;
    height: 5.333rem;
    background: #fff;
    overflow: auto;
}

.my-head {
    width: 1.333rem;
    height: 1.333rem;
}

</style>
