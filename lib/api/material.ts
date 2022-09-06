import request from '@/lib/request'

export function getPageMaterial(data: any) {
  return request<any>({
    url: '/api/material-search',
    method: 'post',
    data
  })
}
