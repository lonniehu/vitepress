# JS Utils

## 验证中文

```js
const isChineseChars = value => /^((?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]))+$/g.test(value);

//中文名字
const isChineseName = value => /^(?:[\u4e00-\u9fa5·]{2,16})$/g.test(value);

```


## 验证身份证号

```js
const isIDCard = value => /^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}[\dXx]$/g.test(value);
```

## 获取浏览器url里的queryString

```js
const getUrlQueryString = () => {
  const searchQuery = window.location.search.replace(/^\?/, '')

  let hashQuery = window.location.hash.split('?')
  if (hashQuery.length > 1) {
    hashQuery = hashQuery[1]
  } else {
    hashQuery = ''
  }

  if (hashQuery && searchQuery) {
    return `${hashQuery}&${searchQuery}`
  }

  if (hashQuery) {
    return `${hashQuery}`
  }

  if (searchQuery) {
    return `${searchQuery}`
  }

  return ''
}
```

## 滚动到指定元素区域

```js
const smoothScroll = element =>{
    document.querySelector(element).scrollIntoView({
        behavior: 'smooth'
    });
};
```