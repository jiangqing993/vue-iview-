<template>
	<div class="jq-layout">
		<Layout>
			<Sider breakpoint="md" collapsible :collapsed-width="78" v-model="isCollapsed">
				<div class="jq-Menu-top"></div>
				<main-menu></main-menu>
				<div slot="trigger"></div>
			</Sider>
			<Layout>
				<Header class="layout-header-bar"></Header>
				<Content>
					<router-view></router-view>
				</Content>
			</Layout>
		</Layout>
	</div>
</template>
<script>
import MainMenu from '@/components/common/MainMenu'
export default {
	name: 'index',
	components: {
		'main-menu': MainMenu
	},
	data() {
		return {
			isCollapsed: false
		}
	}, computed: {
		menuitemClasses: function () {
			return [
				'menu-item',
				this.isCollapsed ? 'collapsed-menu' : ''
			]
		}
	},
	mounted() {

	},
}
</script>
<style lang="less" scoped>
.layout-header-bar {
	background: #fff;
	box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}

.ivu-layout {
	height: 100%;
}
.jq-Menu-top {
	height: 60px;
	background: #4da1ff;
}
.ivu-layout-header {
	height: 60px;
}
/deep/.ivu-layout-sider {
	background: #0460a5;
	.ivu-menu-dark {
		background: #0460a5;
	}
	.ivu-menu-light {
		background: #0460a5;
		color: rgba(255, 255, 255, 0.6);
	}
	.ivu-menu-vertical {
		&::after {
			width: 0;
		}
		.ivu-menu-submenu-title {
			&:hover {
				color: rgba(255, 255, 255, 0.6);
			}
		}

		.ivu-menu-item-active:not(.ivu-menu-submenu) {
			color: #fff;
			background: #045897;
			&::after {
				left: 0;
				width: 6px;
				background: #4da1ff;
				border-top-right-radius: 6px;
				border-bottom-right-radius: 6px;
			}
		}
	}
	.ivu-menu {
		color: rgba(255, 255, 255, 0.6);
	}
	.ivu-menu-opened {
		.ivu-menu-submenu-title {
			color: #ffffff;
			&:hover {
				color: #ffffff;
			}
		}
		.ivu-menu-item {
			&:hover {
				color: #ffffff;
			}
		}
		.ivu-menu {
			background: #045897;
		}
	}
}
/deep/.ivu-layout-content {
	height: calc(100% - 60px);
}
.jq-layout {
	border: 1px solid #d7dde4;
	background: #f5f7f9;
	position: relative;
	border-radius: 4px;
	overflow: hidden;
	height: 100%;
}
.menu-item span {
	display: inline-block;
	overflow: hidden;
	width: 69px;
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