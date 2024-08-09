<template>
	<view>
		<view class="profile-view-navbar">
			<uni-nav-bar>
				<block slot="left">
					<view class="profile-view-refresh">
						<uni-icons fontFamily="eosfont" :size="26" color="#636363">{{'&#xec08'}}</uni-icons>
					</view>
				</block>
				<view class="profile-view-navbar-center">
					<view class="profile-view-navbar-title">
						我的
					</view>
				</view>

				<block slot="right">
					<view class="profile-view-money">
						<uni-icons fontFamily="eosfont" :size="26" color="#636363">{{'&#xe610'}}</uni-icons>
					</view>
				</block>
			</uni-nav-bar>
		</view>
		<view class="profile-view-content">
			<view class="profile-view-content-item">
				<view class="profile-view-content-item-left">
					<view class="profile-view-content-item-left-img">
						<u-avatar :src="src" size="80"></u-avatar>
						<view class="profile-view-content-item-left-text">
							<view class="profile-view-content-item-left-text-name">
								请登录
							</view>
							<view class="profile-view-content-item-left-level1">
								<u-line-progress :percentage="30" activeColor="#ff0000"></u-line-progress>
							</view>
							<view class="profile-view-content-item-left-level2">
								<u-line-progress :percentage="30" activeColor="#ff0000"></u-line-progress>
							</view>
						</view>
					</view>
					<view class="profile-view-content-item-right">
						<uni-icons type="arrowright" size="20" color="#636363"></uni-icons>
					</view>
				</view>
			</view>
		</view>
		<view class="profile-view-function">
			<uni-section class="mb-10" title="常用功能"></uni-section>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src: 'https://pqapp-image.peiwan.tv/202210/d85ab9b830bf4e1232107b1fe16706d16121b4ba.png'
			}
		}
	}
</script>

<style>
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
	.profile-view-content-item-left-img {
		display: flex;
		align-items: center;
	}

	.profile-view-content-item-left-text-name {
		font-size: 4vw;
		font-weight: 600;
	}

	.profile-view-content-item-left-text-id {
		font-size: 3vw;
		color: #636363;
	}

	.profile-view-content-item-left-text {
		margin-left: 3vw;
	}

	.profile-view-content-item-right {
		margin-left: 3vw;
	}

	.profile-view-content-item-left {
		display: flex;
		align-items: center;
	}

	.profile-view-content-item {
		padding: 3vw;
		background-color: #FFFFFF;
	}
	.profile-view-content {
		background-image: url('https://static-package.peiwan.tv/theme/default/img/common/msgBg.png');
	}
</style>