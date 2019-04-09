<template>
    <e-layout title="grid">
        <div class="plr20">
            <e-grid class="mt20" :cols="2" show-lr-border show-vertical-dividers>
                <e-grid-item @click="go">
                    <template>
                        <img slot="icon" src="https://cn.vuejs.org/images/logo.png" />
                    </template>
                    <template slot="label"> hello</template>
                </e-grid-item>
                <e-grid-item>
                    <template>
                        <img slot="icon" src="https://cn.vuejs.org/images/logo.png" />
                    </template>
                    <template slot="label"> hello</template>
                </e-grid-item>
                <e-grid-item>
                    <template>
                        <img slot="icon" src="https://cn.vuejs.org/images/logo.png" />
                    </template>
                    <template slot="label"> hello</template>
                </e-grid-item>
                <e-grid-item>
                    <template>
                        <img slot="icon" src="https://cn.vuejs.org/images/logo.png" />
                    </template>
                    <template slot="label"> hello</template>
                </e-grid-item>
                <e-grid-item>
                    <template>
                        <img slot="icon" src="https://cn.vuejs.org/images/logo.png" />
                    </template>
                    <template slot="label"> hello</template>
                </e-grid-item>
            </e-grid>
            <e-grid class="mt20" :cols="2" :show-lr-border="false">
                <e-grid-item @click="go">
                    <template>
                        <img slot="icon" src="https://cn.vuejs.org/images/logo.png" />
                    </template>
                    <template slot="label"> hello</template>
                </e-grid-item>
                <e-grid-item>
                    <template>
                        <img slot="icon" src="https://cn.vuejs.org/images/logo.png" />
                    </template>
                    <template slot="label"> hello</template>
                </e-grid-item>
                <e-grid-item>
                    <template>
                        <img slot="icon" src="https://cn.vuejs.org/images/logo.png" />
                    </template>
                    <template slot="label"> hello</template>
                </e-grid-item>
                <e-grid-item>
                    <template>
                        <img slot="icon" src="https://cn.vuejs.org/images/logo.png" />
                    </template>
                    <template slot="label"> hello</template>
                </e-grid-item>
                <e-grid-item>
                    <template>
                        <img slot="icon" src="https://cn.vuejs.org/images/logo.png" />
                    </template>
                    <template slot="label"> hello</template>
                </e-grid-item>
            </e-grid>
            <e-grid class="mt20" :cols="2" :show-lr-border="false">
                <e-grid-item @click="go">
                    <div class="flex justify-center item-center">
                        wode
                    </div>
                </e-grid-item>
                <e-grid-item @click="go">
                    <div class="flex justify-center item-center">
                        wode
                    </div>
                </e-grid-item>
                <e-grid-item @click="go">
                    <div class="flex justify-center item-center">
                        wode
                    </div>
                </e-grid-item>
            </e-grid>
        </div>
    </e-layout>
</template>
<script type="text/javascript">
export default {
    methods: {
        go() {
            alert('go');
        }
    }
}

</script>
