<template>
  <div class="test">this is test file! {{ title }} , {{ test }}</div>
</template>

<script>

export default {
  props: {
    title: {
      type: String,
      default: 'default',
    },
  },
  data() {
    return {
      test: 'test',
    };
  },
};

</script>

<style lang="less" scoped>
.test {
  margin-left: 100px;
  color: #f00;
}
</style>
