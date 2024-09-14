<template>
	<view>
		<view class="profile-view-navbar">
			<uni-nav-bar backgroundColor="transparent" :border='false'>
				<block slot="left">
					<view class="profile-view-refresh">
						<uni-icons fontFamily="eosfont" :size="26" color="white">{{'&#xe61e;'}}</uni-icons>
					</view>
				</block>
				<view class="profile-view-navbar-center">

				</view>
		
				<block slot="right">
					<view class="profile-view-money">
						<uni-icons fontFamily="eosfont" :size="26" color="white">{{'&#xec08;'}}</uni-icons>
					</view>
				</block>
			</uni-nav-bar>
		</view>
		<view class="userinfo-background">
			<image :src="userinfo.avatar" mode="widthFix" class="userinfo-background-image"></image>
			<view class="userinfo-background-control">
				<view class="userinfo-background-fans">粉丝数:{{userinfo.praise}}</view>
				<u-button class="userinfo-background-add">＋ 加关注</u-button>
			</view>
			
		</view>
		<view class="userinfo-user">
			<view class="userinfo-user-avatar">
				<image :src="userinfo.avatar" mode="widthFix" class="userinfo-user-avatar-image"></image>
			</view>
			<view class="userinfo-user-tag">
				<view class="userinfo-user-tag-car">车牌号:{{userinfo.uid}}</view>
				<view class="userinfo-user-tag-status">{{userinfo.status == 0 ? '离线' : '在线'}}</view>
			</view>
			<view class="userinfo-user-name">{{userinfo.nickname}}</view>
			<view class="userinfo-user-signature">{{userinfo.signature}}</view>
		</view>
	</view>
</template>

<script>
	import {
		rq
	} from '../../utils/api.js'
	export default {
		data() {
			return {
				userinfo: {}
			}
		},
		methods: {
			async getUserInfo(id){
				
				const res = await rq({
					url: '/peiwan/' + id,
					method: 'GET'
				});
				
				console.log(res)
				this.userinfo = res.data
			}
		},
		onLoad(options) {
			this.getUserInfo(options.id)
		}
	}
</script>

<style>
	.profile-view-navbar {
		/* 透明背景 */
		z-index: 100;
		position: fixed;
		width: 100vw;
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
	.userinfo-background{
		height: 20vh;
		overflow: hidden;
		position: relative;
	}
	.userinfo-background-image{
		width: 100vw;
		height: 20vh;
		overflow: hidden;
	}
	.userinfo-background-control{
		position: absolute;
		bottom: 0;
		right: 0;
		width: 28vw;
		height: 18vw;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}
	.userinfo-background-fans{
		font-size: 3.8vw;
		font-weight: 100;
		color: white;
	}
	.userinfo-background-add{
		width: 20vw;
		height: 8vw;
		font-size: 3vw;
		text-align: center;
		/* nowarp */
		white-space: nowrap;
		font-weight: 100;
		color: white;
		border: none;
		background-color: rgba(0, 0, 0, 0.2);
		margin-top: 2vw;
		margin-right: 2vw;
		margin-bottom: 2vw;
	}
	.userinfo-user{
		position: relative;
	}
	.userinfo-user-avatar-image{
		width: 28vw;
		height: 28vw;
		border-radius: 50%;
		border: 1vw solid white;
		margin: 0 50vw;
		transform: translateY(-50%) translateX(-50%);
	}
	.userinfo-user-tag{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 2vw;
		color: white;
		position: absolute;
		top: 2vw;
		width: 100vw;
	}
	.userinfo-user-tag-car{
		font-size: 3.5vw;
		padding: 0.5vw 2vw;
		border-radius: 0 0.5vw 0.5vw 0;
		font-weight: 100;
		background-color: #14a6e0;
	}
		
	.userinfo-user-tag-status{
		font-size: 3.5vw;
		padding: 0.5vw 2vw;
		border-radius: 0.5vw 0 0vw 0.5vw;
		font-weight: 100;
		background-color: #0dc764;
	}
	
</style>
