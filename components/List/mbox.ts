import { makeAutoObservable } from 'mobx'
import { getPageMaterial } from '@/lib/api/material'
import { nanoid } from 'nanoid'

class ListInfo {
  tableList = []
  total = 0
  pageNo = 1
  pageSize = 12
  loading = false
  skeleton = false
  transform = false
  currentItem = {}
  drawerShow = false

  constructor() {
    makeAutoObservable(this)
  }

  requestList = async ({ pageNo = this.pageNo, ...others }) => {
    this.setLoading(true)
    if (pageNo === 2 && !this.transform) {
      this.skeleton = true
      this.tableList = []
    }
    if (pageNo >= 2) this.transform = true

    try {
      const { data } = await getPageMaterial({
        iszh: location.pathname.includes('/zh'),
        pageNo,
        pageSize: this.pageSize,
        ...others
      })
      console.log('===list===', data)

      if (data.list.length && data.list.length < this.pageSize) {
        const len = this.pageSize - data.list.length
        const fake = new Array(len).fill({}).map(() => {
          return {
            ...data.list[0],
            _id: nanoid(),
            placeholder: true // just to fixed 'flex layout' problem
          }
        })
        data.list = [...data.list, ...fake]
      }

      const tableList = data.list.map(item => {
        item.key = item._id
        return item
      })

      this.setList(tableList)
      this.setPageNo(pageNo)
      this.setTotal(data.total)
      this.setLoading(false)
      this.setSkeleton(false)
    } catch (error) {
      console.log('error', error)
    }
  }

  setList = list => {
    this.tableList = list
  }

  getList = () => {
    return this.tableList
  }

  setTotal = total => {
    this.total = total
  }

  getTotal = () => {
    return this.total
  }

  setLoading = loading => {
    this.loading = loading
  }

  getLoading = () => {
    return this.loading
  }

  setPageNo = num => {
    this.pageNo = num
  }

  getPageNo = () => {
    return this.pageNo
  }

  getPageSize = () => {
    return this.pageSize
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

  setDrawerShow = flag => {
    this.drawerShow = flag
  }

  getDrawerShow = () => {
    return this.drawerShow
  }

  setCurrentItem = item => {
    this.setDrawerShow(true)
    this.currentItem = item
  }

  getCurrentItem = () => {
    return this.currentItem
  }
}

export const ListInfoObserver = new ListInfo()

export default ListInfoObserver
