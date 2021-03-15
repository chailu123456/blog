module.exports = {
  title: 'Hello VuePress',
  description: 'Hello, my friend!',
  dest: './docs/.vuepress/dist',
  ga: '',
  evergreen: true,
  themeConfig: {
    sidebarDepth: 2,
    sidebar: [
      {
        title: 'guide',
        path: '/guide/',
      },
      {
        title: '主页',
        collapsable: false,
        path: '/home/',
      },
    ]
  }
}