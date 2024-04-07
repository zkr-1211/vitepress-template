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
      link: '/docs/hello',
      items: [
        { text: 'hello', link: '/docs/hello' },
        { text: '部署', link: '/docs/部署' },
        { text: '脚手架', link: '/docs/脚手架' }
      ]
    }
  ]
}
