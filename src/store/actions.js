import * as types from './mutation-types'
import CompaniesService from '@/services/companies-service'

export default {
  async createCompany ({ commit, dispatch }, { company }) {
    dispatch('setLoading', true)
    try {
      const { data } = await CompaniesService.create(company)
      commit(types.CREATE_COMPANY, { company: data })
      return data
    } catch ({ message: error }) {
      commit(types.SET_ERROR, { error })
    } finally {
      dispatch('setLoading', false)
    }
  },
  async getCompanies ({ commit, dispatch }) {
    dispatch('setLoading', true)
    try {
      const { data } = await CompaniesService.getAll()
      commit(types.GET_COMPANIES, { companies: data })
      return data
    } catch ({ message: error }) {
      commit(types.SET_ERROR, { error })
    } finally {
      dispatch('setLoading', false)
    }
  },
  setLoading ({ commit }, loading) {
    commit(types.SET_LOADING, { loading })
  }
}
