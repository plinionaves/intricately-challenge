const currencyFormatter = ({ locale, currency } = { locale: 'en-US', currency: 'USD' }) => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency
  })
}

export {
  currencyFormatter
}
