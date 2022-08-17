<template>
    <div class="test">this is test file! {{this.title}} , {{this.test}}</div>
</template>

<script>

export default {
  props: {
      title: {
        type: String,
        default: "default",
      }
    },
    data() {
      return {
        test: "test"
      }
    }
  }
  
</script>

<style lang="less" scoped>
.test{
  color: red;
  margin-left: 100px;
}
</style>
