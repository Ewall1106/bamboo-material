import React, { CSSProperties } from 'react'
import { Form } from 'antd'
import { observer } from 'mobx-react'
import FormInfoObserver from './mbox'
import { useTranslation } from 'next-i18next'
import _ from 'loadsh'

import InputName from './InputName'
import SelectItem from './Select'
import ActionsItem from './Actions'

import styles from './index.module.scss'

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
  const { t } = useTranslation()

  FormInfoObserver.setFormInstance(form)
  const { sortIndex } = FormInfoObserver.getFormInfo()

  const handleIndex = idx => {
    if (idx === sortIndex) return
    FormInfoObserver.handleSortIndex(idx)
  }

  const handleFinsh = _.throttle(FormInfoObserver.handleFinsh, 500, { trailing: false })

  return (
    <Form style={style} layout="inline" form={form} onFinish={handleFinsh}>
      <div className={styles.hotAndNew}>
        {[t('recent'), t('hot')].map((item, idx) => {
          const hightLight = sortIndex === idx ? '#15aabf' : '#000'

          return (
            <span key={idx} style={{ color: hightLight }} onClick={() => handleIndex(idx)}>
              {item}
            </span>
          )
        })}
      </div>

      <SelectItem />
      <InputName />
      <ActionsItem />
    </Form>
  )
})

export default Filter
