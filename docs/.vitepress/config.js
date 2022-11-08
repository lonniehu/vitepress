import { defineConfig } from "vitepress";

export default defineConfig({
  title: "lhu",
  description: "hello world",
  base: "/blog/",

  head: [["link", { rel: "icon", type: "image/png", href: "avatar.png" }]],
  lastUpdated: true,
  themeConfig: {
    logo: "/avatar.png",
    nav: [
      { text: "首页", link: "/" },
      { text: "我的笔记", link: "/daily/" },
      { text: "前端总结", link: "/frontend/" },
      { text: "杂项", link: "/misc/" },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/lonniehu" }],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-07-27～present lhu",
    },
    sidebarDepth: 2,
    sidebar: {
      "/misc/": [
        {
          text: '杂项',
          items: [
            { text: "misc", link: "/misc/" },
            { text: "md-icon", link: "/misc/md-icon" },
          ]
        }
      ],
      "/frontend/": [
        {
          text: '前端知识',
          items: [
            { text: "misc", link: "/frontend/" },
            { text: "vue", link: "/frontend/vue" },
            { text: "Agent Detect", link: "/frontend/agent-detect" },
            { text: "Git", link: "/frontend/git" },
            { text: "nginx", link: "/frontend/nginx" },
            { text: "sublime的nodejs插件", link: "/frontend/sublime-nodejs-install" },
            { text: "jquery", link: "/frontend/jquery" },
            { text: "vitepress-vue", link: "/frontend/vitepress-vue" },
            { text: "防抖与节流", link: "/frontend/防抖与节流"},
            { text: "localStorage", link: "/frontend/local-storage"},
            { text: "lazy-load", link: "/frontend/lazy-load" },
          ]
        }
      ],
      "/daily/": [
        {
           text: "Database",
           items: [
            { text: "mongodb", link: "/daily/mongodb" },
          ],
        },
        {
          text: "随记",
          items: [
            { text: "current", link: "/daily/" },
          ],
        },
      ],
    },
  },
  vite: {
    server: {
      host: true,
      port: 3000,
      open: true,
    },
  },
});
