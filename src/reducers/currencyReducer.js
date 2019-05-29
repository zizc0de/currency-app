const initialState = {
  data: [
    {
      name: 'IDR',
      desc: 'Indonesian rupiah'
    },
    {
      name: 'EUR',
      desc: 'European euro'
    },
    {
      name: 'GBP',
      desc: 'Pound sterling'
    },
    {
      name: 'SGD',
      desc: 'Singapore dollar'
    },
    {
      name: 'USD',
      desc: 'United States dollar'
    },
    {
      name: 'CAD',
      desc: 'Canadian dollar'
    },
    {
      name: 'CHF',
      desc: 'Swiss franc'
    },
    {
      name: 'INR',
      desc: 'Indian rupee'
    },
    {
      name: 'MYR',
      desc: 'Malaysian ringgit'
    },
    {
      name: 'JPY',
      desc: 'Japanese yen'
    },
    {
      name: 'KRW',
      desc: 'South Korean won'
    }
  ]
}

const currencyReducer = (state = initialState) => {
  return state;
}

export default currencyReducer;