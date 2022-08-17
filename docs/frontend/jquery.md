# $()函数的四种调用方法

## 作为css选择器，以字符串的方式传入参数

```js
$('button.green > p')
```

## 传递一个DOM对象或者document对象，window对象给$()

```js
$(document.getElementsByTagName("li")[2]).css("color","blue");
```

## 传递一个HTML文本给$(),这时$()自动创建这个元素

```js
$("<h3>前端</h3>").appendTo(document.body);
```

## 传递一个函数给$()，DOM加载完成事件监听，是$(document).ready()的简化写法。

```js
$(function (){

});
```