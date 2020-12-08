// 定义一个混入对象：（这里是局部混入，全局混入官网详见：https://cn.vuejs.org/v2/guide/mixins.html）
//具体混入对象和组件直接的使用详见： https://cn.vuejs.org/v2/guide/mixins.html
//在demoA.vue 和 demeB.vue混入以后，两个组件里就都拥有了, hello方法，并自动在created中执行
export const mininx = {
  //组件中的其他属性 都可写在这里
  methods: {
      hello: function (msg='') {
          console.log('hello from mixin!' + msg);
      }
  },
  created: function () {
      // this.hello();
      // 同名钩子函数将合并为一个数组，因此都将被调用。另外，混入对象的钩子将在组件自身钩子之前调用。
      console.log('混入对象-created');
  }
}