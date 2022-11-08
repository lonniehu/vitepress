<template>
  <div class="box">
    <div class="item">
      <img
        src="https://www.intogif.com/resource/image/loading/default.gif"
        data-src="https://source.unsplash.com/collection/679805/600x550/?sig=1"
        data-loading="lazy"
        alt="1"
      />
    </div>
    <div class="item">
      <img
        src="https://www.intogif.com/resource/image/loading/default.gif"
        data-src="https://source.unsplash.com/collection/679805/600x550/?sig=2"
        data-loading="lazy"
        alt="2"
      />
    </div>
    <div class="item">
      <img
        src="https://www.intogif.com/resource/image/loading/default.gif"
        data-src="https://source.unsplash.com/collection/679805/600x550/?sig=3"
        data-loading="lazy"
        alt="3"
      />
    </div>
    <div class="item">
      <img
        src="https://www.intogif.com/resource/image/loading/default.gif"
        data-src="https://source.unsplash.com/collection/679805/600x550/?sig=4"
        data-loading="lazy"
        alt="4"
      />
    </div>
    <div class="item">
      <img
        src="https://www.intogif.com/resource/image/loading/default.gif"
        data-src="https://source.unsplash.com/collection/679805/600x550/?sig=5"
        data-loading="lazy"
        alt="5"
      />
    </div>
    <div class="item">
      <img
        src="https://www.intogif.com/resource/image/loading/default.gif"
        data-src="https://source.unsplash.com/collection/679805/600x550/?sig=6"
        data-loading="lazy"
        alt="6"
      />
    </div>
    <div class="item">
      <img
        src="https://www.intogif.com/resource/image/loading/default.gif"
        data-src="https://source.unsplash.com/collection/679805/600x550/?sig=7"
        data-loading="lazy"
        alt="7"
      />
    </div>
    <div class="item">
      <img
        src="https://www.intogif.com/resource/image/loading/default.gif"
        data-src="https://source.unsplash.com/collection/679805/600x550/?sig=8"
        data-loading="lazy"
        alt="8"
      />
    </div>
  </div>
</template>

<script>
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
</script>

<style lang="less">
.box {
  display: flex;
  flex-flow: row wrap;
  height: 100vh;
}

.item {
  width: calc(100% / 2 - 20px);
  margin: 10px;
}

.item img {
  width: 100%;
  // height: 100%;
  object-fit: cover;
}
</style>
