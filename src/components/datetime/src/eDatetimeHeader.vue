<template>
    <e-item class="e-datetime-top font14 text-g3">
        <e-item-side>
            <e-button-text @click="datetime.hide" :class="`text-${btnColor}`">
                <slot name="leftBtn">取消</slot>
            </e-button-text>
        </e-item-side>
        <e-item-main justify-content="center" class="font18">
            <slot name="title">
                {{title}}
            </slot>
        </e-item-main>
        <e-item-side right>
            <e-button-text @click="datetime.sure" :class="`text-${btnColor}`">
                <slot name="rightBtn">确定</slot>
            </e-button-text>
        </e-item-side>
    </e-item>
</template>
<script type="text/javascript">
export default{
	name:'e-datetime-header',
	inject:['datetime'],
	props:{
		title:{
			type:String,
			default:'请选择时间'
		},
		btnColor:{
            type:String,
            default:'g3'
        }
	}
}
</script>
