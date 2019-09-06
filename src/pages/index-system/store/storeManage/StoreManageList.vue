<template>
	<div class="retail-page-contian">
		<jq-com-search :searchList="searchList" :rightList="rightList"></jq-com-search>
		<Table max-height="200" border :columns="columns" :data="dataList"></Table>
		<Page :total="100" show-sizer />
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
						placeholder: '输入门店名称'
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
					icon: 'icon-shuaxin'
				}
			],
			columns: [
				{
					title: '门店名称',
					key: 'name'
				},
				{
					title: '门店编号',
					key: 'sn'
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
					name: '上海避风塘有限公司',
					sn: 'XL4424424423',
					date: '2017-12-23'
				},
				{
					name: '上海喜之郎有限公司',
					sn: 'XL426788687688',
					date: '2017-01-23'
				}
			]
		}
	}
}
</script>
<style lang="less" scoped>
</style>