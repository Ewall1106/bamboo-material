import { makeAutoObservable } from 'mobx'
import materialApi from '@/api/material'

class ListInfo {
  tableList = []
  total = 0
  pageNo = 1
  pageSize = 10
  loading = false

  constructor() {
    makeAutoObservable(this)
  }

  requestList = async ({ pageNo = 1, pageSize = 10, ...others }) => {
    this.loading = true
    const { data } = await materialApi.getPageMaterial({ pageNo, pageSize, ...others })
    this.tableList = data.list.map(item => {
      item.key = item._id
      return item
    })
    this.pageNo = pageNo
    this.total = data.total
    this.loading = false
  }

  getList = () => {
    return this.tableList
  }

  getTotal = () => {
    return this.total
  }

  getLoading = () => {
    return this.loading
  }

  getPageNo = () => {
    return this.pageNo
  }
}

export const ListInfoObserver = new ListInfo()

export default ListInfoObserver
