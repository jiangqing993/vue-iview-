<template>
	<Menu active-name="1-2" :accordion="true" width="auto" :open-names="['1']" :class="menuitemClasses">
		<Submenu v-for="(item ,index) in fullList" :key="index" :name="index">
			<template slot="title">
				<span :class="['iconfont',item.icon]"></span>
				{{item.name}}
			</template>
			<MenuItem v-for="(child ,childIndex) in item.children" :key="childIndex" :name="child.name" :to="child.path">{{child.name}}</MenuItem>
		</Submenu>

	</Menu>
</template>
<script>
export default {
	data() {
		return {
			fullList: [
				{
					name: '门店',
					icon: 'icon-kucun',
					children: [
						{
							name: '门店管理',
							path: '/store/storeManege/list'
						},
						{
							name: '店员管理',
							path: '/store/clerkManage/list'
						}
					]
				},
				{
					name: '供应',
					icon: 'icon-gongying',
					children: [
						{
							name: '供应商',
							path: ''
						},
						{
							name: '货品分类',
							path: ''
						},
						{
							name: '货品规格',
							path: ''
						},
						{
							name: '货品单位',
							path: ''
						},
						{
							name: '货品品牌',
							path: ''
						},
						{
							name: '货品管理',
							path: '/supply/productMange/list'
						},
						{
							name: '货品分配',
							path: ''
						}
					]
				},
				{
					name: '订单',
					icon: 'icon-icon-',
					children: [
						{
							name: '平台订单',
							path: ''
						},
						{
							name: '本地订单',
							path: ''
						}
					]
				},
				{
					name: '库存',
					icon: 'icon-kucun',
					children: [
						{
							name: '库存状况',
							path: ''
						},
						{
							name: '货品入库',
							path: ''
						},
						{
							name: '货品盘点',
							path: ''
						}
					]
				},
				{
					name: '收银',
					icon: 'icon-shouyin',
					children: [
						{
							name: '收银流水',
							path: ''
						}
					]
				},
				{
					name: '设置',
					icon: 'icon-shezhi',
					children: [
						{
							name: '企业信息',
							path: ''
						},
						{
							name: '修改密码',
							path: ''
						}
					]
				},
			]
		}
	},
	computed: {
		menuitemClasses: function () {
			return [
				'menu-item',
				this.isCollapsed ? 'collapsed-menu' : ''
			]
		}
	}

}
</script>
<style lang="less" scoped>
.menu-item span {
	display: inline-block;
	overflow: hidden;
	width: 24px;
	text-overflow: ellipsis;
	white-space: nowrap;
	vertical-align: bottom;
	transition: width 0.2s ease 0.2s;
}
.menu-item i {
	transform: translateX(0px);
	transition: font-size 0.2s ease, transform 0.2s ease;
	vertical-align: middle;
	font-size: 16px;
}
.collapsed-menu span {
	width: 0px;
	transition: width 0.2s ease;
}
.collapsed-menu i {
	transform: translateX(5px);
	transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
	vertical-align: middle;
	font-size: 22px;
}
</style>