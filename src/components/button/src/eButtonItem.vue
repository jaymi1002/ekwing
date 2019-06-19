<template>
	<div class="e-btn-item">
		<e-button 
			:width="width" 
			:height="height" 
			:type="type" 
			:disabled="disabled" 
			:plain="plain"
			:theme="theme" 
			:loading="loading" 
			:active-type="activeType"
			@click="$emit('click')">
			<slot></slot>
		</e-button>
	</div>
</template>
<script type="text/javascript">
import { isFirstChild } from '../../../helpers/parent-children.js';
	export default{
		name:'e-button-item',
		props:{
			disabled:Boolean,
			plain:Boolean,
			loading:Boolean
		},
		computed:{
			theme(){
				return this.$parent.theme;
			},
			width(){
				if(this.$parent.type === 'rect'){
					return 375;
				}
				return 300;
			},
			height(){
				if(this.$parent.type === 'rect'){
					return 96;
				}
				return 76;
			},
			type(){
				return this.$parent.type;
			},
			activeType(){
				if(this.$parent.type === 'rect'){
					return 'opacity';
				}
				return 'scale';
			}
		},
		data(){
			return {

			}
		}
	}
</script>