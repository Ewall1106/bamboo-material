import React from 'react'
import { Form, Button } from 'antd'
import { observer } from 'mobx-react'
import FormInfoObserver from './mbox'

const tailLayout = {
  labelCol: {},
  wrapperCol: {}
}

const ActionsItem = observer(() => {
  return (
    <Form.Item {...tailLayout}>
      <Button type="primary" htmlType="submit">
        搜索
      </Button>
      <Button onClick={FormInfoObserver.handleReset}>重置</Button>
    </Form.Item>
  )
})

export default ActionsItem
