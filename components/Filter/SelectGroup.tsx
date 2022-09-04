import React from 'react'
import { Form, Select } from 'antd'
import { observer } from 'mobx-react'

import { groupUIList } from '@/utils'

const SelectGroupItem = observer(() => {
  return (
    <Form.Item name="group" label="分组类型">
      <Select placeholder="请选择" allowClear style={{ width: 100 }}>
        {groupUIList.map(item => {
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

export default SelectGroupItem
