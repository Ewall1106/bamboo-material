import { ConfigProvider } from 'antd'
import { appWithTranslation } from 'next-i18next'

import zhCN from 'antd/lib/locale/zh_CN'
import enUS from 'antd/lib/locale/en_US'

import '@/styles/reset.css'
import '@/styles/antd.css'

import type { AppProps } from 'next/app'

const lng = true ? zhCN : enUS

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default appWithTranslation(MyApp)
