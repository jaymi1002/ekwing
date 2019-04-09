<template>
    <e-layout title="img">
        <e-img-loading class="my-img" src="https://cn.vuejs.org/images/logo.png"></e-img-loading>
        <e-img-loading class="my-img" src="https://cn.vuejs.org/images/logo.png"></e-img-loading>
        <e-item border>
            <e-item-side :width="18">
                <e-head-img class="my-head" border border-color="blue" src="https://cn.vuejs.org/images/logo.png"></e-head-img>
            </e-item-side>
            <e-item-main>
                <div>
                    <p class="font18 text-g3">李方方</p>
                    <p class="font12 text-g9">励志学校</p>
                </div>
            </e-item-main>
        </e-item>
         <e-item border>
            <e-item-side :width="18">
                <e-head-img class="my-head"  border-color="blue" src="https://cn.vuejs.org/images/logo.png"></e-head-img>
            </e-item-side>
            <e-item-main>
                <div>
                    <p class="font18 text-g3">李方方</p>
                    <p class="font12 text-g9">励志学校</p>
                </div>
            </e-item-main>
        </e-item>
    </e-layout>
</template>
<script type="text/javascript">
export default {

}

</script>
<style lang="scss">
.my-img {
    width: 5.0rem;
    height: 5.0rem;
}

.my-head {
    width: 1.333rem;
    height: 1.333rem;
}

</style>
