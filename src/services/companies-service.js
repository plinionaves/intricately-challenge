import api from './api'

const create = company => {
  return api.post('/companies', company)
}

const getAll = () => {
  return api.get('/companies')
}

export default {
  create,
  getAll
}
