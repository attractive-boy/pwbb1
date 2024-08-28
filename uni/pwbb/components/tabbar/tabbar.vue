<template>
	<u-tabbar :value="currentTab" @change="handleTabChange" :fixed="true" :placeholder="true"
		:safeAreaInsetBottom="true">
		<u-tabbar-item text="首页" :url="'/pages/index/index'">
			<image class="u-page__item__slot-icon" slot="active-icon"
				src="https://static-package.peiwan.tv/theme/default/img/common/footer/home-cur.png"></image>
			<image class="u-page__item__slot-icon" slot="inactive-icon"
				src="https://static-package.peiwan.tv/theme/default/img/common/footer/home.png"></image>
		</u-tabbar-item>

		<u-tabbar-item text="发现" :url="'/pages/discover/discover'">
			<image class="u-page__item__slot-icon" slot="active-icon"
				src="https://static-package.peiwan.tv/theme/default/img/common/footer/found-cur.png"></image>
			<image class="u-page__item__slot-icon" slot="inactive-icon"
				src="https://static-package.peiwan.tv/theme/default/img/common/footer/found.png"></image>
		</u-tabbar-item>

		<u-tabbar-item text="消息" :url="'/pages/messages/messages'">
			<image class="u-page__item__slot-icon" slot="active-icon"
				src="https://static-package.peiwan.tv/theme/default/img/common/footer/msg-cur.png"></image>
			<image class="u-page__item__slot-icon" slot="inactive-icon"
				src="https://static-package.peiwan.tv/theme/default/img/common/footer/msg.png"></image>
		</u-tabbar-item>

		<u-tabbar-item text="我的" :url="'/pages/profile/profile'">
			<image class="u-page__item__slot-icon" slot="active-icon"
				src="https://static-package.peiwan.tv/theme/default/img/common/footer/my-cur.png"></image>
			<image class="u-page__item__slot-icon" slot="inactive-icon"
				src="https://static-package.peiwan.tv/theme/default/img/common/footer/my.png"></image>
		</u-tabbar-item>
	</u-tabbar>
</template>

<script>
	export default {
		props: {
			currentTab: {
				type: Number,
				default: 0
			}
		},
		methods: {
			handleTabChange(index) {
				const tabPaths = [
					'/pages/index/index',
					'/pages/discover/discover',
					'/pages/messages/messages',
					'/pages/profile/profile'
				];
				uni.switchTab({
					url: tabPaths[index]
				});
			},
		}
	};
</script>

<style scoped>
	.u-page__item__slot-icon {
		width: 6vw;
		height: 6vw;
	}
</style>
