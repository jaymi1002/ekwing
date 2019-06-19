<template>
    <e-layout>
        <stu-header slot="header">
            <p class="font20">check</p>
        </stu-header>
        <e-check-icon default-type="no-check" default-color="g6" active-type="check" active-color="blue" :icon-size="20" v-model="select" text="请认真阅读以下协议"></e-check-icon>
        <e-separator></e-separator>
        <p class="example-table-title font16 text-g3">e-checker</p>
        <e-separator></e-separator>
        <div class="pt20">
            <e-checker v-model="selectData" class="flex row" type="radio" default-item-class="demo-default bd-g9" selected-item-class="demo-selected text-blue bd-blue" disabled-item-class="demo-disabled">
                    <div class="col-4 flex flex-center" v-for="el in freedomList">
                        <e-checker-item :value="el">
                            <span class="font14">{{el.text}}</span>
                        </e-checker-item>
                    </div>
            </e-checker>
        </div>
        <p class="mt20">{{selectData}}</p>

        <p class="example-table-title font16 text-g3">e-check-list</p>
        <e-separator></e-separator>
        <e-check-list title="选择班级" reverse class="mt20" :max="3" :min="1" ref="checkList" tip v-model="selectIndex" :disabled="false" default-type="no-check" default-color="g9" active-type="check" active-color="blue" :icon-size="20">
            <template v-for="(el,index) in checkList">
                <e-check-item :value="index">
                    {{el.text}}
                </e-check-item>
            </template>
        </e-check-list>
        <e-check-list title="选择班级" class="mt20" :max="3" :min="1" ref="checkList" tip v-model="selectIndex" :disabled="false" default-type="no-check" touch-active default-color="g9" active-type="check" active-color="blue" :icon-size="24">
            <template v-for="(el,index) in checkList">
                <e-check-item :value="index">
                    <span class="font16">{{el.text}}</span>
                </e-check-item>
            </template>
        </e-check-list>
        {{selectIndex}}
        <a href="javacript:;" @click="choose">choose</a>
        <e-separator></e-separator>
        <p class="example-table-title font16 text-g3">e-accordion && e-check-list 选择嵌套</p>
        <e-separator></e-separator>
        <e-accordion active-class="accordion-active" animate>
            <e-accordion-item v-for="(item,index) in studentList" :key="index">
                <template slot="title">
                    <p class="font16">
                        <e-icon :type="getIconType(item.select.length,item.list.length)" @click.stop="choose(index)" :color="getIconColor(item.select.length,item.list.length)" class="mr20" :size="20"></e-icon>{{item.title}}</p>
                </template>
                <template slot="content">
                    <e-check-list style="padding-left:0.267rem;" ref="checkStudent" tip v-model="item.select" :disabled="false" default-type="no-check" default-color="g9" active-type="check" active-color="green" :icon-size="20" no-border reverse>
                        <template v-for="(el,stuIndex) in item.list">
                            <e-check-item :value="stuIndex">
                                {{el.name}}
                            </e-check-item>
                        </template>
                    </e-check-list>
                </template>
            </e-accordion-item>
        </e-accordion>
    </e-layout>
</template>
<script type="text/javascript">
export default {
    name: 'check',
    data() {
        return {
            select: false,
            freedomList:[{
                text:'不设定',
            },{
                text:'总分的50%',
            },{
                text:'总分的60%',
            },{
                text:'总分的70%',
            },{
                text:'总分的80%',
            }],
            checkList: [{
                value: 1,
                text: '目标是通过尽可能简单的\nAPI 实现响应的数据绑定和组合的视图组件',
            }, {
                value: 2,
                text: '上海'
            }, {
                value: 2,
                text: '天津'
            }, {
                value: 2,
                text: '广州'
            }, {
                value: 2,
                text: '深圳'
            }, {
                value: 2,
                text: '成都'
            }, ],
            selectData: [{
                value: 1,
                text: '目标是通过尽可能简单的\nAPI 实现响应的数据绑定和组合的视图组件',
            }],
            selectIndex: [5],
            studentList: [{
                title: '李方方',
                list: [{
                    name: '梁居毅',
                }, {
                    name: '李方方',
                }, {
                    name: '何怡怡',
                }, {
                    name: '孙杨博',
                }, {
                    name: '王俊奇 ',
                }],
                select: [0]
            }, {
                title: '王亚腾',
                list: [{
                    name: '王亚腾',
                }, {
                    name: '李晨曦',
                }, {
                    name: '郑玉辉',
                }, {
                    name: '罗鸣',
                }],
                select: [1]
            }]
        }
    },
    methods: {
        choose(index) {
            let selectLength = this.studentList[index].select.length;
            let listLength = this.studentList[index].list.length;
            if(selectLength === listLength){
                this.$refs.checkStudent[index].selectNone();
            }else{
                this.$refs.checkStudent[index].selectAll();
            }
        },
        getIconType(selectLength,listLength) {
            if(selectLength === 0){
                return 'no-check';
            }

            if(selectLength === listLength){
                return 'check';
            }

            return 'check-plain';
        },
        getIconColor(selectLength,listLength) {
            if(selectLength === 0){
                return 'g9';
            }

            return 'green';
        },
        print(){

        }
    }
}

</script>
<style lang="scss">
.demo-item {
    border-width: 0.013rem;
    border-style: solid;
    padding: 0.267rem 0.267rem;
    border-radius: 0.067rem;
    width: 2.4rem;
    height: 0.4rem;
    margin-top: 0.267rem;
    text-align: center;
}

.demo-selected {
    @extend .demo-item;
    border-color:#40bb8a;
    color:#40bb8a;
    position: relative;
}

.demo-default {
    @extend .demo-item;
    background-color: #f0f2f5;
    border-color:#f0f2f5;
}

.demo-disabled {
    @extend .demo-item;
    border-color: #eee;
}

.accordion-active {
    .accordion-item-content {
        background-color: #f8f8f8;
    }
}

</style>
