import * as types from './mutation-types'
import CompaniesService from '@/services/companies-service'

export default {
  async createCompany ({ commit }, { company }) {
    commit(types.SET_LOADING, { loading: true })
    try {
      const { data } = await CompaniesService.create(company)
      commit(types.CREATE_COMPANY, { company: data })
      return data
    } catch ({ message: error }) {
      commit(types.SET_ERROR, { error })
    } finally {
      commit(types.SET_LOADING, { loading: false })
    }
  }
}
