<template>
	<div class="jq-page-login jq-page-body">
		<div class="jq-page-contain">
			<div class="jq-page-contain-login">
				<Form ref="formCustom">
					<Input prefix="ios-contact" type="text" v-model="formCustom.passwd" />
					<Input prefix="ios-unlock" type="password" v-model="formCustom.passwdCheck" />
					<FormItem>
						<Button type="primary" @click="handleSubmit('formCustom')" long>登录</Button>
					</FormItem>
				</Form>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		const validatePass = (rule, value, callback) => {
			if (value === '') {
				callback(new Error('Please enter your password'));
			} else {
				if (this.formCustom.passwdCheck !== '') {
					// 对第二个密码框单独验证
					this.$refs.formCustom.validateField('passwdCheck');
				}
				callback();
			}
		};
		const validatePassCheck = (rule, value, callback) => {
			if (value === '') {
				callback(new Error('Please enter your password again'));
			} else if (value !== this.formCustom.passwd) {
				callback(new Error('The two input passwords do not match!'));
			} else {
				callback();
			}
		};
		const validateAge = (rule, value, callback) => {
			if (!value) {
				return callback(new Error('Age cannot be empty'));
			}
			// 模拟异步验证效果
			setTimeout(() => {
				if (!Number.isInteger(value)) {
					callback(new Error('Please enter a numeric value'));
				} else {
					if (value < 18) {
						callback(new Error('Must be over 18 years of age'));
					} else {
						callback();
					}
				}
			}, 1000);
		};

		return {
			formCustom: {
				passwd: 'admin',
				passwdCheck: 'admin',
				age: ''
			},
			ruleCustom: {
				passwd: [
					{ validator: validatePass, trigger: 'blur' }
				],
				passwdCheck: [
					{ validator: validatePassCheck, trigger: 'blur' }
				],
				age: [
					{ validator: validateAge, trigger: 'blur' }
				]
			}
		}
	},
	methods: {
		handleSubmit() {
			this.$router.push({ path: '/main' })
		},
		handleReset(name) {
			this.$refs[name].resetFields();
		}
	}
}
</script>
<style lang="less" scoped>
.jq-page-login {
	width: 100%;
	height: 100%;
	position: relative;
	.jq-page-contain {
		width: 400px;
		height: 300px;
		box-shadow: 0px 0px 5px #999;
		position: absolute;
		top: 40%;
		left: 50%;
		transform: translate(-50%, -50%);
		padding-top: 50px;
		&-login {
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}

	/deep/.ivu-input-wrapper {
		display: block;
		width: 250px;
		margin: 20px 0;
		.ivu-input {
			height: 40px;
		}
		.ivu-input-prefix {
			line-height: 40px;
			.ivu-icon {
				font-size: 24px;
			}
		}
	}
}
</style>