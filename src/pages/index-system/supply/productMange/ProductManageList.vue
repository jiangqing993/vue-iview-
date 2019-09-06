<template>
	<div>
		<jq-com-search :searchList="searchList" :rightList="rightList"></jq-com-search>
	</div>
</template>

<script>
export default {
	name: '',
	data() {
		return {
			searchList: [
				{
					type: 'select',
					name: 'goodsId',
					value: '',
					disabled: false,
					attr: {
						clearable: true,
						filterable: true,
						placeholder: '供应商',
						options: []
					}
				},
				{
					type: 'select',
					name: 'goodsId',
					value: '',
					disabled: false,
					attr: {
						clearable: true,
						filterable: true,
						placeholder: '分类',
						options: []
					}
				},
				{
					type: 'input',
					name: 'productName',
					disabled: false,
					value: '',
					attr: {
						clearable: true,
						placeholder: '供应商/货品名称'
					}
				}
			],
			rightList: [
				{
					type: 'button',
					color: 'theme',
					name: 'add',
					disabled: false,
					icon: 'icon-shoushi'
				},
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
					icon: 'icon-xiazai'
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
			]
		}
	}
}
</script>

<style lang="" scoped>
</style>