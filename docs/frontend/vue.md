## vue eventbus

### 初始化——全局定义
全局定义，可以将eventBus绑定到vue实例的原型上,也可以直接绑定到window对象上.
```js
//绑定到Vue
Vue.prototype.$eventBus = new Vue();
//绑定到Window
window.eventBus = new Vue();
```

### 触发事件
```js
//绑定到Vue
this.$eventBus.$emit('eventName', param1, param2, ...)
//绑定到Window
eventBus.$emit('eventName', param1, param2, ...)
```

### 监听事件
```js
//绑定到Vue
this.$eventBus.$on('eventName', (param1, param2, ...) => {
  // handler here
})
//绑定到Window
eventBus.$on('eventName', (param1, param2, ...) => {
  // handler here
})
```

### 移除监听事件
为了避免在监听时，事件被反复触发，通常需要在页面销毁时移除事件监听。或者在开发过程中，由于热更新，事件可能会被多次绑定监听，这时也需要移除事件监听。
```js
//绑定到Vue
this.$eventBus.$off('eventName')
//绑定到Window
eventBus.$off('eventName')
```

## vue 动态路由，通过 api 接口获取配置路由
 - https://blog.csdn.net/qq_42460461/article/details/114585903

## vue 动态 form 表单字段的联动展示和隐藏（启用和禁用可类似）
 - https://www.yuque.com/chaojie-vjiel/vbwzgu/loffm6#wOVyc
 - https://github.com/dream2023/vue-ele-form