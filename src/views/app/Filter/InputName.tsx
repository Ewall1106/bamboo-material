import React from 'react'
import { Form, Input } from 'antd'
import { observer } from 'mobx-react'

const InputName = observer(() => {
  return (
    <Form.Item name="name" label="页面名称">
      <Input placeholder="组件搜索" allowClear />
    </Form.Item>
  )
})

export default InputName
