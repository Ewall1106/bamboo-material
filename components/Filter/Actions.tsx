import React from 'react'
import { Form, Button } from 'antd'
import { observer } from 'mobx-react'
import FormInfoObserver from './mbox'
import { useTranslation } from 'next-i18next'

const tailLayout = {
  labelCol: {},
  wrapperCol: {}
}

const ActionsItem = observer(() => {
  const { t } = useTranslation()

  return (
    <Form.Item {...tailLayout}>
      <Button type="primary" htmlType="submit">
        {t('search')}
      </Button>
      <Button onClick={FormInfoObserver.handleReset}>{t('reset')}</Button>
    </Form.Item>
  )
})

export default ActionsItem
