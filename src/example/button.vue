<template>
    <e-layout head title="button" shadow>
        <e-item></e-item>
        <e-item class="mt20" border justify-content="center">
            <e-button color="blue" size="max" corner="default" text="完成">
            </e-button>
        </e-item>
        <e-item class="mt10" border justify-content="center">
            <e-button plain color="blue" size="max" corner="default" loading>
                <span class="font16">完成</span>
            </e-button>
        </e-item>
        <e-item class="mt10" border justify-content="center">
            <e-button plain color="yellow" size="max" corner="cir">
                <span class="font14">完成</span>
            </e-button>
        </e-item>
        <e-item class="mt10" border justify-content="center">
            <e-button color="yellow" size="max" corner="default" loading>
                <span class="font14">完成</span>
            </e-button>
        </e-item>
        <e-item class="mt10" border justify-content="center">
            <e-button color="yellow" size="mini" corner="default" disabled>
                <span class="font14">完成</span>
            </e-button>
        </e-item>
    </e-layout>
</template>
<script>
export default {
    data() {
        return {}
    },
    methods: {
    },
    components: {},
    created() {
    }
}

</script>
