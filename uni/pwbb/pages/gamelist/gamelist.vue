<template>
  <view>
    <view class="game-list">
      <text class="game-list-title">端游</text>
      <u-grid :border="false" @click="handleClick" col="4">
        <u-grid-item v-for="(item, index) in pcGames" :key="index" class="grid-item">
          <image :src="item.icon" class="game-icon"></image>
          <text class="game-name">{{ item.name }}</text>
        </u-grid-item>
      </u-grid>
    </view>
    <view class="game-list">
      <text class="game-list-title">手游</text>
      <u-grid :border="false" @click="handleClick" col="4">
        <u-grid-item v-for="(item, index) in mobileGames" :key="index" class="grid-item">
          <image :src="item.icon" class="game-icon"></image>
          <text class="game-name">{{ item.name }}</text>
        </u-grid-item>
      </u-grid>
    </view>
    <view class="game-list">
      <text class="game-list-title">其他</text>
      <u-grid :border="false" @click="handleClick" col="4">
        <u-grid-item v-for="(item, index) in otherGames" :key="index" class="grid-item">
          <image :src="item.icon" class="game-icon"></image>
          <text class="game-name">{{ item.name }}</text>
        </u-grid-item>
      </u-grid>
    </view>
  </view>
</template>
<script>
  import { rq } from '../../utils/api.js';

  export default {
    data() {
      return {
        pcGames: [],    // 存储端游数据
        mobileGames: [], // 存储手游数据
        otherGames: []  // 存储其他游戏数据
      };
    },
    methods: {
      async loadGames() {
        try {
          const response = await rq({
            url: '/games',
            method: 'GET'
          });
		
          // 假设 response.data 包含分类数据
          this.pcGames = response.filter(data => data.device === 'pc') || [];
          this.mobileGames = response.filter(data => data.device === 'mobile') || [];
          this.otherGames = response.filter(data => data.device !== 'pc' && data.device !== 'mobile') || [];
        } catch (error) {
          console.error('Error loading games:', error);
        }
      },
      handleClick(event) {
        console.log('Grid item clicked:', event);
        // 处理点击事件
      }
    },
    mounted() {
      this.loadGames(); // 在组件挂载时加载数据
    }
  }
</script>
<style>
  .game-list {
    margin: 3vw;
	padding: 3vw;
    border-radius: 2vw;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .grid-item {
    margin-bottom: 2vw;
    text-align: center;
  }

  .game-icon {
    width: 18vw;
    height: 18vw;
    object-fit: cover;
  }

  .game-name {
    display: block;
    margin-top: 5px;
    font-size: 14px;
    color: #333;
  }
  .game-list-title{
	font-size: 5vw;
    color: #333;
    font-weight: bold;
    margin-bottom: 5vw;
	display: block;
  }
</style>
