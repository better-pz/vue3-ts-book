<template>
  <div class="content">
    <Header />
    <!-- <ColumnList :list="testData" /> -->
    <main>
      <div class="main-left"></div>
      <div class="main-right"></div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import ColumnList from "../components/ColumnList.vue";
import Header from "../components/Header.vue";
export interface ColumnProps {
  id: number;
  title: string;
  avatar: string;
  description: string;
}
export default defineComponent({
  name: "Home",
  components: {
    ColumnList,
    Header,
  },
  setup() {
    const data = reactive<{ testData: ColumnProps[] }>({
      testData: [
        {
          id: 1,
          title: "test1的专栏",
          description:
            "这是的test1专栏，有一段非常有意思的简介，可以更新一下欧",
          avatar:
            "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100",
        },
        {
          id: 2,
          title: "test2的专栏",
          description:
            "这是的test2专栏，有一段非常有意思的简介，可以更新一下欧",
          avatar:
            "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100",
        },
      ],
    });
    const refData = toRefs(data);
    return {
      ...refData,
    };
  },
});
</script>
<style lang="scss" scoped>
.content {
  main {
    margin-top: 0.5rem !important;
    width: 1100px;
    margin: 0 auto;
     
      display: flex;
    .main-left {
     background-color: #fff;
      padding: 0.3rem;
      border-radius: 0.3rem;
      border: 1px solid #eee;
      margin-bottom: 16px;
      width: 75%;
    }
    .main-right {
      background-color: #fff;
      padding: 0.3rem;
      border-radius: 0.3rem;
      border: 1px solid #eee;
      margin-bottom: 16px;
      width: 22%;
    }
  }
}
</style>
