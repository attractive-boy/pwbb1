<template>
	<view>
		<!-- 导航栏 -->
		<view class="profile-view-navbar">
			<uni-nav-bar>
				<block slot="left"></block>
				<view class="profile-view-navbar-center">
					<view class="profile-view-navbar-title">
						消息
						<image src="https://static-package.peiwan.tv/theme/default/img/common/clean.png"
							class="profile-view-navbar-title-icon"></image>
					</view>
				</view>
				<block slot="right">
					<view class="profile-view-money">
						<uni-icons fontFamily="eosfont" :size="30" color="#636363">{{'&#xe600;'}}</uni-icons>
					</view>
				</block>
			</uni-nav-bar>
		</view>

		<!-- 菜单 -->
		<view class="messages-view-meum">
			<u-grid :border="false" @click="click">
				<u-grid-item v-for="(baseListItem, baseListIndex) in baseList" :key="baseListIndex">
					<image class="messages-view-meum-image" :src="baseListItem.src"></image>
					<text class="grid-text">{{baseListItem.title}}</text>
				</u-grid-item>
			</u-grid>
			<u-toast ref="uToast" />
		</view>

		<!-- 聊天列表 -->
		<view class="messages-view-chat" @scrolltolower="loadMore">
			<text class="messages-view-chat-warn">请勿相信任何私下交易、存单、代打</text>
			<view v-for="(chat, index) in chatList" :key="index">
				<view class="messages-view-chat-card">
					<image
						:src="`https://peiwan.tv/user/avatar/${chat.from_uid}?imageView2/1/interlace/1/ignore-error/1/w/526/format/jpg`"
						class="chat-avatar"></image>
					<view class="chat-info">
						<view class="chat-info-message">
							<text class="chat-name">{{ chat.tnickname }}
								<view style="display: inline-block;">
									<image class="index-image-play-sex" v-if="chat.tsex==2"
										src="https://static-package.peiwan.tv/theme/default/img/common/sex_2.png"
										mode="aspectFit" />
									<image class="index-image-play-sex" v-else
										src="https://static-package.peiwan.tv/theme/default/img/common/sex_1.png"
										mode="aspectFit" />
								</view>
							</text>
							<text class="chat-last-msg">{{ chat.last_msg }}</text>
						</view>

						<text class="chat-time">{{ formatTime(chat.last_time) }}</text>
					</view>

				</view>
				<u-divider></u-divider>
			</view>
		</view>

		<!-- 自定义TabBar -->
		<tabbar :currentTab="2"></tabbar>
	</view>
</template>

<script>
	import {
		rq
	} from '../../utils/api.js';
	export default {
		data() {
			return {
				baseList: [{
						src: 'https://static-package.peiwan.tv/theme/default/img/common/msg/i2.png',
						title: '我的派单'
					},
					{
						src: 'https://static-package.peiwan.tv/theme/default/img/common/msg/i1.png',
						title: '订单中心'
					},
					{
						src: 'https://static-package.peiwan.tv/theme/default/img/common/msg/i3.png',
						title: '支付账单'
					},
				],
				chatList: [], // 用于存储从后端获取的聊天消息列表
				page: 1, // 当前页码
				limit: 10, // 每页条数
				hasMore: true // 是否有更多数据
			};
		},
		methods: {
			// 获取聊天消息列表
			async getChatList(isLoadMore = false) {
				if (!this.hasMore && isLoadMore) return;

				try {
					const response = await rq({
						url: '/messages',
						method: 'GET',
						data: {
							page: this.page,
							limit: this.limit
						}
					});

					if (response.status == '1') {
						const {
							rows,
							totalPages
						} = response.data;
						if (isLoadMore) {
							this.chatList = [...this.chatList, ...rows];
						} else {
							this.chatList = rows;
						}
						this.hasMore = this.page < totalPages;
					} else {
						this.$refs.uToast.show({
							message: '获取消息失败',
							type: 'error',
						});
					}
				} catch (error) {
					this.$refs.uToast.show({
						message: error.message,
						type: 'error',
					});
				}
			},
			// 格式化时间
			// 格式化时间为“刚刚”、“几分钟前”、“几小时前”、“几天前”、“几个月前”、“几年前”等
			formatTime(timestamp) {
			    const now = new Date();
			    const past = new Date(timestamp);
			    const diff = now - past; // 时间差，单位为毫秒
			
			    const seconds = Math.floor(diff / 1000);
			    const minutes = Math.floor(seconds / 60);
			    const hours = Math.floor(minutes / 60);
			    const days = Math.floor(hours / 24);
			    const months = Math.floor(days / 30);
			    const years = Math.floor(months / 12);
			
			    if (seconds < 60) {
			        return '刚刚';
			    } else if (minutes < 60) {
			        return `${minutes}分钟前`;
			    } else if (hours < 24) {
			        return `${hours}小时前`;
			    } else if (days < 30) {
			        return `${days}天前`;
			    } else if (months < 12) {
			        return `${months}个月前`;
			    } else {
			        return `${years}年前`;
			    }
			},
			// 触底加载下一页
			loadMore() {
				if (this.hasMore) {
					this.page += 1;
					this.getChatList(true);
				}
			},
			// 点击菜单项事件
			click() {
				// 可以在这里处理点击事件逻辑
			}
		},
		created() {
			this.getChatList(); // 页面加载时获取聊天消息列表
		}
	};
</script>

<style scoped>
	.messages-view-meum {
		background-color: white;
		padding-top: 3vw;
		padding-bottom: 3vw;
	}

	.profile-view-navbar-title {

		text-align: center;
		font-size: 4vw;
		font-weight: 600;
		align-self: center;
		display: flex;
		/* 水平居中 */
		justify-content: center;
		align-items: center;
		margin-left: 2vw;
		margin-right: 2vw;

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

	.profile-view-navbar-title-icon {
		width: 4vw;
		height: 4vw;
		margin-left: 2vw;
		background-color: #dbdbdb;
		padding: 1vw;
		border-radius: 50%;
	}

	.messages-view-meum-image {
		width: 15vw;
		height: 15vw;
	}

	.grid-text {
		font-size: 3.5vw;
		color: black;
		margin-top: 2vw;
	}

	.messages-view-chat {
		background-color: white;
		margin-top: 3vw;
		padding: 2vw;
	}

	.messages-view-chat-card {
		display: flex;
		align-items: center;
		background-color: #ffffff;
	}

	.chat-avatar {
		width: 13vw;
		height: 13vw;
		border-radius: 1vw;
		margin-right: 2vw;
	}

	.chat-info {
		flex: 1;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		height: 13vw;
	}

	.chat-name {
		font-size: 4vw;
		font-weight: bold;
	}

	.chat-last-msg {
		font-size: 3.5vw;
		color: #666;
		margin-top: 1vw;
		text-wrap: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		width: 60vw;
	}

	.chat-time {
		font-size: 3vw;
		color: #999;
	}

	.messages-view-chat-warn {
		display: inline-block;
		text-wrap: nowrap;
		font-size: 3vw;
		color: red;
		background-color: #F2F2F2;
		padding: 1vw 5vw;
		margin-left: 50%;
		margin-bottom: 3vw;
		transform: translateX(-50%);
		border-radius: 5vw;
	}

	.index-image-play-sex {
		width: 4vw;
		height: 4vw;
		margin-left: 1vw;
	}
	.chat-info-message{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 13vw;
		
	}
</style>