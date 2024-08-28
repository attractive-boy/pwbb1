<template>
	<view style="height: 100vh;overflow-y: scroll;" @scroll="onScroll">
		<view class="container">
			<view class="index-view-searchbar">
				<uni-search-bar class="index-bar-find" radius="100" placeholder="搜索游戏名,昵称,车牌号" clearButton="none"
					cancelButton="none" @confirm="search" @focus="focus" />
				<view class="index-view-call">
					<uni-icons fontFamily="eosfont" :size="26" color="#5D6BFE">{{'&#xe6b9'}}</uni-icons>
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
					<view class="grid-item-box" @click="toGameInfo(item.id)">
						<image class="index-image-game-icon" :src="item.icon" mode="aspectFill" />
						<text class="text">{{item.name}}</text>
					</view>
				</uni-grid-item>
				<uni-grid-item>
					<view class="grid-item-box" @click="moreGame">
						<image class="index-image-game-icon"
							src="https://static-package.peiwan.tv/img/gamelogo/new/more.png?imageView2/1/interlace/1/ignore-error/1/w/91/format/jpg"
							mode="aspectFill" />
						<text class="text">更多品类</text>
					</view>
				</uni-grid-item>
			</uni-grid>
			<br />
			<view class="index-card-call">
				<image src="https://static-package.peiwan.tv/theme/default/img/common/robot.png"></image>
				<view class="index-card-title">
					<text class="index-card-main">快速派单，极速响应</text>
					<text class="index-card-sub">给陪陪推送提醒，顾客每日12次<text
							class="index-card-sub-hightlight">免费</text>派单</text>
				</view>
				<button type="primary" class="index-card-button">呼叫陪练师</button>
			</view>
			<view class="tag-view">
				<u-tabs :list="list1" @click="tabclick" :current="tabIndex">
					<view slot="right" @tap="showgames = true" class="index-view-tag-right">
						<text>更多</text>
					</view>
				</u-tabs>
			</view>
		</view>

		<view class="index-view-player">
			<view class="index-view-player-header">
				<text style="font-size: large;">推荐大神</text>
				<view class="index-view-player-header-filter" @click="show = true">
					<uni-icons fontFamily="eosfont" :size="18" color="#999">{{'&#xe611'}}</uni-icons>
					<text style="margin-left: 10px;font-size: 3vw;color:#999;">性别</text>
				</view>
			</view>

			<view class="index-view-player-item" v-for="(item,index) in list2" :key="index">
				<view class="index-view-player-left">
					<image class="index-image-player-avatar" :src="item.avatar" mode="aspectFill" />
					<view class="index-view-play-voice">
						<image class="index-image-play-voice-left"
							src="https://static-package.peiwan.tv/theme/default/img/common/voice_play.png"
							mode="aspectFill" />
						<image class="index-image-play-voice-center"
							src="https://static-package.peiwan.tv/theme/default/img/common/wave.png" mode="aspectFit" />

						<text style="margin-left: 2vw;">{{item.voice && item.voice.len}}''</text>
					</view>
				</view>
				<view class="index-view-player-right">
					<view class="index-view-player-right-top">
						<view style="display: flex; align-items: center;">
							<text class="index-view-player-right-top-name"
								style="font-size: large; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 30vw;">
								{{ item.nickname }}
							</text>
							<image class="index-image-play-sex" v-if="item.sex==2"
								src="https://static-package.peiwan.tv/theme/default/img/common/sex_2.png"
								mode="aspectFit" />
							<image class="index-image-play-sex" v-else
								src="https://static-package.peiwan.tv/theme/default/img/common/sex_1.png"
								mode="aspectFit" />
						</view>
						<view class="index-view-player-right-top-hot">
							<image src="https://static-package.peiwan.tv/theme/default/img/common/hot.png"
								class="index-image-play-hot" />
							<text class="index-view-player-right-top-hot-text">热度 {{formatExp(item.exp)}}</text>
						</view>
					</view>

					<text class="index-view-player-right-bottom-summary">{{item.summary}}</text>
					<text class="index-view-player-right-bottom-text"
						style="font-weight: 700; color: red; font-size: 6vw;">{{item.price}}<text
							style="color: black; font-size: initial;font-weight: initial">元/小时</text></text>

				</view>
			</view>

		</view>

		<tabbar :currentTab="0"></tabbar>
		<u-popup :show="show" mode="bottom" @close="close">
			<view>
				<view class="index-view-sex-select-title">性别筛选</view>
				<view class="index-view-sex-select">
					<view class="index-view-sex-select-item"
						:class="sex == 0 ? 'index-view-sex-select-item-active' : ''" @click="sex = 0">不限</view>
					<view class="index-view-sex-select-item"
						:class="sex == 1 ? 'index-view-sex-select-item-active' : ''" @click="sex = 1">男生</view>
					<view class="index-view-sex-select-item"
						:class="sex == 2 ? 'index-view-sex-select-item-active' : ''" @click="sex = 2">女生</view>
				</view>
				<u-button text="确定" shape="circle" color="linear-gradient(270deg,#79D7FA 0,#5A93F6 100%)"
					class="index-view-sex-select-confirm" @click="selectSex"></u-button>
			</view>
		</u-popup>
		<u-modal :show="showgames" mode="center" title="游戏选择" @close="showgames = false" :showConfirmButton="false" :closeOnClickOverlay="true" >
			<view class="index-view-games">
				<view class="index-view-games-item" v-for="(item,index) in list1" :key="index">
					<u-tag :text="item.name"  plain size="large" @click="selectgame(item.id)"
					:icon="item.icon"></u-tag>
				</view>
			</view>
			
		</u-modal>
	</view>
