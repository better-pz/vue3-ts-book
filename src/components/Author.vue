<template>
  <div class="common-card_bgc author">
    <header>
      <img src="../assets/img/author.jpg" alt="Better头像" />
      <div class="author_introduce">
        <div class="author_introduce_name">柏特_Better</div>
        <div class="author_introduce_slogin">{{slogin}}</div>
      </div>
    </header>
    <div class="connect">
      <a href="https://gitee.com/xxpzeng" target="_blank"><svg-icon name="gitee" size="20" class="tag"/></a>
      <a href="https://juejin.cn/user/2999123453419294" target="_blank"><svg-icon name="juejin" size="20" class="tag"/></a>
      <svg-icon name="wechat" size="20" class="tag"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const slogin = ref<String>("永远的不停留,永远的生生不息");

    return { slogin };
  },
});
</script>

<style lang="scss" scoped>
.author {
  width: 100%;
  padding: 10px;
  margin: 20px 0;
  border-radius: 8px;
  text-align: center;
  header {
    img {
      width: 70px;
      border-radius: 50%;
      margin: 20px 0;
    }
    .author_introduce {
      .author_introduce_name {
        font-size: 20px;
        margin-bottom: 10px;
      }
      .author_introduce_slogin {
        font-size: 14px;
        margin-bottom: 10px;
      }
    }
  }
  .connect {
    .tag {
      margin: 0 10px;
      cursor: pointer;
    }
  }
}
</style>