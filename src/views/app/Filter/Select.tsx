import React from 'react'
import { Form, Select } from 'antd'
import { observer } from 'mobx-react'

import { pageTypeList } from '@/utils'

const SelectItem = observer(() => {
  return (
    <Form.Item name="type" label="框架">
      <Select placeholder="请选择" allowClear style={{ width: 120 }}>
        {pageTypeList.map(item => {
          return (
            <Select.Option key={item} value={item}>
              {item}
            </Select.Option>
          )
        })}
      </Select>
    </Form.Item>
  )
})

export default SelectItem
