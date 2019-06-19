<template>
	<e-layout head title="badge">
		<stu-header slot="header" title="badge"></stu-header>
		<e-badge :label="2"></e-badge>
		<e-badge class="ml20" :label="20"></e-badge>
		<e-badge class="ml20" :label="200000000"></e-badge>
		<e-badge class="ml20" label="New"></e-badge>
		<e-badge class="ml20"></e-badge>
	</e-layout>
</template>
<script type="text/javascript">
	export default{
		name:'badge',

	}
</script>