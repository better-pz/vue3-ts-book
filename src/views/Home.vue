<template>
  <div class="content">
    <Header />
    <!--  -->
    <main>
      <div class="main-left animated bounceInLeft">
        <ColumnList :list="testData" />
      </div>
      <div class="main-right animated bounceInRight">
        <Author />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import ColumnList from "../components/ColumnList.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Author from "../components/Author.vue";

export interface ColumnProps {
  id: number;
  title: string;
  description: string;
}
export default defineComponent({
  name: "Home",
  components: {
    ColumnList,
    Header,
    Footer,
    Author,
  },
  setup() {
    const data = reactive<{ testData: ColumnProps[] }>({
      testData: [
        {
          id: 1,
          title: "test1的专栏",
          description:
            "巴拉巴拉巴拉卡巴拉那看那看看那可能卡年卡哪款那款男生科技大赛科技地科技司ID加上就嗲杰斯顿静安寺大祭司2加速度计的骄傲是大家收集2ID阿金斯大家啊司机",
        },
        {
          id: 2,
          title: "test2的专栏",
          description:
            "巴拉巴拉巴拉卡巴拉那看那看看那可能卡年卡哪款那款男生科技大赛科技地科技司ID加上就嗲杰斯顿静安寺大祭司2加速度计的骄傲是大家收集2ID阿金斯大家啊司机",
        },
        {
          id: 3,
          title: "test3的专栏",
          description:
            "这是的test3专栏，有一段非常有意思的简介，可以更新一下欧,巴拉巴拉巴拉卡巴拉那看那看看那可能卡年卡哪款那款男生科技大赛科技地科技司ID加上就嗲杰斯顿静安寺大祭司2加速度计的骄傲是大家收集2ID阿金斯大家啊司机",
        },
        {
          id: 4,
          title: "test4的专栏",
          description:
            "巴拉巴拉巴拉卡巴拉那看那看看那可能卡年卡哪款那款男生科技大赛科技地科技司ID加上就嗲杰斯顿静安寺大祭司2加速度计的骄傲是大家收集2ID阿金斯大家啊司机",
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
      padding: 0.3rem;
      border-radius: 0.3rem;
      margin-bottom: 16px;
      width: 72%;
    }
    .main-right {
      padding: 0.3rem;
      border-radius: 0.3rem;
      margin-bottom: 16px;
      width: 28%;
    }
  }
}
</style>
