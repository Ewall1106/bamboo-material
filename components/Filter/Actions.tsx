import React from 'react'
import { Form, Button } from 'antd'
import { observer } from 'mobx-react'
import FormInfoObserver from './mbox'
import { useTranslation } from 'next-i18next'
import _ from 'loadsh'

const tailLayout = {
  labelCol: {},
  wrapperCol: {}
}

const ActionsItem = observer(() => {
  const { t } = useTranslation()
  const handleReset = _.throttle(FormInfoObserver.handleReset, 500, { trailing: false })

  return (
    <Form.Item {...tailLayout}>
      <Button type="primary" htmlType="submit">
        {t('search')}
      </Button>
      <Button onClick={handleReset}>{t('reset')}</Button>
    </Form.Item>
  )
})

export default ActionsItem
