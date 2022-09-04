import { useRouter } from 'next/router'
import { ConfigProvider } from 'antd'
import { appWithTranslation } from 'next-i18next'

import zhCN from 'antd/lib/locale/zh_CN'
import enUS from 'antd/lib/locale/en_US'

import '@/styles/reset.css'
import '@/styles/antd.css'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const lng = router.locale === 'zh' ? zhCN : enUS

  return (
    <ConfigProvider locale={lng}>
      <Component {...pageProps} />
    </ConfigProvider>
  )
}

export default appWithTranslation(MyApp)
