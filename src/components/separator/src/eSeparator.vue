<template>
    <div ref="separator" class="e-separator" :class="separatorClass" :style="separatorStyle">
    </div>
</template>
<script type="text/javascript">
export default {
    name: 'e-separator',
    props: {
        width: {
            type: Number,
            default: 750,
        },
        bdColor: String,
        align: {
            type: String,
            default: 'center'
        },
        bdStyle:{
            type:String,
            default:'solid'
        }
    },
    computed: {
        separatorClass() {
            let classes = [`bd-${this.bdStyle}`];
            if(this.bdColor){
                classes.push(`bd-${this.bdColor}`);
            }else{
                classes.push(`separator-default`);
            }
            return classes;
        },
        separatorStyle() {
        	let marginLeft = 'unset',marginRight = 'unset';
        	if(this.align === 'right'){
        		marginLeft = `calc(100% - ${(this.width) / 75}rem)`;
        	}else if(this.align === 'center'){
        		marginLeft = 'auto';
        		marginRight = 'auto';
        	}

            let styles = {
                width: `${(this.width) / 75}rem`,
                'margin-left': marginLeft,
                'margin-right':marginRight
            }
            return styles;
        }
    }
}

</script>
<style lang="scss">
.e-separator {
    max-width: 100%;
    height: 1px;
    border-top-width: 1px;
    &.separator-default{
        border-color: #e0e0e0;
    }
}

</style>
