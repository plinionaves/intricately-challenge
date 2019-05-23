import {
  CREATE_COMPANY,
  GET_COMPANIES,
  SET_ERROR,
  SET_LOADING
} from './mutation-types'

export default {
  [CREATE_COMPANY] (state, { company }) {
    state.companies = [...state.companies, company]
  },
  [GET_COMPANIES] (state, { companies }) {
    state.companies = companies
  },
  [SET_ERROR] (state, { error }) {
    state.error = error
  },
  [SET_LOADING] (state, { loading }) {
    state.loading = loading
  }
}
