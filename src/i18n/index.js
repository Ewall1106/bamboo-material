import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { getLng } from '@/utils'

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en_US: {
    translation: {
      document: 'Document',
      hot: 'Hot',
      recent: 'Recent',
      framework: 'Framework',
      search: 'Search',
      reset: 'Reset',
      name: 'Name',
      select: 'select',
      'search component': 'search component',
      'components built with Bamboo': 'components built with Bamboo',
      description:
        'Build your web page more faster with premade responsive components designed and built by Bamboo.'
    }
  },
  zh_CN: {
    translation: {
      document: '文档',
      hot: '热门',
      recent: '最新',
      framework: '框架',
      search: '搜索',
      reset: '重置',
      name: '组件名称',
      select: '请选择',
      'search component': '组件搜索',
      'Welcome to React': '阿斯顿发',
      'components built with Bamboo': '个组件可使用',
      description:
        '直接使用由 Bamboo 构建出来的一系列物料组件，帮助你在开发前端页面的时候更快速、效率更高。'
    }
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: getLng(),
  interpolation: {
    escapeValue: false // react already safes from xss
  }
})

export default i18n
