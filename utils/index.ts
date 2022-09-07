import dayjs from 'dayjs'
import queryString from 'query-string'

export const pageTypeList = ['react', 'vue', 'vue-next', 'wx-mini', 'taro', 'react-native']

export const groupUIList = ['basic', 'vant', 'element', 'antd', 'antm', 'naive']

export const getTagColor = s => {
  switch (s) {
    case 'react':
      return 'blue'
    case 'vue':
      return 'lime'
    case 'vue-next':
      return 'green'
    case 'antd':
      return '#1890ff'
    case 'element':
      return '#1989fa'
    case 'vant':
      return '#0094ff'
    default:
      break
  }
}

export const formateDate = time => {
  return dayjs(time).format('YYYY-MM-DD')
}
