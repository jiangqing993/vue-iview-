<template>
	<div class="retail-page-contian">
		<jq-com-search :searchList="searchList" :rightList="rightList"></jq-com-search>
		<Table max-height="200" border :columns="columns" :data="dataList"></Table>
		<Page :total="12" show-sizer />
	</div>
</template>
<script>

export default {
	components: {

	},
	computed: {
		btnStyle() {
			return type => {
				return {
					type
				}
			}
		},
		isSelectAll() {
			return this.dataList.every(item => item._checked)
		}
	},
	data() {
		return {
			searchList: [
				{
					type: 'input',
					name: 'productName',
					disabled: false,
					value: '',
					attr: {
						clearable: true,
						placeholder: '输入店员名称'
					}
				}
			],
			rightList: [
				{
					type: 'button',
					color: 'theme',
					name: 'add',
					disabled: false,
					icon: 'icon-jia'
				},
				{
					type: 'button',
					color: 'gray',
					name: 'updata',
					disabled: false,
					icon: 'icon-shanchu'
				},
				{
					type: 'button',
					color: 'gray',
					name: 'updata',
					disabled: false,
					icon: 'icon-shuaxin'
				}
			],
			columns: [
				{
					title: '',
					width: 40,
					renderHeader: (h) => {
						let vm = this
						return h('Checkbox', {
							props: {
								value: this.isSelectAll
							},
							on: {
								'on-change': checked => {
									vm.dataList.forEach(item => {
										item._checked = checked
									})
								}
							}
						})
					},
					render: (h, params) => {
						let row = params.row
						let vm = this
						return h('Checkbox', {
							props: {
								value: row._checked
							},
							on: {
								'on-change': checked => {
									vm.dataList[params.index]._checked = checked
								}
							}
						})
					}
				},
				{
					title: '店员姓名',
					key: 'name'
				},
				{
					title: '店员编号',
					key: 'sn'
				},
				{
					title: '手机号',
					key: 'tel'
				},
				{
					title: '创建时间',
					key: 'date'
				},
				{
					title: '操作',
					width: 100,
					render: (h) => {
						return h('div', [
							h('span', { class: 'table-btn' }, '编辑')
						])
					}
				}
			],
			dataList: [
				{
					name: '科比',
					sn: '8',
					_checked: false,
					tel: '19877383738',
					date: '2017-12-04'
				},
				{
					name: '杜兰特',
					sn: '35',
					tel: '15217837634',
					_checked: false,
					date: '2017-01-04'
				},
				{
					name: '詹姆斯',
					sn: '23',
					tel: '15212415751',
					_checked: false,
					date: '2017-01-23'
				}
			]
		}
	}
}
</script>
<style lang="less" scoped>
</style>