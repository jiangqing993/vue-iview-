<template>
	<div class="jq-com-search-bar">
		<div class="contain">
			<div class="leftWrapper">
				<Button class='search-btn'>查询</Button>
				<div class="row" v-for="(item,index) in searchList" :key="index">
					<Select v-if="item.type === 'select'" v-model="item.value" :clearable="item.attr.clearable" :filterable="item.attr.filterable" :not-found-text="item.attr.notFoundText" :placeholder="item.attr.placeholder">
						<Option v-for="item in item.attr.options" :value="item.value" :key="item.value">{{ item.label }}</Option>
					</Select>

					<Input v-if="item.type==='input'" v-model="item.value" :placeholder="item.attr.placeholder" :clearable="item.attr.clearable" :disabled='item.disabled' />
				</div>

			</div>

			<div class="rightWrapper">
				<!-- <Select v-model="model1">
						<Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
					</Select> -->
				<div class="btn" v-for="(item,index) in rightList" :key="index">
					<Button :class="item.color">
						<span :class="btnClass(item.icon)"></span>
					</Button>
				</div>

			</div>
		</div>
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
		searchList: {
			type: Array,
			default() {
				return []
			}
		},
		rightList: {
			type: Array,
			default() {
				return []
			}
		}
	},
	computed: {
		btnClass() {
			return font => {
				return {
					iconfont: true,
					[font]: true
				}
			}
		}
	},
	methods: {

	}
}
</script>
<style lang="less" scoped>
.jq-com-search-bar {
	height: 30px;
	width: 100%;
	// border: 1px sxolid #999999;
	margin-bottom: 10px;
	.contain {
		display: flex;
	}
	.leftWrapper {
		flex: 1;
		display: flex;
		.row {
			margin-left: 10px;
		}
		.search-btn {
			height: 30px;
			width: 60px;
			padding: 0;
			background: #4da1ff;
			border: 0;
			color: #fff;
		}
	}
	.rightWrapper {
		display: flex;
		align-items: flex-end;
		.btn {
			margin-left: 10px;

			.ivu-btn {
				width: 30px;
				height: 30px;
				padding: 0;
			}
		}
		.ivu-btn-icon-only {
			height: 30px;
			width: 30px;
			padding: 0;
		}
		.theme {
			background: #4da1ff;
			color: #fff;
			font-size: 16px;
			border: 0;
		}
		.gray {
			background: #fff;
			color: #d0def0;
			font-size: 16px;
			border: 0;
		}
	}

	.ivu-select {
		width: 100px;
	}
	.ivu-input-wrapper {
		width: 150px;
	}
}
</style>