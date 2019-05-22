import api from './api'

const create = company => {
  return api.post('/companies', company)
}

export default {
  create
}
