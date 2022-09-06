<template>
  <div
    class="virtual-scroller"
    @scroll="onScroll"
    :style="{ height: containerHeight + 'px' }"
  >
    <!-- 实际渲染的列表内容 -->
    <ul
      class="real-list-content"
      :style="{ transform: `translateY(${translateY}px)` }"
    >
      <li
        v-for="item in visibleList"
        :key="item.id"
        :style="{
          height: `${listItemHeight}px`,
          'line-height': `${listItemHeight}px`,
        }"
      >
        <div>{{ item.name }}</div>
      </li>
    </ul>

    <!-- 虚拟列表元素 -->
    <div class="virtual-height" :style="{ height: virtualHeight + 'px' }">
      ~ 数据加载完毕 ~
    </div>
  </div>
</template>

<script>
const list = (num = 10) => {
  const data = [];
  for (let i = 0; i < num; i++) {
    data.push({
      id: i + 1,
      name: `第 ${i + 1} 条列表`
    });
  }
  return data;
}

export default {
  data() {
    return {
      data: list(2000),
      startIndex: 0,
      endIndex: 10,
      listItemHeight: 60,
      containerHeight: 600,
      translateY: 0,
    }
  },
  computed: {
    visibleList() {
      return this.data.slice(this.startIndex, this.endIndex);
    },
    virtualHeight() {
      return (this.data.length - this.visibleList.length) * this.listItemHeight + this.listItemHeight;
    }
  },
  methods: {
    onScroll(e) {
      const eleScrollTop = e.target.scrollTop;
      // 保证实际渲染列表一直停留在可视区
      this.translateY = eleScrollTop;
      // 根据实际的滚动距离，动态计算列表开始索引
      this.startIndex = Math.floor(eleScrollTop / this.listItemHeight);
      // 基于开始索引
      this.endIndex = this.startIndex + 10;
      window.console.log('onScroll', e.target.scrollTop, this.startIndex, this.endIndex)
    }
  }
}
</script>

<style>
.virtual-scroller {
  background-color: aquamarine;
}

.virtual-scroller {
  height: 600px;
  margin-top: 10px;
  overflow: auto;
  border: solid 1px #eee;
}

.virtual-height {
  display: flex;
  align-items: end;
  justify-content: center;
  color: #fff;
  background: red;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

li {
  color: #fff;
  background-color: #000;
  outline: solid 1px #fff;
}

</style>
