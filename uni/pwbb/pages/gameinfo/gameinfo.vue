<template>
	<view>
		<view class="profile-view-navbar">
			<uni-nav-bar>
				<block slot="left">
					<view class="profile-view-refresh">
						<uni-icons fontFamily="eosfont" :size="26" color="#636363">{{'&#xe61e;'}}</uni-icons>
					</view>
				</block>
				<view class="profile-view-navbar-center">
					<view class="profile-view-navbar-title">
						{{gameName}}
					</view>
				</view>

				<block slot="right">
					<view class="profile-view-money">
						<uni-icons fontFamily="eosfont" :size="26" color="#636363">{{'&#xec08;'}}</uni-icons>
					</view>
				</block>
			</uni-nav-bar>
		</view>
		<view class="gameinfo-collapse-filter">
			<view class="gameinfo-collapse-filter-item" style="border-right: 1px solid #a0a0a0;" @click="setFilter(1)"
				:class="filter == 1 ? 'active' : ''">
				<text style="font-size: 23px; color: #a0a0a0;">{{orderText}}</text><uni-icons
					:class="filter == 1 ? 'filter-icon-up' : 'filter-icon-down' " fontFamily="eosfont" :size="23"
					color="#a0a0a0">{{'&#xe61e;'}}</uni-icons>
			</view>
			<view class="gameinfo-collapse-filter-item" @click="setFilter(2)" :class="filter == 2 ? 'active' : ''">
				<text style="font-size: 23px;color: #a0a0a0;">筛选</text><uni-icons
					:class="filter == 2 ? 'filter-icon-up' : 'filter-icon-down' " fontFamily="eosfont" :size="23"
					color="#a0a0a0">{{'&#xe61e;'}}</uni-icons>
			</view>
		</view>
		<view style="position: relative;">
			<u-overlay :show="show" @click="show = false" style="position: absolute;top:0;width: 100vw;height: 100vh;">
				<view class="gameinfo-collapse-filter-panel" v-if="filter == 1">
					<view class="gameinfo-collapse-filter-panel-item" @click="setOrder(1)">
						<text :class="order == 1 ? 'panel-item-text-active' : 'panel-item-text' ">魅力排序</text>
						<uni-icons v-if="order == 1" fontFamily="eosfont" :size="20"
							color="#249dff">{{'&#xe63f;'}}</uni-icons>
					</view>

					<view class="gameinfo-collapse-filter-panel-item" @click="setOrder(2)">
						<text :class="order == 2 ? 'panel-item-text-active' : 'panel-item-text' ">最新加入</text>
						<uni-icons v-if="order == 2" fontFamily="eosfont" :size="20"
							color="#249dff">{{'&#xe63f;'}}</uni-icons>
					</view>

					<view class="gameinfo-collapse-filter-panel-item" @click="setOrder(3)">
						<text :class="order == 3 ? 'panel-item-text-active' : 'panel-item-text' ">回头率</text>
						<uni-icons v-if="order == 3" fontFamily="eosfont" :size="20"
							color="#249dff">{{'&#xe63f;'}}</uni-icons>
					</view>
				</view>
				<view class="gameinfo-collapse-filter-panel filter-2" v-if="filter == 2" @tap.stop>
					<text class="filter-2-lable">性别</text>
					<view class="filter-2-select">
						<view class="filter-2-select-option" :class="sex == 0 ? 'filter-2-select-item-active' : ''"
							@click="sex = 0">全部</view>
						<view class="filter-2-select-option" :class="sex == 1 ? 'filter-2-select-item-active' : ''"
							@click="sex = 1">只看 男</view>
						<view class="filter-2-select-option" :class="sex == 2 ? 'filter-2-select-item-active' : ''"
							@click="sex = 2">只看 女</view>
					</view>
					<text class="filter-2-lable">语音</text>
					<view class="filter-2-select">
						<view class="filter-2-select-option" :class="voice == 0 ? 'filter-2-select-item-active' : ''"
							@click="voice = 0">全部</view>
						<view class="filter-2-select-option" :class="voice == 1 ? 'filter-2-select-item-active' : ''"
							@click="voice = 1">有语音</view>
					</view>
					<u-button type="primary" class="gameinfo-collapse-filter-panel-button"
						@click="filterclick">确定</u-button>
				</view>
			</u-overlay>
		</view>
		<view @scroll="onScroll" :scroll-y="true" style="overflow-y: scroll; height: 80vh;">
			<view class="gameinfo-view-quick">
				<u-button class="gameinfo-down-one">快速下单<uni-icons fontFamily="eosfont" :size="26"
						color="#fff">{{'&#xe8b6;'}}</uni-icons></u-button>
				<text class="gameinfo-down-one-text">给在线能立即接单的陪练发送抢单提醒</text>
			</view>
			<view class="gameinfo-user-list">
				<view v-for="(item,index) in list" :key="index" class="gameinfo-item" @click="toUserProfile(item.id)">
					<view class="gameinfo-item-left">
						<view class="avatar-frame">
							<image class="gameinfo-item-left-image" :src="item.avatar"></image>
						</view>
						<view class="gameinfo-item-left-info">
							<image src="https://static-package.peiwan.tv/img/play2.gif" class="gameinfo-play-icon">
							</image>
							<view class="gameinfo-play-time">{{item.voice && item.voice.len}}''</view>
						</view>
					</view>
					<view class="gameinfo-item-right">
						<view class="gameinfo-item-right-info-top">
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
							<view class="gameinfo-money-time">{{item.price}}元/小时</view>
						</view>
						<view class="gameinfo-item-right-info-center">
							<text class="index-view-player-right-bottom-summary">{{item.summary}}</text>
						</view>
						<view class="gameinfo-item-right-info-bottom">
							<view class="gameinfo-item-right-info-onlinetime">
								<uni-icons fontFamily="eosfont" :size="26" color="#333">{{'&#xe65f;'}}</uni-icons>

								<text style="margin-left: 1vw;">{{convertTime(item.worktime)}} - {{convertTime(item.offtime)}}</text>
							</view>
							<view style="display: flex; flex-direction: row; align-items: center;">
								<view v-if="order == 3" class="gameinfo-item-right-info-backrate">回头率:
									{{item.lately_turnback_rate / 100}} %
								</view>
								<view v-else class="gameinfo-item-right-info-backrate">{{formatExp(item.exp)}} 热度
								</view>
								<u-button class="gameinfo-item-right-info-btn" color="#89c284">下单</u-button>
							</view>
						</view>
					</view>
				</view>
			</view>
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
				gameName: '游戏名称',
				filter: 0,
				show: false,
				order: 1,
				orderText: '魅力排序',
				page: 1,
				perPage: 10,
				type: 0,
				sex: 0,
				voice: 0,
				loading: false,
				hasMore: true,
				list: []
			}
		},
		methods: {
			setFilter(index) {
				if (this.filter == index) {
					this.filter = 0
					this.show = false
				} else {
					this.filter = index
					this.show = true
				}
			},
			setOrder(index) {
				this.order = index
				this.show = false
				this.filter = 0
				if (index == 1) {
					this.orderText = '魅力排序'
				} else if (index == 2) {
					this.orderText = '最新加入'
				} else if (index == 3) {
					this.orderText = '回头率'
				}
			},

			filterclick() {
				this.filter = 0
				this.show = false
			},
			async loadMore(flag) {
				if (this.loading || !this.hasMore) return;
				this.loading = true;
				if (flag) {
					this.page = 1;
					this.list = [];
				}

				try {
					const res = await rq({
						url: '/peiwan',
						method: 'GET',
						data: {
							page: this.page,
							perPage: this.perPage,
							type: this.type,
							sex: this.sex,
							voice: this.voice
						}
					});

					if (res.length < this.perPage) {
						this.hasMore = false;
					} else {
						this.page += 1;
					}

					this.list = [...this.list, ...res.data.map(item => {
						if (item.voice) {
							try {
								item.voice = JSON.parse(item.voice);
							} catch (error) {
								console.error('Failed to parse voice:', error);
							}
						}
						return item;
					})];
				} catch (error) {
					console.error('加载数据失败', error);
				} finally {
					this.loading = false;
				}
			},
			onScroll() {
				//触底查看
				const dom = uni.createSelectorQuery().select('.gameinfo-user-list');
				dom.boundingClientRect(data => {
					// console.log(data)
					if (data && data.bottom <= uni.getSystemInfoSync().windowHeight) {
						this.loadMore(false)
					}
				}).exec();
			},
			convertTime(ms) {
				// 将毫秒转换为日期对象
				const date = new Date(ms);

				// 获取小时和分钟，并确保它们是两位数
				const hours = date.getUTCHours().toString().padStart(2, '0');
				const minutes = date.getUTCMinutes().toString().padStart(2, '0');

				// 返回格式化的时间字符串
				return `${hours}:${minutes}`;
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
			toUserProfile(id) {
				uni.navigateTo({
					url: `/pages/userinfo/userinfo?id=${id}`,
				});
			}
		},
		//读取参数 设置标题
		async onLoad(options) {
			const gameid = options.id;
			const res = await rq({
				url: `/games/${gameid}`,
				method: 'GET'
			});
			this.gameName = res.name;
			this.type = gameid;

			// 初始化加载
			this.loadMore();

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

	.gameinfo-collapse-filter {
		display: flex;
		width: 100vw;
		flex-direction: row;
		justify-content: center;
		align-items: flex-start;
	}

	.gameinfo-collapse-filter-item {
		display: flex;
		justify-content: center;
		margin: 3vw 0;
		height: 5vw;
		width: 50vw;
	}

	.u-collapse-content {
		width: 100vw;
	}

	.gameinfo-collapse-filter-title {
		font-size: large;
		color: #a0a0a0;
	}

	.filter-icon-up {
		transform: rotate(90deg);
	}

	.filter-icon-down {
		margin-left: 1vw;
		transform: rotate(270deg);
	}

	.active * {
		color: #249dff !important;
	}

	.gameinfo-down-one {
		width: 40vw;
		height: 12vw;
		background: linear-gradient(to right, #2fceff, #39a7ff);
		color: #fff;
		font-size: 20px;
		margin: 2vw auto;
		border-radius: 1vw;
		box-shadow: 0 0 0.6vw 0.3vw rgba(0, 0, 0, .15);
		border: none;
	}

	.gameinfo-view-quick {
		background-color: #fff;
		padding: 2vw;
	}

	.gameinfo-down-one-text {
		display: block;
		text-align: center;
		font-size: 3vw;
		color: #a0a0a0;
		margin-bottom: 1vw;
	}

	.gameinfo-collapse-filter-panel {
		background-color: white;
		z-index: 1000;
	}

	.panel-item-text {
		font-size: 4vw;
		color: #a0a0a0;
	}

	.panel-item-text-active {
		font-size: 4vw;
		color: #249dff;
	}

	.gameinfo-collapse-filter-panel-item {
		margin: 0 4vw;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #eee;
		height: 11vw;
	}

	.gameinfo-collapse-filter-panel-button {
		font-size: 4vw;
		border-radius: 1vw;
		margin-top: 3vw;
	}

	.filter-2 {
		padding: 3vw;
	}

	.filter-2-lable {
		color: #9b9b9b;
		font-size: large;
		margin: 2vw 0;
		display: block;
	}

	.filter-2-select {
		display: flex;
		flex-direction: row;
		justify-content: start;
		align-items: center;
	}

	.filter-2-select-option {
		width: 20vw;
		height: 8vw;
		border-radius: 1vw;
		border: 1px solid #eee;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-right: 3vw;
		color: #212121;
		font-size: large;
	}

	.filter-2-select-item-active {
		border: 1px solid #249dff;
		color: #249dff;
	}

	.gameinfo-item {
		display: flex;
		margin: 3vw;
		padding: 2vw;
		border-bottom: 1px solid #eee;
		background-color: white;
		border-radius: 2vw;
	}

	.gameinfo-item-left {
		display: flex;
		flex-direction: column;
	}

	.gameinfo-item-left-image {
		width: 15vw;
		height: 15vw;
		border: 1.5vw solid #6db9ff;
	}

	.avatar-frame {}

	.gameinfo-item-left-info {
		background-color: #6db9ff;
		width: 18vw;
		height: 5vw;
		display: flex;
		/* 两端对其 居中 横向排列 */
		justify-content: space-between;
		align-items: center;
		border-radius: 0.3vw;
	}

	.gameinfo-play-icon {
		width: 2vw;
		height: 3vw;
		margin-left: 2vw;
	}

	.gameinfo-play-time {
		margin-right: 2vw;
		color: white;
	}

	.index-image-play-sex {
		width: 4vw;
		height: 4vw;
		margin-left: 1vw;
	}

	.index-view-player-right-top-name {
		margin-left: 1vw;
	}

	.gameinfo-money-time {
		font-size: 4vw;
		color: #ff4a2f;
		font-weight: 500;
	}

	.gameinfo-item-right-info-top {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 70vw;
	}

	.index-view-player-right-bottom-summary {
		font-weight: 400;
		color: #797979;

		padding-top: 2vw;
		padding-left: 1vw;
		line-height: 5vw;
		/* 最多两排汉字超过... */
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.gameinfo-item-right-info-bottom {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 70vw;
	}

	.gameinfo-item-right-info-btn {
		width: 11vw;
		color: white;
		font-weight: 800;
		border-radius: 1vw;
		margin-left: 1vw;
	}

	.gameinfo-item-right-info-backrate {
		color: #ccc;
	}

	.gameinfo-item-right-info-onlinetime {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
</style>