<template>
    <e-layout>
    	<stu-header slot="header" title="img"></stu-header>
        <e-img class="my-img" inline src="https://cn.vuejs.org/images/logo.png"></e-img>
        <e-img class="my-img" inline src="https://cn.vuejs.org/images/logo.png"></e-img>
        <div class="font14 ptb30">
            <param-table :list="imgInfo">
                <template slot="title">组件html tag：e-img</template>
                <template slot="tip">必须配置 icon：img-loading 、 img-error</template>
            </param-table>
        </div>
    </e-layout>
</template>
<script type="text/javascript">
import { eImg } from '@/components';
import mergeProps from '@/../example/lib/mergeProps';
export default {
	data(){
		return {
			imgInfo:mergeProps(eImg)
		}
	}
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
