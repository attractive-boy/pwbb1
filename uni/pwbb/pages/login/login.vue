<template>
	<view class="login-view-main">
		<view class="profile-view-navbar">
			<uni-nav-bar>
				<block slot="left">
					<view class="profile-view-refresh">
						<uni-icons fontFamily="eosfont" :size="26" color="#636363">{{'&#xe61e;'}}</uni-icons>
					</view>
				</block>
				<view class="profile-view-navbar-center">
					<view class="profile-view-navbar-title">
						快速注册登录
					</view>
				</view>

				<block slot="right">
					<view class="profile-view-money">
						<uni-icons fontFamily="eosfont" :size="26" color="#636363">{{'&#xe658;'}}</uni-icons>
					</view>
				</block>
			</uni-nav-bar>
		</view>
		<view class="login-view-agree">
			<u-avatar src="https://static-package.peiwan.tv/logo.png" size="70"></u-avatar>
			<view class="login-view-checkbox">
				<u-checkbox-group style="flex-direction: row;" class="login-view-checkbox-group"
					v-model="checkboxValue1" placement="column" >
					<u-checkbox name="check">
					</u-checkbox>
					<view class="login-view-agree-text">
						我已阅读并同意<text class="login-view-agree-text-info">《用户协议》</text>和<text
							class="login-view-agree-text-info">《隐私政策》</text>
					</view>
				</u-checkbox-group>

			</view>
			<view class="login-view-login">
				点击账号登录 >>
			</view>
		</view>
		<u-divider text="无需输入,一键快速注册/登录"></u-divider>
		<view class="login-view-loginbtn">
			<text class="login-view-login-warn">若需注册陪练必须绑定微信，请使用微信登录</text>
			<u-button shape="circle" size="large" class="login-view-login-btn" @click="login">
				<uni-icons fontFamily="eosfont" :size="26" color="white">{{'&#xe8bb;'}}</uni-icons>
				微信授权注册/登录
			</u-button>
		</view>
		<u-modal :show="show" :title="title" >
			<view class="slot-content">
				<view class="login-view-agree-text" style="font-size: large;">
					<text class="login-view-agree-text-info">《用户协议》</text>和<text
						class="login-view-agree-text-info">《隐私政策》</text>
				</view>
			</view>
			<view slot="confirmButton" class="login-view-loginwx">
				<u-button shape="square" size="medium" @click="show = false">取消</u-button>
				<u-button color="#5D6BFE" type="primary" shape="square" size="medium" @click="agree" style="margin-left: 3vw;">同意并继续</u-button>
			</view>
		</u-modal>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title:"请阅读并同意以下条款",
				show: false,
				checkboxValue1: [],
			}
		},
		methods: {
			login() {
				console.log(this.checkboxValue1)
				if (this.checkboxValue1.length == 0) {
					this.show = true
				} else {
					
				}
			},
			agree() {
				this.show = false
				this.checkboxValue1 = ['check']
				console.log(this.checkboxValue1)
				this.login()
			}

		}
	}
</script>

<style>
	.login-view-main {
		background-color: white;
		height: 100vh;
	}

	.profile-view-navbar-title {

		text-align: center;
		font-size: 4vw;
		font-weight: 600;
		align-self: center;

	}

	.profile-view-refresh {
		margin-left: 2vw;
	}

	.profile-view-money {
		margin-right: 2vw;
	}

	.profile-view-navbar-center {
		width: 100%;
		display: flex;
		/* 水平居中 */
		justify-content: center;
	}

	.login-view-agree {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 20vw;
	}

	.login-view-agree-text-info {
		color: #007AFF;
	}

	.login-view-agree-text {
		margin-left: 2vw;
	}

	.login-view-checkbox {
		margin-left: 2vw;
	}

	.login-view-login {
		margin-top: 10vw;
		text-align: right;
		color: #007AFF;
		width: 80vw;
		font-size: large;
	}

	.login-view-login-btn {
		background: linear-gradient(#3c6, #56df88);
		font-size: 4vw;
		margin: 10vw;
		width: 80vw;
		color: white;
	}

	.login-view-checkbox-group {
		margin-top: 5vw;
	}

	.login-view-login-warn {
		display: block;
		/* font-weight: bold; */
		font-size: large;
		color: #ff0000;
		margin: 10vw;
		width: 80vw;
		text-align: center;
	}
	.login-view-loginwx{
		display: flex;
		justify-content: space-around;
		/* 间距 */
		margin-top: 5vw;
		font-size: large;
	}
	.login-view-loginwx .u-button{
		border-radius: 2vw;
		height: 10vw;
	}
</style>