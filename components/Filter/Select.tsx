import React from 'react'
import { Form, Select } from 'antd'
import { observer } from 'mobx-react'
import { useTranslation } from 'next-i18next'

import { pageTypeList } from '@/utils'

const SelectItem = observer(() => {
  const { t } = useTranslation()

  return (
    <Form.Item name="type" label={t('framework')}>
      <Select placeholder={t('select')} allowClear style={{ width: 120 }}>
        {pageTypeList.map(item => {
          return (
            <Select.Option key={item.value} value={item.value} disabled={item.disabled}>
              {item.value}
            </Select.Option>
          )
        })}
      </Select>
    </Form.Item>
  )
})

export default SelectItem
