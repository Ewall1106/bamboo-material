import React, { CSSProperties } from 'react'
import { Form } from 'antd'
import { observer } from 'mobx-react'
import FormInfoObserver from './mbox'

import InputName from './InputName'
import SelectItem from './Select'
import ActionsItem from './Actions'
// import SelectGroupItem from './SelectGroup'

import './index.less'

const style: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '24px',
  background: '#fff',
  border: '1px solid #d9d9d9',
  borderRadius: '4px',
  whiteSpace: 'nowrap',
  overflow: 'scroll',
  boxShadow: '0 2px 4px 0 rgb(0 0 0 / 10%)'
}

export const Filter = observer(() => {
  const [form] = Form.useForm()
  FormInfoObserver.setFormInstance(form)
  const { sortIndex } = FormInfoObserver.getFormInfo()

  const handleIndex = idx => {
    FormInfoObserver.handleSortIndex(idx)
  }

  return (
    <Form style={style} layout="inline" form={form} onFinish={FormInfoObserver.handleFinsh}>
      <div className="hotAndNew">
        {['最新', '热门'].map((item, idx) => {
          return (
            <span
              key={idx}
              style={{ color: sortIndex === idx ? '#15aabf' : '' }}
              onClick={() => handleIndex(idx)}
            >
              {item}
            </span>
          )
        })}
      </div>

      <SelectItem />
      {/* <SelectGroupItem /> */}
      <InputName />
      <ActionsItem />
    </Form>
  )
})

export default Filter
