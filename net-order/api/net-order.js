import request from '@utils/request'
import api from '@api/index'
// const API_BASE_URL = '/netOrder'
class NetOrderApi {
  /**
   *  根据城市id请求相应号码规则
   */
  qryNumFilterCond(params) {
    return request({
      url: 'search/condition',
      method: 'post',
      data: params
    })
  }
  qryHallInfoList(params) {
    return request({
      url: 'numcard/org/list',
      method: 'post',
      data: params
    })
  }
  // 省市县查询
  qryCountry(params) {
    return request({
      url: api.school.qryCountry,
      method: 'post',
      data: params
    })
  }
}
export default new NetOrderApi()
