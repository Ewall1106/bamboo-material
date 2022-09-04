import { ConfigProvider } from 'antd'
import { getLng } from '@/utils'

import zhCN from 'antd/lib/locale/zh_CN'
import enUS from 'antd/lib/locale/en_US'

import '@/i18n'
import '@/styles/reset.css'
import '@/styles/antd.css'

import type { AppProps } from 'next/app'

const lng = getLng() === 'zh_CN' ? zhCN : enUS

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider locale={lng}>
      <Component {...pageProps} />
    </ConfigProvider>
  )
}

export default MyApp
