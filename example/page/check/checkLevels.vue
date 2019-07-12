<template>
	<e-layout>
        <stu-header title="checkLevels"></stu-header>
        <e-content>
        <p class="tc font16 lh3 text-g3">e-accordion 和 e-check-list</p>
    	<e-separator></e-separator>
	    <e-accordion active-class="accordion-active" animate>
	        <e-accordion-item v-for="(item,index) in studentList" :value="index">
                <e-accordion-header>
	                <p class="font16">
	                    <e-icon :type="getIconType(item.select.length,item.list.length)" @click.stop="choose(index)" :color="getIconColor(item.select.length,item.list.length)" class="mr20" :size="20"></e-icon>{{item.title}}</p>
                </e-accordion-header>
	            <e-accordion-content>
	                <e-check-list style="padding-left:0.267rem;" ref="checkStudent" tip v-model="item.select" :disabled="false" default-type="no-check" default-color="g9" active-type="check" active-color="green" :icon-size="20" no-border reverse>
	                    <template v-for="(el,stuIndex) in item.list">
	                        <e-check-item :value="stuIndex">
	                            {{el.name}}
	                        </e-check-item>
	                    </template>
	                </e-check-list>
	            </e-accordion-content>
                <e-separator></e-separator>
	        </e-accordion-item>
	    </e-accordion>
        </e-content>
    </e-layout>
</template>
<script type="text/javascript">
export default {
    data() {
        return {
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
