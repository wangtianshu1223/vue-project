<!--  -->
<template>
  <div class='arrtGrandson'>
    {{$attrs.name}} --------
    <span @click="handelHeight">{{$attrs.height}}</span>
  </div>	
</template>

<script>
  export default {
  name: 'arrtGrandson',
  components: {},
  data() {
    return {

    };
  },
  computed: {},
  watch: {},
  methods: {
    handelHeight() {
      this.$emit('update')
    }
  },
  created() {
  },
  mounted() {
    let _this = this
    setTimeout(() => {
       _this.$emit('handleClick')
    },2000)
  },
}
</script>
<style lang='scss' scoped>

</style>