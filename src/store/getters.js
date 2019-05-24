const orderedCompanies = state =>
  ({ field, orderBy } = { field: 'name', orderBy: 'asc' }) =>
    state.companies.sort((company1, company2) => {
      const item1 = orderBy === 'asc' ? company1 : company2
      const item2 = orderBy === 'asc' ? company2 : company1
      return item1[field] < item2[field]
        ? -1
        : item1[field] > item2[field]
          ? 1
          : 0
    })

const filteredCompanies = (state, { orderedCompanies }) =>
  ({ field, orderBy }) => {
    const companies = !field
      ? orderedCompanies()
      : orderedCompanies({ field, orderBy })
    return !state.search
      ? companies
      : companies.filter(company => company.name.toLowerCase().includes(state.search.toLowerCase()))
  }

const getSpends = state => state.companies.map(company => company.spend)
const higherSpending = (state, getters) => Math.max.apply(null, getters.getSpends)

export default {
  filteredCompanies,
  getSpends,
  higherSpending,
  orderedCompanies
}
