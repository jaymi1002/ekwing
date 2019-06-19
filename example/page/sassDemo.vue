<template>
    <div>
        <p class="font40 text-red lh-1-5">
            <span class="underline">标题</span>
        </p>
        <div class="mt20 wrap bdt1px bd-red bd-top-solid">
		what is your base; I love it.hello everybody.
        </div>
        <div class="fix">
        	<div class="left">
        		float:left<br/>
        	</div>
        	<div class="right">
        		float:right<br>
        	</div>
        </div>
    </div>
</template>
<script type="text/javascript">
import '@/style/base.scss';
export default {
    name: 'sassDemo',
}

</script>
<style type="text/css">
.wrap {
    border: 1px solid red;
    height: 200px;
    box-sizing: border-box;
}

</style>
