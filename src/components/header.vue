<template>
<header>
  <div class="header-min">
    <div class="header-left">
      <div class="header-name">Better</div>
      <div class="header-slogan">成为更好的自己</div>
    </div>
    <div class="header-right">
      <div class="header-list" v-for="item in navList" :key="item.id"><svg-icon :name="item.icon"  /><span>{{item.title}}</span></div>
    </div>
  </div>
</header>
  
</template>
<script lang="ts" setup>
import { defineComponent, ref, onMounted } from 'vue'

export interface List {
  id: string;
  title: string;
  icon?: string;
  url?: string;
}

const navList = ref<List[]>([
  {id:'1111',title:'博客文章',icon:'book'},
  {id:'2222',title:'组件',icon:'component'},
  {id:'3333',title:'项目',icon:'project'},

])
</script>


<style lang="scss" scoped>
header {
  background: #fff;
  border-bottom: 1px solid #eee;
  z-index: 10;
  .header-min {
  width: 860px;
  margin: 0 auto;
  padding: 10px 24px;
  line-height: 30px;
  position: relative;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  .header-left {
    height: 32px;
    display: flex;
    .header-name {
      color: #1890ff;
      text-decoration: none;
      background-color: transparent;
      outline: none;
      cursor: pointer;
      -webkit-transition: color 0.3s;
      transition: color 0.3s;
      &:hover {
        color: #40a9ff;
      }
    }
    .header-slogan {
      font-size: 0.6rem;
      color: #999;
      display: inline-block;
      padding-left: 0.3rem;
    }
  }
   .header-right { 
     display: flex;
     height: 32px;
     .header-list {
       margin-left: 16px;
       height: 32px;
       line-height: 32px;
       span {
         cursor: pointer;
         margin-left: 3px;
         color: #999;
         font-size: .9rem;
       }
       
     }
  }
}
}

</style>