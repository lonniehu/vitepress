# local-storage

```js
export const getLocalStorage = (name) => {
  if (window.localStorage) {
    return window.localStorage[name] ? JSON.parse(window.localStorage[name]) : null
  }
  return null
}

export const setLocalStorage = (name, data) => {
  if (window.localStorage) {
    window.localStorage[name] = JSON.stringify(data)
  }
}

export const clearLocalStorage = (name) => {
  if (getLocalStorage(name) !== null) {
    window.localStorage.removeItem(name)
  }
}
```
