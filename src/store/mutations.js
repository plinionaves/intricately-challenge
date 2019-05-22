import {
  CREATE_COMPANY,
  SET_ERROR,
  SET_LOADING
} from './mutation-types'

export default {
  [CREATE_COMPANY] (state, { company }) {
    state.companies = [...state.companies, company]
  },
  [SET_ERROR] (state, { error }) {
    state.error = error
  },
  [SET_LOADING] (state, { loading }) {
    state.loading = loading
  }
}
