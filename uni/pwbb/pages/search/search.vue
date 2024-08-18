<template>
	<view style="background-color: white;">
		<view class="index-view-searchbar">
			<uni-search-bar class="index-bar-find" radius="100" placeholder="游戏名,昵称,车牌号" clearButton="auto"
				cancelButton="none" @confirm="search" @focus="focus" />
			<view class="index-view-btn">
				<u-button type="primary" shape="circle"
					style="background: linear-gradient(to right,#2fceff,#39a7ff); font-size: large;">搜索</u-button>
				<u-button shape="circle"
					style="color:#1d9aff;font-size: large;margin-left: 1vw;border: none;">取消</u-button>
			</view>

		</view>
		<view class="search-view-result-title">相关品类</view>
		<u-grid :border="false" @click="click" col="4">
			<u-grid-item v-for="(baseListItem,baseListIndex) in baseList" :key="baseListIndex">
				<u-icon :customStyle="{paddingTop:20+'rpx'}" :name="baseListItem.name" :size="22"></u-icon>
				<text class="grid-text">{{baseListItem.title}}</text>
			</u-grid-item>
		</u-grid>
		<view class="search-view-result-title">相关用户</view>
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

<style>
	.index-view-searchbar {
		display: flex;
	}

	.index-bar-find {
		flex: 2
	}

	.index-view-btn {
		display: flex;
		flex: 1;
		color: #5D6BFE;
		align-items: center;
		/* 垂直居中对齐 */
	}

	.search-view-result-title {
		font-size: 5vw;

		margin: 5vw;
	}
</style>