import axios from 'utils/axios'

module.exports = {
  list: () => axios.get('/default/lists'),
  detail: (params) => axios.get(`/default/detail/${params.id}`),
  type: () => axios.get('/default/type'),
  listByTypeId: (params) => axios.get(`/default/list_by_typeid/${params.id}`)
}
