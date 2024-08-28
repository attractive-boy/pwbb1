<template>
	<view>
		<u-cell-group class="discover-cell-group">
			<u-cell title="平台客服" :isLink="true" arrow-direction="right" value="直接留言,一天内回复">
				<image class="view-image-cellicon" slot="icon"
					src="https://static-package.peiwan.tv/theme/default/img/common/found/server.png" />
			</u-cell>
		</u-cell-group>
		<u-cell-group class="discover-cell-group">
			<u-cell title="关注官方公众号" :isLink="true" arrow-direction="right">
				<image class="view-image-cellicon" slot="icon"
					src="https://static-package.peiwan.tv/theme/default/img/common/found/wecheat.png" />
			</u-cell>
			<u-cell title="常见问题" :isLink="true" arrow-direction="right">
				<image class="view-image-cellicon" slot="icon"
					src="https://static-package.peiwan.tv/theme/default/img/common/found/question.png" />
			</u-cell>
			<u-cell title="封号规则" :isLink="true" arrow-direction="right">
				<image class="view-image-cellicon" slot="icon"
					src="https://static-package.peiwan.tv/theme/default/img/common/found/warn.png" />
			</u-cell>
			<u-cell title="下单功能介绍" :isLink="true" arrow-direction="right">
				<image class="view-image-cellicon" slot="icon"
					src="https://static-package.peiwan.tv/theme/default/img/common/found/order-intro.png" />
			</u-cell>
			<u-cell title="申请陪练步骤" :isLink="true" arrow-direction="right">
				<image class="view-image-cellicon" slot="icon"
					src="https://static-package.peiwan.tv/theme/default/img/common/found/step.png" />
			</u-cell>
			<u-cell title="呼叫陪练介绍" :isLink="true" arrow-direction="right">
				<image class="view-image-cellicon" slot="icon"
					src="https://static-package.peiwan.tv/theme/default/img/common/found/play-intro.png" />
			</u-cell>
			<u-cell title="账号状态检测" :isLink="true" arrow-direction="right">
				<uni-icons slot="icon" fontFamily="eosfont" :size="26" color="rgb(205, 203, 10);">{{'&#xeacd;'}}</uni-icons>
			</u-cell>
		</u-cell-group>
		<u-cell-group class="discover-cell-group">
			<u-cell title="app下载" :isLink="true" arrow-direction="right">
				<uni-icons slot="icon" fontFamily="eosfont" :size="26" color="rgb(254, 126, 135)">{{'&#xe667;'}}</uni-icons>
			</u-cell>
		</u-cell-group>
		<tabbar :currentTab="1"></tabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style scoop>
	.discover-cell-group {
		margin-top: 3vw;
		background-color: white;
	}
	/deep/.u-cell-group{
		margin-top: 3vw;
		background-color: white;
	}
	.view-image-cellicon{
		width: 26px;
		height: 26px;
	}
</style>