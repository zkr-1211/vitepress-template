/**
 * 侧边栏菜单
 *
 * @see sidebar https://vitepress.vuejs.org/guide/theme-sidebar#sidebar
 */
export const sidebar = {
  '/docs/': [
    {
      text: '快速上手',
      collapsible: true,
      link: '/docs/技术栈',
      items: [
        { text: '技术栈', link: '/docs/技术栈' },
        { text: '工具类', link: '/docs/工具类' },
        { text: '组件库', link: '/docs/组件库' },
        { text: '部署', link: '/docs/部署' },
        { text: '脚手架', link: '/docs/脚手架' },
        { text: 'Git使用规范', link: '/docs/Git使用规范' },
      ]
    }
  ]
}
