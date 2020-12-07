<!-- listener传参 -->
<!-- 包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。它可以通过 v-on="$listeners" 传入内部组件——在创建更高层次的组件时非常有用 -->
<template>
  <div class='listeners'>
    <listenersChild @update="update"  @handleClick="handleClick" :name="name" :age="age" ></listenersChild>
    {{listeners}}
  </div>	
</template>

<script>
/****
 * 实现A-C组件之间传递使用$listeners、$attrs
 * B组件实现中间件的作用 再B组件中像C级组件中绑定v-bind="$attrs"、v-on="$listeners"
 * <arrtGrandson v-bind="$attrs" v-on="$listeners"></arrtGrandson>
 * 再C组件中直接使用$attr获取，非prop中定义的值，有不包括style、class等属性
 * C组件直接一个使用this.$emit('handleClick') 来控制父级组件的值
 */
import listenersChild from '@/components/listenersChild.vue'
  export default {
  name: 'listeners',
  components: { listenersChild },
  data() {
    return {
      listeners: false,
      name: 'wts',
      age: '20'
    };
  },
  computed: {},
  watch: {},
  methods: {
    update() {
      console.log('update')
      this.name = "测试"
    },
    handleClick() {
      console.log('handleClick')
      this.listeners = true
    }
  },
  created() {

  },
  mounted() {

  },
}
</script>
<style lang='scss' scoped>

</style>