</template>

<script>
	import {
		rq
	} from '../../utils/api.js'
	export default {
		data() {
			return {
				info: [],
				current: 0,
				mode: 'round',
				list: [],
				list1: [],
				perPage: 10,
				page: 1,
				list2: [],
				show: false,
				sex: 0,
				type: 1,
				showgames: false,
				tabIndex: 0
			}
		},
		methods: {
			search(e) {

			},
			focus(e) {
				uni.navigateTo({
					url: '/pages/search/search'
				})
			},
			change(e) {
				this.current = e.detail.current
			},
			async loadSwiper() {
				const res = await rq({
					url: '/swipers',
					method: 'GET'
				})
				this.info = res
			},
			async loadGames() {
				const res = await rq({
					url: '/games',
					method: 'GET'
				})
				this.list = res.slice(0, 9)
				this.list1 = res
				await this.tabclick({
					id: res[0].id
				})
			},
			tabclick(e) {
				console.log("tab==>", e)
				this.type = e.id
				this.fetchUser(true)
			},
			async fetchUser(flag) {
				if (flag) {
					this.page = 1
					this.list2 = []
				} else {
					this.page++
				}
				const res = await rq({
					url: '/peiwan',
					method: 'GET',
					data: {
						page: this.page,
						perPage: this.perPage,
						type: this.type,
						sex: this.sex
					}
				})
				this.list2 = [...this.list2, ...res.data.map(item => {
					if (item.voice) {
						try {
							item.voice = JSON.parse(item.voice);
						} catch (error) {
							console.error('Failed to parse voice:', error);
						}
					}
					return item;
				})]
			},
			formatExp(value) {
				if (value >= 10000) {
					// 如果大于或等于 10000，格式化为 '万'
					return (value / 10000).toFixed(1) + '万';
				} else if (value >= 1000) {
					// 如果大于或等于 1000，格式化为 '千'
					return (value / 1000).toFixed(1) + '千';
				} else {
					// 否则直接返回原始值
					return value;
				}
			},
			moreGame() {
				uni.navigateTo({
					url: '/pages/gamelist/gamelist'
				})
			},
			close() {
				this.show = false
			},
			selectSex() {
				this.show = false
				this.fetchUser(true)
			},
			onScroll() {
				//触底查看
				const dom = uni.createSelectorQuery().select('.index-view-player');
				dom.boundingClientRect(data => {
					// console.log(data)
					if (data && data.bottom <= uni.getSystemInfoSync().windowHeight) {
						this.fetchUser(false)
					}
				}).exec();
			},
				
			selectgame(index){
				this.tabIndex = index - 1
				this.tabclick({
					id: index
				})
				this.showgames = false
			},
			toGameInfo(id){
				uni.navigateTo({
					url: '/pages/gameinfo/gameinfo?id=' + id
				})
			}
		},

		mounted() {
			this.loadSwiper()
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

	.index-view-searchbar {
		display: flex;
	}

	.index-bar-find {
		flex: 2
	}

	.index-view-call {
		display: flex;
		flex: 1;
		color: #5D6BFE;
		align-items: center;
		/* 垂直居中对齐 */
	}

	.index-image-swiper {
		width: 100%;
		height: 10vh;
		object-fit: cover;
	}

	.swiper-box {
		height: 10vh;
	}

	.index-image-game-icon {
		width: 10vw;
		height: 10vw;
		object-fit: cover;
	}

	.grid-item-box {
		display: flex;
		flex-direction: column;
		/* 垂直排版 */
		align-items: center;
		/* 水平居中对齐 */
		justify-content: center;
		/* 垂直居中对齐 */
		/* 根据需要设置宽度和高度 */
		width: 100%;
		/* 适应父容器宽度 */
		height: 100%;
		/* 适应父容器高度 */
		margin-top: 3vh;
	}

	.index-card-call {
		display: flex;
		align-items: center;
		background: linear-gradient(108deg, #DEE1FF 0, #F1E9FF 100%);
		border-radius: 2vw;
	}

	.index-card-call image {
		width: 15vw;
		height: 15vw;
		object-fit: cover;
	}

	.index-card-title {
		display: flex;
		flex-direction: column;

	}

	.index-card-main {
		font-weight: 700;
		font-size: 4vw;
	}

	.index-card-sub {
		color: #5D6BFE;
		font-size: smaller;
	}

	.index-card-button {
		width: 18vw;
		font-size: 3vw;
		padding: 0;
		height: 8vw;
	}

	.index-card-sub-hightlight {
		color: red;
	}

	.index-view-tag-right {
		border-radius: 2vw 0 0 2vw;
		background-color: #5D6BFE;
		color: #fff;
		padding: 1vw;
	}

	.index-view-player {
		margin-top: 2vw;
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
		background-color: white;
	}

	.index-view-player-header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.index-view-player-header-left {
		display: flex;
		flex-direction: row;
	}

	.index-view-player-header-right {
		display: flex;
		flex-direction: row;
	}

	.index-view-player-header-right image {
		width: 4vw;
		height: 4vw;
		object-fit: cover;
	}

	.index-view-player-header-right text {
		font-size: 3vw;
	}

	.index-view-player-title {
		font-size: 4vw;
		font-weight: 700;
	}

	.index-view-player-content {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.index-view-player-content-left {
		display: flex;
		flex-direction: column;
	}

	.index-view-player-content-right {
		display: flex;
		flex-direction: column;
	}

	.index-image-player-avatar {
		width: 30vw;
		height: 30vw;
		border-radius: 5vw;
		object-fit: cover;
		margin-top: 5vw;
	}

	.index-view-player-left {
		position: relative;
	}

	.index-view-play-voice {
		position: absolute;
		bottom: -2vw;
		left: 4vw;
		width: 23vw;
		height: 7vw;
		box-shadow: 3px 3px 17px rgba(0, 0, 0, .16);
		background-color: rgba(255, 255, 255, .58);
		border-radius: 2vw;
		display: flex;
		align-items: center;
	}

	.index-image-play-voice-left {
		width: 7vw;
		height: 7vw;
		transform: translateX(-20%);
	}

	.index-image-play-voice {
		position: absolute;
		bottom: 0;
		right: 0;
	}

	.index-image-play-voice-right {
		width: 5vw;
		height: 5vw;
	}

	.index-image-play-voice-center {
		width: 8vw;
		height: 4vw;
	}

	.index-view-player-right {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin-left: 1vw;
		margin-top: 2vw;
		padding: 4vw;
		padding-right: 0;
		width: 100%;
	}

	.index-view-player-right-top {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 100%;
	}

	.index-image-play-sex {
		width: 4vw;
		height: 4vw;
		margin-left: 1vw;
	}

	.index-view-player-right-top-left {
		display: flex;
		flex-direction: column;
	}

	.index-view-player-right-top-left text {
		font-size: 3vw;
	}

	.index-view-player-right-top-left text:nth-child(1) {
		font-size: 4vw;
		font-weight: 700;
	}

	.index-view-player-right-top-left text:nth-child(2) {
		color: #5D6BFE;
	}

	.index-view-player-item {
		display: flex;
		position: relative;
		flex-direction: row;
		justify-content: space-between;
	}

	.index-view-player-right-bottom-summary {
		font-weight: 400;
		color: #797979;
		background: url("https://static-package.peiwan.tv/theme/default/img/common/hi.png") left top no-repeat;
		background-size: 8vw;
		padding-top: 2vw;
		padding-left: 2vw;
		line-height: 5vw;
		/* 最多两排汉字超过... */
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.index-view-player-right-top-hot {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		position: absolute;
		right: -5vw;
	}

	.index-image-play-hot {
		width: 4vw;
		height: 4vw;
		margin-left: 1vw;
	}

	.index-view-player-right-top-hot-text {
		color: #FF6C00;
		line-height: 4vw;
		font-size: 3vw;
		/* 垂直居中 */
		align-items: center;
		margin-left: 1vw;
		width: 20vw;
		float: right;
	}

	.index-view-sex-select-title {
		width: 100%;
		height: 16vw;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 4vw;
		font-weight: 700;
	}

	.index-view-sex-select {
		width: 100%;
		height: 16vw;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
	}

	.index-view-sex-select-item {
		width: 26vw;
		height: 10vw;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #F5F5F5;
		border-radius: 5vw;
		font-size: 4vw;
		font-weight: 700;
	}

	.index-view-sex-select-confirm {
		width: 80vw;
		margin: 5vw auto;
	}

	.index-view-sex-select-item-active {
		border: 1px solid #5A94F6;
		color: #5A94F6;
	}
	.index-view-games{
		/* 一排两个 */
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		max-height: 40vh;
		padding-bottom: 5vh;
		overflow-y: auto;
	}
	.index-view-games-item{
		width: 30vw;
		margin: 1vw 3vw;
	}
</style>