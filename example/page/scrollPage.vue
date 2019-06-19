<template>
    <e-layout title="scrollPage">
        <e-scroll-page tip horizontal ref="scrollPage" :start="3">
            <e-scroll-item style="">
                <div class="flex justify-center items-center" style="height:100%;width100%;">
                    <div class="font16">one</div>
                    <!--   <e-switch-wrap>
                        <e-switch slot="switch" v-model="select"></e-switch>
                    </e-switch-wrap> -->
                </div>
            </e-scroll-item>
            <e-scroll-item style="">
                <div class="flex justify-center items-center" style="height:100%;width100%;">
                    <div class="font16">two</div>
                    <!-- <e-switch-wrap reverse class="mt20">
                        <e-switch slot="switch" v-model="select"></e-switch>
                    </e-switch-wrap> -->
                </div>
            </e-scroll-item>
            <e-scroll-item>
                <div class="flex justify-center items-center" style="height:100%;width100%;">
                    <div class="font16">three</div>
                    <!-- <e-switch v-model="select"></e-switch> -->
                </div>
            </e-scroll-item>
            <e-scroll-item style="">
                <div class="flex justify-center items-center" style="height:100%;width100%;">
                    <div class="font16">four</div>
                </div>
            </e-scroll-item>
        </e-scroll-page>
    </e-layout>
</template>
<script type="text/javascript">
export default {
    data() {
        return {
            areaText: '',
            select: false
        }
    },
    created() {
        window.scrollPage = this;
    }
}

</script>
