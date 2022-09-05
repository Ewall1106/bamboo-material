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
    this.formInfo = Object.assign(this.formInfo, values)
  }

  getFormInfo = () => {
    return this.formInfo
  }

  // === action === //
  handleReset = () => {
    this.formInstance.resetFields()
    ListObserver.requestList({ pageNo: 1, sortIndex: 0 })
  }

  handleFinsh = ({ pageNo = 1, ...others }) => {
    console.log('===Finish===', others)
    this.setFormInfo(others)
    ListObserver.requestList({ pageNo, ...this.formInfo })
  }

  handleSortIndex = idx => {
    this.formInfo.sortIndex = idx
  }
}

export const FormInfoObserver = new FormInfo()

export default FormInfoObserver
