<template>
	<view class="container">
		<view class = "index-view-searchbar">
			<uni-search-bar class = "index-bar-find" radius="100" placeholder="搜索游戏名,昵称,车牌号" clearButton="none" cancelButton="none" @confirm="search" />
			<view class="index-view-call">
				<i>⚡</i>
				<text>呼叫陪练师</text>
			</view>
			
		</view>
		
		<uni-swiper-dot :info="info" :current="current" field="content" :mode="mode">
			<swiper class="swiper-box" @change="change">
				<swiper-item v-for="(item ,index) in info" :key="index">
					<view class="swiper-item">
						<!-- {{item.content}} -->
						<image class="index-image-swiper" :src="item.thumb" alt="image" />
					</view>
				</swiper-item>
			</swiper>
		</uni-swiper-dot>
		<uni-grid :column="5" :show-border="false" :square="false" @change="change">
			<uni-grid-item v-for="(item ,index) in list" :index="index" :key="index">
				<view class="grid-item-box">
					<image class="index-image-game-icon" :src="item.icon" mode="aspectFill" />
					<text class="text">{{item.name}}</text>
				</view>
			</uni-grid-item>
			<uni-grid-item>
				<view class="grid-item-box">
					<image class="index-image-game-icon" :src="img_more" mode="aspectFill" />
					<text class="text">更多品类</text>
				</view>
			</uni-grid-item>
		</uni-grid>
		<br />
		<view class="index-card-call">
			<image :src="img_robot"></image>
			<view class="index-card-title">
				<text class="index-card-main">快速派单，极速响应</text>
				<text class="index-card-sub">给陪陪推送提醒，顾客每日12次<text class="index-card-sub-hightlight">免费</text>派单</text>
			</view>
			<button type="primary" class="index-card-button">呼叫陪练师</button>
		</view>
	</view>
</template>

<script>
	import { rq } from '../../utils/api.js';
	import { img_more, img_robot } from '../../utils/config.js'
	export default {
		data() {
			return {
				info: [],
				current: 0,
				mode: 'round',
				list: [],
				img_more: img_more,
				img_robot: img_robot
			}
		},
		methods: {
			search(e){
				
			},
			change(e) {
				this.current = e.detail.current
			},
			async loadSwiper(){
				const res = await rq({ url: '/swipers', method: 'GET'})
				this.info = res
			},
			async loadGames(){
				const res = await rq({ url: '/games', method: 'GET'})
				this.list = res.slice(0, 9)
			}
		},
		mounted() {
			this.loadSwiper();
			this.loadGames()
		}
	}
</script>

<style>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
		background-color: white;
	}
	.index-view-searchbar{
		display: flex;
	}
	.index-bar-find{
		flex:2
	}
	.index-view-call{
		display: flex;
		flex: 1;
		color: #5D6BFE;
		align-items: center; /* 垂直居中对齐 */
	}
	.index-image-swiper{
		width: 100%;
		height: 10vh;
		object-fit: cover;
	}
	.swiper-box{
		height: 10vh;
	}
	.index-image-game-icon{
		width: 10vw;
		height: 10vw;
		object-fit: cover;
	}
	.grid-item-box {
	  display: flex;
	  flex-direction: column; /* 垂直排版 */
	  align-items: center;    /* 水平居中对齐 */
	  justify-content: center; /* 垂直居中对齐 */
	  /* 根据需要设置宽度和高度 */
	  width: 100%;  /* 适应父容器宽度 */
	  height: 100%; /* 适应父容器高度 */
	  margin-top: 3vh;
	}
	.index-card-call{
	  display: flex;
	  justify-content: center;
	}
	.index-card-call image{
		width: 15vw;
		height: 15vw;
		object-fit: cover;
	}
	.index-card-title{
		display: flex;
		flex-direction: column;
		
	}
	.index-card-main{
		font-weight: 700;
		font-size: 5vw;
	}
	.index-card-sub{
		color: #5D6BFE;
		font-size: smaller;
	}
	.index-card-button{
		width: 18vw;
		font-size: 3vw;
		padding: 0;
		height: 8vw;
	}
	.index-card-sub-hightlight{
		color: red;
	}
</style>
