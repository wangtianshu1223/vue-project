<!-- listenersChild -->
<!-- 包含了父作用域中不作为 prop 被识别 (且获取) 的特性绑定 (class 和 style 除外)。当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 (class 和 style 除外)，并且可以通过 v-bind="$attrs" 传入内部组件——在创建高级别的组件时非常有用 -->
<template>
  <div class='listenersChild'>
    <arrtGrandson v-bind="$attrs" v-on="$listeners" :height="height"></arrtGrandson>
    {{height}}
  </div>	
</template>

<script>
  import arrtGrandson from '../components/attrGrandson'
  export default {
  name: 'listenersChild',
  components: { arrtGrandson },
  data() {
    return {
      height: '180px',

    };
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {
    
  },
}
</script>
<style lang='scss' scoped>

</style>