import { makeAutoObservable } from 'mobx'

import ListObserver from '../List/mbox'

class FormInfo {
  formInstance = null
  formInfo = {
    sortIndex: 0
  }

  constructor() {
    makeAutoObservable(this)
  }

  setFormInstance = instance => {
    this.formInstance = instance
  }

  getFormInstance = () => {
    return this.formInstance
  }

  setFormInfo = values => {
    this.formInfo = values
  }

  getFormInfo = () => {
    return this.formInfo
  }

  // === action === //
  handleReset = () => {
    this.formInstance.resetFields()
    ListObserver.requestList({})
  }

  handleFinsh = values => {
    console.log('===Finish===', values)
    this.setFormInfo(values)
    ListObserver.requestList({ ...values })
  }

  handleSortIndex = idx => {
    this.formInfo.sortIndex = idx
  }
}

export const FormInfoObserver = new FormInfo()

export default FormInfoObserver
