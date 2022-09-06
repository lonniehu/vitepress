近期做了一个功能，是接入一个海康的摄像头的监控视频，怎么获取m3u8的视频这里就不在叙述了，只说一下怎么将m3u8格式的视频成功播放

一、m3u8和HLS介绍

1.M3U8文件是指UTF-8编码格式的M3U文件。M3U文件是记录了一个索引纯文本文件,打开它时播放软件并不是播放它,而是根据它的索引找到对应的音视频文件的网络地址进行在线播放。

2.HLS 与 M3U8 HLS(全称:Http Live Streaming)是由Apple公司定义的用于实时流传输的协议

二、nuxt项目中使用HLS播放m3u8

1.安装hls.js依赖

 可以通过npm安装依赖   npm install hls.js --save  ，也可以通过引入的方式 <script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script>

2.代码实现

```
<template>
  <section>
    <video class="full-height full-width" ref="video" controls></video>
  </section>
</template>

<script>
  let Hls \= require('hls.js');
  export default {
    data() {
      return {
        hls: ''
      };
    },
    mounted() {
      this.$axios.get('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx').then(res => {
        this.getStream(res.data);
      });
    },
    methods: {
      videoPause() {
        if (this.hls) {
          this.$refs.video.pause();
          this.hls.destroy();
          this.hls = null;
        }
      },
      getStream(source) {
        if (Hls.isSupported()) {
          this.hls = new Hls();
          this.hls.loadSource(source);
          this.hls.attachMedia(this.$refs.video);
          this.hls.on(Hls.Events.MANIFEST\_PARSED, () => {
            console.log('加载成功');
            this.$refs.video.play();
          });
          this.hls.on(Hls.Events.ERROR, (event, data) => {
            // console.log(event, data);
            // 监听出错事件
            console.log('加载失败');
          });
        }
      },
      beforeDestroy() {
        this.videoPause();
      }
    }
  };
</script>
```

页面初始化mounted的时候，获取到m3u8视频的链接，然后通过getStream()方法加载视频，也通过videoPause()方法停止视频播放

嗯，首先要感谢大佬的教导，就酱~~

本文转自 [https://www.cnblogs.com/jin-zhe/p/11975515.html](https://www.cnblogs.com/jin-zhe/p/11975515.html)，如有侵权，请联系删除。
