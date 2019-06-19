<template>
    <e-layout>
        <stu-header slot="header" title="card"></stu-header>
        <div class="card-wrap">
            <e-card class="demo-card">
                <e-card-title>
                    <e-item class="no-padding">
                        <e-item-side>
                            <div class="flex flex-center">
                                <e-head-img src="http://ekwing-oss-new.oss-cn-shanghai.aliyuncs.com/ekwing/201806041513341210691152503653.jpg" class="head-img"></e-head-img>
                            </div>
                        </e-item-side>
                        <e-item-main>
                            <div>
                                <p class="font16 text-g3">李方方</p>
                                <p class="font12 text-g6">3年1班</p>
                            </div>
                        </e-item-main>
                        <e-item-side class="text-green">
							20
                        </e-item-side>
                    </e-item>
                </e-card-title>
                <e-card-main class="font16">
                	一旦你画出了轮廓，选择反选，然后清除不需要的部分
                </e-card-main>
                <e-card-label>
                	一旦你画出了轮廓，选择反选，然后清除不需要的部分
                </e-card-label>
            </e-card>
        </div>
    </e-layout>
</template>
<script type="text/javascript">
export default {
    name: 'card',
}

</script>
<style lang="scss">
.card-wrap {
    background-color: #f8f8f8;
    height: 100%;
    padding:0.267rem 0.4rem 0;
    box-sizing:border-box;

}

.demo-card {
    background-color: #fff;
    .head-img {
        width: 1.067rem;
        height: 1.067rem;
    }
    .rank {
        width: 0.267rem;
    }
}

</style>
