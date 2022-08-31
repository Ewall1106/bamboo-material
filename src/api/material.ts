import request from '@/utils/request'

export function createMaterial(data: any) {
  return request<any>({
    url: '/bamboo/material-create',
    method: 'post',
    data
  })
}

export function getPageMaterial(data: any) {
  return request<any>({
    url: '/bamboo/get-material',
    method: 'post',
    data
  })
}

export default {
  createMaterial,
  getPageMaterial
}
