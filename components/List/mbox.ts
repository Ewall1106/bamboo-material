import { makeAutoObservable } from 'mobx'
import { getPageMaterial } from '@/lib/api/material'
import { log } from 'next-axiom'

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
  isError = false

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

      const list = this.handleListFlexLayoutIssue(data.list)

      const tableList = list.map(item => {
        item.key = item._id
        return item
      })

      this.setList(tableList)
      this.setPageNo(pageNo)
      this.setTotal(data.total || 0)
      this.setLoading(false)
      this.setSkeleton(false)
    } catch (error) {
      console.log('===error===', error)
      this.setErrorStatus(true)
    }
  }

  setErrorStatus = flag => {
    this.isError = flag
  }

  getErrorStatus = () => {
    return this.isError
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
    log.info('card click')
    this.setDrawerShow(true)
    this.currentItem = item
  }

  getCurrentItem = () => {
    return this.currentItem
  }

  // === utils === //
  handleListFlexLayoutIssue = list => {
    if (list.length && list.length < this.pageSize) {
      const fake = {
        ...list[0],
        _id: Math.random(),
        placeholder: true
      }
      if (!this.transform) {
        if ([2, 5, 8, 11].includes(list.length)) list.push(fake)
      } else {
        if ([3, 7, 11].includes(list.length)) list.push(fake)
        if ([2, 6, 10].includes(list.length)) {
          list = [...list, fake, { ...fake, _id: Math.random() }]
        }
      }
    }
    return list
  }
}

export const ListInfoObserver = new ListInfo()

export default ListInfoObserver
