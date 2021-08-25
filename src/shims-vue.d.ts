declare module '*.vue' {
  import { DefineComponent } from "vue"
  const component: DefineComponent<{}, {}, any>
  export default component
}
// 类文件(也叫定义文件)，因为.vue结尾的文件在ts中不认可，所以要有定义文件