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
      testData: []
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
