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
			<view class="profile-view-content-uid">UID:{{uid}}</view>
			<view class="profile-view-content-item">
				<view class="profile-view-content-item-left">
					<view class="profile-view-content-item-left-img">
						<u-avatar :src="src" size="80"></u-avatar>
						<view class="profile-view-content-item-left-text">
							<view class="profile-view-content-item-left-text-name">
								请登录
							</view>
							<view class="profile-view-content-item-left-level1">
								<image class="profile-image-progress-icon"
									src="https://static-package.peiwan.tv/theme/default/img/common/love.png"></image>
								<u-line-progress :percentage="0" activeColor="#ff0000"></u-line-progress>
							</view>
							<view class="profile-view-content-item-left-level2">
								<image class="profile-image-progress-icon"
									src="https://static-package.peiwan.tv/theme/default/img/common/diamond.png"></image>
								<u-line-progress :percentage="0" activeColor="#ff0000"></u-line-progress>
							</view>
						</view>
					</view>

				</view>
				<view class="profile-view-content-item-right">
					<uni-icons type="arrowright" size="20" color="#636363"></uni-icons>
				</view>
			</view>
			<view class="profile-view-content-money">
				<view class="profile-view-content-money-item">
					<view class="profile-view-content-money-item-num">
						0.00
					</view>
					<view class="profile-view-content-money-item-text">
						余额
					</view>
				</view>
				<view class="profile-view-content-money-item">
					<view class="profile-view-content-money-item-num">
						0
					</view>
					<view class="profile-view-content-money-item-text">
						热度包
					</view>
				</view>
				<view class="profile-view-content-money-item">
					<view class="profile-view-content-money-item-num">
						0
					</view>
					<view class="profile-view-content-money-item-text">
						粉丝
					</view>
				</view>

			</view>
		</view>
		<view class="profile-view-function">
			<text class="profile-view-function-title_text">常用功能</text>
			<uni-grid :column="4" :showBorder="false"  :square="false" class="profile-view-function-grid">
				<uni-grid-item class="profile-view-function-grid-item">
					<uni-icons style="text-align: center;" fontFamily="eosfont" :size="30" color="rgb(150, 136, 125)">{{'&#xe658;'}}</uni-icons>
					<text class="text">个人主页</text>
				</uni-grid-item>
				<uni-grid-item class="profile-view-function-grid-item">
					<uni-icons style="text-align: center;"  fontFamily="eosfont" :size="30" color="rgb(26, 107, 208)">{{'&#xe631;'}}</uni-icons>
					<text class="text">我的等级</text>
				</uni-grid-item>
				<uni-grid-item class="profile-view-function-grid-item">
					<uni-icons style="text-align: center;"  fontFamily="eosfont" :size="30" color="rgb(230, 151, 20)">{{'&#xe6b0;'}}</uni-icons>
					<text class="text">充值余额</text>
				</uni-grid-item>
				<uni-grid-item class="profile-view-function-grid-item">
					<uni-icons style="text-align: center;"  fontFamily="eosfont" :size="30" color="rgb(132, 211, 157)">{{'&#xe604;'}}</uni-icons>
					<text class="text">我的举报</text>
				</uni-grid-item>
				<uni-grid-item class="profile-view-function-grid-item">
					<uni-icons style="text-align: center;"  fontFamily="eosfont" :size="30" color="rgb(79, 82, 176)">{{'&#xe622;'}}</uni-icons>
					<text class="text">游戏名片</text>
				</uni-grid-item>
			</uni-grid>
		</view>
		<view class="profile-view-function">
			<text class="profile-view-function-title_text">订单</text>
			<uni-grid :column="4" :showBorder="false"  :square="false">
				<uni-grid-item class="profile-view-function-grid-item">
					<uni-icons style="text-align: center;"  fontFamily="eosfont" :size="30" color="rgb(47, 47, 47)">{{'&#xe607;'}}</uni-icons>
					<text class="text">订单中心</text>
				</uni-grid-item>
				<uni-grid-item class="profile-view-function-grid-item">
					<uni-icons  style="text-align: center;" fontFamily="eosfont" :size="30" color="rgb(154, 171, 19)">{{'&#xe8b6;'}}</uni-icons>
					<text class="text">我的派单</text>
				</uni-grid-item>
				<uni-grid-item class="profile-view-function-grid-item">
					<uni-icons style="text-align: center;"  fontFamily="eosfont" :size="30" color="rgb(230, 151, 20)">{{'&#xe610;'}}</uni-icons>
					<text class="text">支付账单</text>
				</uni-grid-item>
				<uni-grid-item class="profile-view-function-grid-item">
					<uni-icons style="text-align: center;"  fontFamily="eosfont" :size="30" color="rgb(63, 162, 153)">{{'&#xe65e;'}}</uni-icons>
					<text class="text">有偿邀请</text>
				</uni-grid-item>
				
			</uni-grid>
		</view>
		<view class="profile-view-function">
			<text class="profile-view-function-title_text">陪练</text>
			<uni-grid :column="4" :showBorder="false"  :square="false">
				<uni-grid-item class="profile-view-function-grid-item">
					<uni-icons style="text-align: center;"  fontFamily="eosfont" :size="30" color="rgb(56, 60, 232)">{{'&#xe69e;'}}</uni-icons>
					<text class="text">申请陪练</text>
				</uni-grid-item>
				<uni-grid-item class="profile-view-function-grid-item"> 
					<uni-icons style="text-align: center;"  fontFamily="eosfont" :size="30" color="rgb(153, 167, 255)">{{'&#xe66b;'}}</uni-icons>
					<text class="text">我的热度包</text>
				</uni-grid-item>
				
				
			</uni-grid>
		</view>
		<view class="profile-view-function">
			<text class="profile-view-function-title_text">设置/关于</text>
			<uni-grid :column="4" :showBorder="false"  :square="false">
				<uni-grid-item class="profile-view-function-grid-item">
					<uni-icons style="text-align: center;"  fontFamily="eosfont" :size="30" color="rgb(150, 136, 125)">{{'&#xe851;'}}</uni-icons>
					<text class="text">用户设置</text>
				</uni-grid-item>
				<uni-grid-item class="profile-view-function-grid-item">
					<uni-icons style="text-align: center;"  fontFamily="eosfont" :size="30" color="rgb(208, 134, 12)">{{'&#xe631;'}}</uni-icons>
					<text class="text">实名认证</text>
				</uni-grid-item>
				<uni-grid-item class="profile-view-function-grid-item">
					<uni-icons style="text-align: center;"  fontFamily="eosfont" :size="30" color="rgb(63, 162, 153)">{{'&#xe607;'}}</uni-icons>
					<text class="text">备案资质</text>
				</uni-grid-item>
				<uni-grid-item class="profile-view-function-grid-item"> 
					<uni-icons style="text-align: center;"  fontFamily="eosfont" :size="30" color="rgb(102, 102, 102)">{{'&#xe62e;'}}</uni-icons>
					<text class="text">通知设置</text>
				</uni-grid-item>
				<uni-grid-item class="profile-view-function-grid-item">
					<uni-icons style="text-align: center;"  fontFamily="eosfont" :size="30" color="rgb(154, 171, 19)">{{'&#xe8a1;'}}</uni-icons>
					<text class="text">首页设置</text>
				</uni-grid-item>
			</uni-grid>
		</view>
		<view style="height: 3vw;"></view>
		<tabbar :currentTab="3"></tabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src: 'https://pqapp-image.peiwan.tv/202210/d85ab9b830bf4e1232107b1fe16706d16121b4ba.png',
				uid: ''
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
		margin-top: 4vw;
	}

	.profile-view-content-item {
		padding: 3vw;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	.profile-view-content {
		background-image: url('https://static-package.peiwan.tv/theme/default/img/common/msgBg.png');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
	}

	.profile-view-content-item-left-level1 {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-top: 2vw;
		width: 60vw;
	}

	.profile-view-content-item-left-level2 {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-top: 2vw;
		width: 60vw;
	}

	.profile-view-content {
		position: relative;
	}

	.profile-view-content-uid {
		position: absolute;
		right: 0;
		top: 0;
		height: 4vw;
		line-height: 4vw;
		font-size: 4vw;
		padding: 1vw 2vw;
		color: #fff;
		background-color: #14a6e0;
		border-bottom-left-radius: 2vw;
	}

	.profile-image-progress-icon {
		width: 3vw;
		height: 3vw;
		margin-right: 1vw;
		display: inline-block;
	}
	.profile-view-content-money{
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-top: 2vw;
		padding-bottom: 3vw;
		width: 100vw;
		/* space-around */
		justify-content: space-around;
	}
	.profile-view-content-money-item-text{
		font-size: 3vw;
		color: #999;
		/* 水平居中 */
		align-items: center;
	}
	.profile-view-content-money-icon{
		width: 3vw;
		height: 3vw;
		margin-right: 1vw;
		display: inline-block;
	}
	.profile-view-content-money-text-value{
		font-size: 3vw;
		color: #636363;
	}
	.profile-view-content-money-item-num{
		font-size: 5vw;
		color: #000;
		padding-bottom: 1vw;
		font-family: DINAlternate-Bold, DINAlternate;
		font-weight: 700;
		align-items: center;
	}
	.profile-view-content-money-icon{
		width: 3vw;
		height: 3vw;
		margin-right: 1vw;
		display: inline-block;
	}
	.profile-view-content-money-text-value{
		font-size: 3vw;
		color: #636363;
	}
	.profile-view-content-money-item{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: relative;
		width: 33.33%;
	}
	.profile-view-content-money-item:not(:last-child)::after {
	  content: '';
	  position: absolute;
	  right: 0;
	  top: 50%;
	  transform: translateY(-50%);
	  width: 1px;
	  height: 60%;
	  background-color: #ccc; /* 分割线颜色 */
	}
	.profile-view-function{

		margin-top: 2vw;
		width: 94vw;
		margin-left: 3vw;
		border-radius: 2vw;
		background-color: #fff;
		padding: 2vw 0;
		margin-bottom: 3vw;
	}
	.profile-view-function-title_text{
		font-size: 4vw;
		font-weight: 700;
		margin-left: 4vw;
		margin-top: 4vw;
	}
	.profile-view-function-grid-item{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 25%;
		padding-top: 4vw;
	}
	.profile-view-function-grid-item .text{
		font-size: 3.5vw;
		margin-top: 2vw;
		/* 水平居中 */
		text-align: center;
	}


</style>