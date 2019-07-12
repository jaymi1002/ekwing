<template>
    <e-layout title="scrollPage">
        <stu-header title="scrollPage"></stu-header>
        <e-content>
        <e-scroll-page tip  ref="scrollPage" :start="1">
            <e-scroll-item class="bg-green text-white">
                <div class="flex justify-center items-center" style="height:100vh;width100vw;">
                    <div class="font16">one</div>
                    <div class="font14 pt30 pct100">
                        <param-table :list="scrollPageInfo">
                            <template slot="title">组件html tag：e-scroll-page</template>
                        </param-table>
                    </div>
                </div>
            </e-scroll-item>
            <e-scroll-item class="bg-primary text-white">
                <div class="flex justify-center items-center" style="height:100vh;width100vw;">
                    <div class="font16">two</div>
                    <!-- <e-switch-wrap reverse class="mt20">
                        <e-switch slot="switch" v-model="select"></e-switch>
                    </e-switch-wrap> -->
                </div>
            </e-scroll-item>
            <e-scroll-item class="bg-green text-white">
                <div class="flex justify-center items-center" style="height:100vh;width100vw;">
                    <div class="font16">three</div>
                    <!-- <e-switch v-model="select"></e-switch> -->
                </div>
            </e-scroll-item>
            <e-scroll-item class="bg-primary text-white">
                <div class="flex justify-center items-center" style="height:100vh;width100vw;">
                    <div class="font16">four</div>
                </div>
            </e-scroll-item>
        </e-scroll-page>
        <!-- <e-scroll-page tip ref="scrollPage" :start="1">
            <e-scroll-item class="bg-green text-white">
                <div class="flex justify-center items-center" style="height:100vh;width100%;">
                    <div class="font16">one</div>
                    <div class="font14 pt30 pct100">
                        <param-table :list="scrollPageInfo">
                            <template slot="title">组件html tag：e-scroll-page</template>
                        </param-table>
                    </div>
                </div>
            </e-scroll-item>
            <e-scroll-item class="bg-primary text-white">
                <div class="flex justify-center items-center" style="height:100vh;width100%;">
                    <div class="font16">two</div>
                </div>
            </e-scroll-item>
            <e-scroll-item class="bg-green text-white">
                <div class="flex justify-center items-center" style="height:100vh;width100%;">
                    <div class="font16">three</div>
                </div>
            </e-scroll-item>
            <e-scroll-item class="bg-primary text-white">
                <div class="flex justify-center items-center" style="height:100vh;width100%;">
                    <div class="font16">four</div>
                </div>
            </e-scroll-item>
        </e-scroll-page> -->
        </e-content>
    </e-layout>
</template>
<script type="text/javascript">
import {eScrollPage} from '@/components';
import mergeProps from '@/../example/lib/mergeProps';
export default {
    data() {
        return {
            areaText: '',
            select: false,
            scrollPageInfo:mergeProps(eScrollPage),
            scrollPageExt:[]
        }
    },
    created() {
        window.scrollPage = this;
    }
}

</script>
