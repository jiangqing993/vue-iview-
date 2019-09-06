<template>
	<div class="jq-breadcrumbItem">
		<Breadcrumb separator="/">
			<BreadcrumbItem>当前所在的位置</BreadcrumbItem>
			<BreadcrumbItem v-for="(item,index) in breadPath" :key="index" :to="item.path">{{item.name}}</BreadcrumbItem>
		</Breadcrumb>
	</div>
</template>
<script>
export default {
	name: 'jq-breadcrumb',
	data() {
		return {

		}
	},
	props: {
		subMenuList: {
			type: Array,
			default() {
				return []
			}
		},
		breadList: {
			type: Array,
			default() {
				return []
			}
		}
	},
	computed: {
		breadPath() {
			return this.breadList
		}
	},
	created() {
		let path = this.subMenuList.find(item => item.path === this.$route.path)
		if (path) {
			this.breadList.push({
				name: path.name,
				path: path.path
			})
		}
	},
	mounted() {
	},
	methods: {

	}
}
</script>
<style lang="less" scoped>
.jq-breadcrumbItem {
	/deep/.ivu-breadcrumb {
		height: 30px;
		line-height: 30px;
		font-size: 12px;
	}
}
</style>