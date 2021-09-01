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
      <a href="https://gitee.com/xxpzeng" target="_blank">
        <svg-icon name="gitee" size="20" class="tag" />
      </a>
      <a href="https://juejin.cn/user/2999123453419294" target="_blank">
        <svg-icon name="juejin" size="20" class="tag" />
      </a>
      <el-popover
        placement="top-start"
        :width="200"
        :show-arrow="false"
        trigger="hover"
        content="我的微信"
        color="rgb(180, 180, 0)"
        popper-class="tag_popover"
      >
        <template #reference>
          <svg-icon name="wechat" size="20" class="tag" />
        </template>
      </el-popover>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, ref } from "vue";
import { ElPopover } from "element-plus";
const slogin = ref<String>("永远的不停留,永远的生生不息");
</script>
<style lang="scss">
.connect {
  .el-popper__arrow:before {
    background: #2c2f39;
  }
}
</style>
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
    .tag_popover {
      border-radius: 10px;
      overflow: hidden;
      padding: 0;
    }
    .tag {
      margin: 0 10px;
      cursor: pointer;
    }
  }
}
</style>