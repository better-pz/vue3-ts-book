<template>
  <span :class="classes" :style="{ backgroundColor: color }">
    <slot></slot>
  </span>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import type { PropType } from "vue";
import { isValidComponentSize } from "../../types/validators";
import type { ComponentSize } from "../../types/baseUI";
export default defineComponent({
  name: "BeTag",
  props: {
    type: {
      type: String as PropType<"success" | "info" | "woring" | "dangger" | "">,
      default: "",
    },
    color: {
      type: String,
      default: "",
    },
    size: {
      type: String as PropType<ComponentSize>,
      validator: isValidComponentSize,
    },
  },
  setup(props) {
    const classes = computed(() => {
      const { type } = props;
      return ["be-tag", type ? `be-tag--${type}` : ""];
    });

    return { classes };
  },
});
</script>

<style lang="scss" scoped>
.be-tag {
  display: inline-block;
  height: 30px;
  font-size: 18px;
  padding: 0 10px;
  color: rgb(223, 223, 223);
  background-color: rgb(58, 58, 58);
  border: 1px solid rgb(58, 58, 58);
  border-radius: 8px;
}
.be-tag--success {
  background-color: #f0f9eb;
  border-color: #e1f3d8;
  color: #67c23a;
  &:hover {
    color: #67c23a;
  }
}
</style>