<template>
	<u-tabbar
		:value="value6"
		@change="handleTabChange"
		:fixed="true"
		:placeholder="true"
		:safeAreaInsetBottom="true"
	>
		<u-tabbar-item text="首页">
		        <image
		            class="u-page__item__slot-icon"
		            slot="active-icon"
		            src="https://static-package.peiwan.tv/theme/default/img/common/footer/home-cur.png"
		        ></image>
		        <image
		            class="u-page__item__slot-icon"
		            slot="inactive-icon"
		            src="https://static-package.peiwan.tv/theme/default/img/common/footer/home.png"
		        ></image>
		    </u-tabbar-item>
		    
		    <u-tabbar-item text="发现">
		        <image
		            class="u-page__item__slot-icon"
		            slot="active-icon"
		            src="https://static-package.peiwan.tv/theme/default/img/common/footer/found-cur.png"
		        ></image>
		        <image
		            class="u-page__item__slot-icon"
		            slot="inactive-icon"
		            src="https://static-package.peiwan.tv/theme/default/img/common/footer/found.png"
		        ></image>
		    </u-tabbar-item>
		    
		    <u-tabbar-item text="消息">
		        <image
		            class="u-page__item__slot-icon"
		            slot="active-icon"
		            src="https://static-package.peiwan.tv/theme/default/img/common/footer/msg-cur.png"
		        ></image>
		        <image
		            class="u-page__item__slot-icon"
		            slot="inactive-icon"
		            src="https://static-package.peiwan.tv/theme/default/img/common/footer/msg.png"
		        ></image>
		    </u-tabbar-item>
		    
		    <u-tabbar-item text="我的">
		        <image
		            class="u-page__item__slot-icon"
		            slot="active-icon"
		            src="https://static-package.peiwan.tv/theme/default/img/common/footer/my-cur.png"
		        ></image>
		        <image
		            class="u-page__item__slot-icon"
		            slot="inactive-icon"
		            src="https://static-package.peiwan.tv/theme/default/img/common/footer/my.png"
		        ></image>
		    </u-tabbar-item>
	</u-tabbar>
</template>

<script>
	export default {
		data() {
			return {
				value6: 0
			}
		},
		methods: {
			handleTabChange(name) {
				// 根据选中的 tab 值跳转到不同的页面
				switch (name) {
					case 0:
						uni.switchTab({ url: '/pages/index/index' }); // 跳转到首页
						break;
					case 1:
						uni.switchTab({ url: '/pages/discover/discover' }); // 跳转到发现页
						break;
					case 2:
						uni.navigateTo({ url: '/pages/messages/messages' }); // 跳转到消息页
						break;
					case 3:
						uni.navigateTo({ url: '/pages/profile/profile' }); // 跳转到我的页
						break;
					default:
						break;
				}
			}
		}
	}
</script>

<style>
	.u-page__item__slot-icon{
		width: 6vw;
		height: 6vw;
		
	}
</style>
