<template>
  <div class="row">
    <div v-for="column in columnList" :key="column._id">
      <div class="common-card_bgc row_card">
        <a class="card_title">{{ column.title }}</a>
        <session class="card_text common-text_line_3">{{ column.description }}</session>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from "vue";

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
  max-width: 1000px;
  margin: 0 auto;
  .row_card {
    background-color: #232324;
    min-height: 220px;
    border-radius: 6px;
    margin: 20px 0;
    padding: 10px;
    overflow: hidden;
    user-select: none;
    transition: all 0.2s;
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
  }
}
</style>
