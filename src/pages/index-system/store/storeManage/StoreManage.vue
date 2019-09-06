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
					name: "门店",
					path: ''
				},
				{
					name: "门店管理",
					path: '/store/storeManege/list'
				}
			],
			subMenuList: [
				{
					name: '列表',
					path: '/store/storeManege/list'
				}
			]
		}
	}
}
</script>