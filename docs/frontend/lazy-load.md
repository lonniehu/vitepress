## lazy load

```js
let lazyLoadByDefault = function (imgs) {
  var H = document.documentElement.clientHeight;
  var S = document.documentElement.scrollTop || document.body.scrollTop;
  for (var i = 0; i < imgs.length; i++) {
    var rect = imgs[i].getBoundingClientRect();
    if (rect.top <= H) {
      if (imgs[i].getAttribute('data-loading') == 'lazy' && imgs[i].getAttribute('data-src')) {
        let src = decodeURI(imgs[i].getAttribute('data-src'));
        imgs[i].src = src;
        imgs[i].removeAttribute('data-loading');
        console.log(new Date(), src);
      }
    }
  }
};

export default {
  data() {
    return {};
  },
  mounted: function () {
    var init = function () {
      console.log('onscroll');
      var imgs = document.querySelectorAll('.box .item img');
      console.log(imgs);
      lazyLoadByDefault(imgs);
    };
    window.onload = window.onscroll = init;
    init();
  },
};
```

<script setup>
import lazyLoad from '../../src/components/lazy-load.vue'
</script>

<lazy-load/>
