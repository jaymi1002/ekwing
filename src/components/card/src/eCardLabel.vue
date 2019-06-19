<template>
    <div>
        <e-separator :bd-color="bdStyle" :bd-style="bdStyle"></e-separator>
        <div class="e-card-label font14">
            <slot></slot>
        </div>
    </div>
</template>
<script type="text/javascript">
export default {
    name: 'e-card-label',
    props: {
    	bdStyle:String,
        bdColor:String,
    },
    computed: {
    }
}

</script>
