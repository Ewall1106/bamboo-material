import React from 'react'
import { Form, Input } from 'antd'
import { observer } from 'mobx-react'
import { useTranslation } from 'next-i18next'

const InputName = observer(() => {
  const { t } = useTranslation()

  return (
    <Form.Item name="name" label={t('name')}>
      <Input placeholder={t('search_name_or_description')} allowClear />
    </Form.Item>
  )
})

export default InputName
