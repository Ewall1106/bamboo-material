import { makeAutoObservable } from 'mobx'
import materialApi from '@/api/material'

class ListInfo {
  tableList = []
  total = 0
  pageNo = 1
  pageSize = 9
  loading = false
  skeleton = false
  transform = false

  constructor() {
    makeAutoObservable(this)
  }

  requestList = async ({ pageNo = 1, pageSize = 9, ...others }) => {
    this.loading = true
    if (pageNo === 2 && !this.transform) {
      this.skeleton = true
      this.tableList = []
    }
    if (pageNo >= 2) this.transform = true

    const { data } = await materialApi.getPageMaterial({ pageNo, pageSize, ...others })
    console.log('===list===', data)
    this.tableList = data.list.map(item => {
      item.key = item._id
      return item
    })

    this.pageNo = pageNo
    this.total = data.total
    this.loading = false
    this.skeleton = false
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

  getTransForm = () => {
    return this.transform
  }

  getSkeleton = () => {
    return this.skeleton
  }

  setSkeleton = flag => {
    this.skeleton = flag
  }
}

export const ListInfoObserver = new ListInfo()

export default ListInfoObserver
