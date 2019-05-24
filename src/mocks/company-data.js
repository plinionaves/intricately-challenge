const ACTIVITIES = [
  { id: 1, time: '8 days ago', icon: ['fas', 'play'], color: '#f36d41', description: 'Cloud orquestration replaced', note: 'Microsoft on 1 property' },
  { id: 2, time: '10 days ago', icon: ['fas', 'globe-americas'], color: '#04b589', description: 'Express Scripts replaced', note: 'Microsoft on 1 property' },
  { id: 3, time: '12 days ago', icon: ['fas', 'shield-alt'], color: '#d04848', description: 'Kaiser Permanente replaced', note: 'Microsoft on 1 property' },
  { id: 4, time: '14 days ago', icon: ['fas', 'map-signs'], color: '#f7b900', description: 'Molina Healthcare replaced', note: 'Microsoft on 1 property' },
  { id: 5, time: '15 days ago', icon: ['fas', 'cog'], color: '#a38ed7', description: 'Express Scripts replaced', note: 'Microsoft on 1 property' },
  { id: 6, time: '16 days ago', icon: ['fas', 'chart-bar'], color: '#4e8dd8', description: 'Kaiser Permanente replaced', note: 'Microsoft on 1 property' },
  { id: 7, time: '17 days ago', icon: ['fas', 'cloud'], color: '#33cad4', description: 'Molina Healthcare replaced', note: 'Microsoft on 1 property' },
  { id: 8, time: '18 days ago', icon: ['fas', 'globe-americas'], color: '#04b589', description: '', note: 'Microsoft launched M-Cloud' }
]

const COMPANIES = [
  { id: 1, name: 'Amazon Web Services (AWS)', logo: require('@/assets/logo-microsoft.svg') },
  { id: 2, name: 'Oracle Corporation', logo: require('@/assets/logo-microsoft.svg') }
]

const HISTORIC = [
  { id: 1, name: 'Google Cloud Platform', logo: require('@/assets/logo-microsoft.svg'), note: 'Google spend on product $500,000' },
  { id: 2, name: 'CenturyLink CDN', logo: require('@/assets/logo-microsoft.svg'), note: 'Century spend on product $300,000' }
]

export {
  ACTIVITIES,
  COMPANIES,
  HISTORIC
}
