<template>
    <e-layout head shadow>
        <template slot="headerRightSlot">
            <e-icon type="face-cry" color="g3" size="2em"></e-icon>
        </template>
        <template slot="headerTitleSlot">
            <e-button-tab class="pct60">
                <e-button-tab-item :value="0">
                    hello
                </e-button-tab-item>
                <e-button-tab-item :value="1">
                    world
                </e-button-tab-item>
            </e-button-tab>
        </template>
    </e-layout>
</template>
<script type="text/javascript">
export default {

}

</script>
