<template>
    <e-layout>
        <stu-header title="card"></stu-header>
        <e-content>
        <div class="card-wrap">
            <e-card class="demo-card">
                <e-card-title>
                    <p class="font16 tc bold pb20">单词连连看</p>
                </e-card-title>
                <e-separator></e-separator>
                <e-card-label>
                    一旦你画出了轮廓，选择反选，然后清除不需要的部分
                </e-card-label>
            </e-card>
            <e-card class="demo-card">
                <e-card-title>
                    <e-item class="no-padding" no-border>
                        <e-item-side>
                            <div class="flex flex-center">
                                <img src="http://ekwing-oss-new.oss-cn-shanghai.aliyuncs.com/ekwing/201806041513341210691152503653.jpg" class="head-img" />
                            </div>
                        </e-item-side>
                        <e-item-main>
                            <div>
                                <p class="font16 text-g3">李方方</p>
                                <p class="font12 text-g6">3年1班</p>
                            </div>
                        </e-item-main>
                        <e-item-side class="text-green" right>
                            20
                        </e-item-side>
                    </e-item>
                </e-card-title>
                <e-card-main class="font16">
                    选择两个单词，选择反选，然后清除不需要的部分。选择反选，然后清除不需要的部分。
                </e-card-main>
            </e-card>
            <e-card class="demo-card">
                <e-card-title>
                    <p class="font16 tc bold">单词连连看</p>
                </e-card-title>
                <e-card-main class="font16">
                    选择两个单词，选择反选，然后清除不需要的部分。选择反选，然后清除不需要的部分。
                </e-card-main>
                <e-separator></e-separator>
                <e-card-label>
                    一旦你画出了轮廓，选择反选，然后清除不需要的部分
                </e-card-label>
            </e-card>
            <e-card class="demo-card">
                <e-card-title>
                    <e-item class="no-padding-lr" no-border>
                        <e-item-side>
                            <div class="flex flex-center">
                                <img src="http://ekwing-oss-new.oss-cn-shanghai.aliyuncs.com/ekwing/201806041513341210691152503653.jpg" class="head-img" />
                            </div>
                        </e-item-side>
                        <e-item-main>
                            <div>
                                <p class="font16 text-g3">李方方</p>
                                <p class="font12 text-g6">3年1班</p>
                            </div>
                        </e-item-main>
                        <e-item-side class="text-green" right>
							20
                        </e-item-side>
                    </e-item>
                </e-card-title>
                <e-card-main class="font16">
                	一旦你画出了轮廓，选择反选，然后清除不需要的部分
                </e-card-main>
                <e-separator></e-separator>
                <e-card-label>
                	一旦你画出了轮廓，选择反选，然后清除不需要的部分
                </e-card-label>
            </e-card>
        </div>
        <div class="font14 ptb30">
            <param-table :list="cardExt">
                <template slot="title">组件html tag：e-card</template>
            </param-table>
        </div>
        <div class="font14 ptb30">
            <param-table :list="cardTitlExt">
                <template slot="title">组件html tag：e-card-title</template>
            </param-table>
        </div>
        <div class="font14 ptb30">
            <param-table :list="cardMainExt">
                <template slot="title">组件html tag：e-card-main</template>
            </param-table>
            
        </div>
        <div class="font14 ptb30">
            <param-table :list="cardLabelInfo">
                <template slot="title">组件html tag：e-card-label</template>
            </param-table>
            <param-table :list="cardLabelExt">
            </param-table>
        </div>
        </e-content>
    </e-layout>
</template>
<script type="text/javascript">
import { eCard, eCardTitle,eCardLabel,eCardMain } from '@/components';
import mergeProps from '@/../example/lib/mergeProps';
export default {
    name: 'card',
    data(){
        return {
            cardInfo:mergeProps(eCard),
            cardExt:[{
                name: 'default',
                type: 'slot',
            }],
            cardTitleInfo:mergeProps(eCardTitle),
            cardTitlExt:[{
                name: 'default',
                type: 'slot',
            }],
            cardMainInfo:mergeProps(eCardMain),
            cardMainExt:[{
                name: 'default',
                type: 'slot',
            }],
            cardLabelInfo:mergeProps(eCardLabel),
            cardLabelExt:[{
                name: 'default',
                type: 'slot',
            }]
        }
    }
}

</script>
<style lang="scss">
.card-wrap {
    background-color: #f8f8f8;
    padding:0.267rem 0.4rem 0;
    box-sizing:border-box;

}

.demo-card {
    margin: 0.267rem 0;
    background-color: #fff;
    .head-img {
        width: 1.067rem;
        height: 1.067rem;
        border-radius: 50%;
    }
    .rank {
        width: 0.267rem;
    }
}

</style>
