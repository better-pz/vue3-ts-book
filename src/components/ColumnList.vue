<template>
  <div class="row">
    <div v-for="column in columnList" :key="column._id">
      <div class="common-card_bgc row_card">
        <a class="card_title">{{ column.title }}</a>
        <session class="card_text common-text_line_3">{{ column.description }}</session>
        <footer class="flex justify-between align-center">
          <div>
            <Tag>2021-10-2</Tag>
          </div>
          <div class="footer-right">
            <Tag>JavaScript</Tag>
            <Tag>vue</Tag>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from "vue";
import Tag from "./base/Tag.vue";
export interface ColumnProps {
  id: number;
  title: string;
  avatar: string;
  description: string;
}
export default defineComponent({
  name: "ColumnList",
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>,
      required: true,
    },
  },
  components: { Tag },
  setup(props) {
    const columnList = computed(() => {
      return props.list.map((column) => {
        if (!column.avatar) {
        }
        return column;
      });
    });
    return {
      columnList,
    };
  },
});
</script>

<style scoped lang="scss" >
.row {
  margin: 0 auto;
  .row_card {
    cursor: pointer;
    background-color: #232324;
    min-height: 220px;
    border-radius: 6px;
    margin: 20px 0;
    padding: 10px;
    overflow: hidden;
    user-select: none;
    transition: all 0.2s;
    &:hover {
      transform: scale(1.02);
    }
    .card_title {
      display: block;
      width: 100%;
      height: 70px;
      font-size: 28px;
      line-height: 80px;
      text-align: center;
    }
    .card_text {
      height: 80px;
      text-indent: 2em;
      color: #dfdfdf;
      font-size: 18px;
      padding: 0 20px;
    }
    footer {
      height: 60px;
      .footer-right {
        span {
          margin-right: 20px;
        }
          
        
      }
    }
  }
}
</style>
