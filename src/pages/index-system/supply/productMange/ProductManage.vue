<template>
	<div class="jq-main-body">
		<jq-breadcrumb :breadList='breadList' :subMenuList="subMenuList"></jq-breadcrumb>
		<router-view></router-view>
	</div>
</template>
<script>
import JqBreadcrumb from '@/components/others/JqBreadcrumb'
export default {
	components: {
		'jq-breadcrumb': JqBreadcrumb
	},
	data() {
		return {
			breadList: [
				{
					name: "供应",
					path: ''
				}
			],
			subMenuList: [
				{
					name: '货品管理',
					path: '/store/storeManege/list'
				}
			]
		}
	}
}
</script>