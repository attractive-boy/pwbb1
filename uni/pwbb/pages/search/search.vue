<template>
    <view style="background-color: white; min-height: 100vh;" @scrolltolower="onScrollToLower" scroll-y="true">
        <view class="index-view-searchbar">
            <uni-search-bar class="index-bar-find" radius="100" placeholder="游戏名,昵称,车牌号" clearButton="auto" v-model="query" cancelButton="none" @confirm="search(false)" />
            <view class="index-view-btn">
                <u-button type="primary" shape="circle" style="background: linear-gradient(to right,#2fceff,#39a7ff); font-size: large;" @click="search(false)">搜索</u-button>
                <u-button shape="circle" style="color:#1d9aff;font-size: large;margin-left: 1vw;border: none;">取消</u-button>
            </view>
        </view>
        
        <view v-if="baseList.length > 0">
            <view class="search-view-result-title">相关品类</view>
            <u-grid :border="false" @click="click" col="4">
                <u-grid-item v-for="(baseListItem, baseListIndex) in baseList" :key="baseListIndex" style="margin-bottom: 2vw;">
                    <image :src="baseListItem.icon" class="search-view-result-title-icon"></image>
                    <text class="grid-text">{{baseListItem.name}}</text>
                </u-grid-item>
            </u-grid>
        </view>

        <view v-if="users.length > 0">
            <view class="search-view-result-title">相关用户</view>
            <view class="search-view-result-user-card" style="margin-left: 5vw;">
                <view v-for="(userItem, userIndex) in users" :key="userIndex">
                    <view class="search-view-result-user-card-item" style="margin-top:3vw;">
                        <view>
                            <image :src="userItem.avatar" class="search-view-result-user-card-item-avatar"></image>
                        </view>
                        <view style="height: 20vw;">
                            <view>
                                <view class="search-view-result-user-card-item-name">{{userItem.nickname}}</view>
                                <image class="index-image-play-sex" v-if="userItem.sex==2" src="https://static-package.peiwan.tv/theme/default/img/common/sex_2.png" mode="aspectFit" />
                                <image class="index-image-play-sex" v-else src="https://static-package.peiwan.tv/theme/default/img/common/sex_1.png" mode="aspectFit" />
                            </view>
                            <view class="text-ellipsis">{{userItem.summary}}</view>
                        </view>
                    </view>
                    <u-divider text=""></u-divider>
                </view>
            </view>
        </view>

        <view v-if="baseList.length == 0 && users.length == 0 && searched == true">
            <view class="search-view-no-result">暂无陪练,下拉刷新看看？</view>
        </view>
    </view>
</template>

<script>
    import { rq } from '../../utils/api.js'
    export default {
        data() {
            return {
                query: '',
                baseList: [],
                users: [],
                page: 1,
                searched: false
            }
        },
        methods: {
            async search(loadMore = false) {
                if (!loadMore) {
                    this.page = 1;
                    this.baseList = [];
                    this.users = [];
                } else {
                    this.page += 1;
                }

                const res = await rq({
                    url: '/search',
                    method: 'GET',
                    data: {
                        keyword: this.query,
                        page: this.page
                    }
                });

                this.baseList = [...this.baseList, ...res.games];
                this.users = [...this.users, ...res.users];
                this.searched = true;
            },

            onScrollToLower() {
                this.search(true);
            }
        },

        onReachBottom() {
            this.search(true);
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
        font-size: 4vw;
        margin: 5vw;
    }

    .search-view-result-title-icon {
        width: 10vw;
        height: 10vw;
    }

    .search-view-result-user-card-item-avatar {
        width: 20vw;
        height: 20vw;
        border-radius: 2vw;
    }

    .search-view-result-user-card-item-name {
        font-size: 5vw;
        display: inline-block;
        margin-left: 1vw;
    }

    .search-view-result-user-card-item {
        display: flex;
        align-items: center;
    }

    .index-image-play-sex {
        width: 4vw;
        height: 4vw;
        margin-left: 2vw;
    }

    .text-ellipsis {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-left: 1vw;
        color: #999;
        margin-top: 2vw;
        margin-right: 5vw;
    }
    .search-view-no-result{
        color:#333;
        width: 100vw;
        text-align: center;
        font-size: large;
    }
</style>
