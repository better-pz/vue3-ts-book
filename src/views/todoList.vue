<template >
  <div class="todolist">
    <header>
      <input type="text" v-model="name" />
      <button @click="add">添加</button>
    </header>
    <main>
      <div class="listItem" v-for="item in state.list " :key="item.id">
        <span>{{item.name}}</span>
        <button @click="del(item.name)">删除</button>
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { Todo } from "../types/todolist";
const state = reactive<{ list: Todo[] }>({
  list: [
    {
      id: 1,
      name: "css",
    },
    {
      id: 2,
      name: "js",
    },
    {
      id: 3,
      name: "ts",
    },
  ],
});
const name = ref<string>("");
const add = (): void => {
  const obj = {
    id: Date.now(),
    name: name.value,
  };
  state.list.unshift(obj);
};
const del = (name: string): void => {
  state.list = state.list.filter((item) => name !== item.name);
};
</script>

<style lang="scss" scoped>
.todolist {
  width: 429px;
  margin: 0 auto;
  header {
    input {
      box-sizing: border-box;
      margin: 0;
      font-variant: tabular-nums;
      list-style: none;
      font-feature-settings: "tnum";
      position: relative;
      display: inline-block;
      width: 300px;
      height: 32px;
      padding: 4px 11px;
      color: rgba(0, 0, 0, 0.65);
      font-size: 14px;
      line-height: 1.5;
      background-color: #fff;
      background-image: none;
      border: 1px solid #d9d9d9;
      border-radius: 4px;
      transition: all 0.3s;
      &:focus {
        outline: 0;
        box-shadow: 0 0 0 2px rgb(24 144 255 / 20%);
      }
    }
    button {
      cursor: pointer;
      width: 78px;
      height: 32px;
      border: 1px solid #1890ff;
      background-color: #1890ff;
      color: #fff;
      border-radius: 3px;
      margin-left: 50px;
      &:hover {
        background-color: #40a9ff;
        border-color: #40a9ff;
      }
    }
  }
  main {
    width: 100%;
    min-height: 300px;
    .listItem {
      height: 42px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      button {
        cursor: pointer;
        width: 68px;
        height: 32px;
        border: 1px solid #ff4d4f;
        background-color: #ff4d4f;
        color: #fff;
        border-radius: 3px;

        &:hover {
          background-color: #ff7875;
          border-color: #ff7875;
        }
      }
    }
  }
}
</style>