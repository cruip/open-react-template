import React from 'react'
import MaterialTable from 'material-table'

const stocks = [
  { symbol: 'itub4', shares: 362, gain: 3.76 },
  { symbol: 'mglu3', shares: 5000, gain: 7.82 },
  { symbol: 'wege3', shares: 7300, gain: -1.64 },
  { symbol: 'oibr3', shares: 8210, gain: 0.41 },
  { symbol: 'azul4', shares: 4600, gain: -5.6 },
  { symbol: 'vale3', shares: 6850, gain: 2.52 }
]

const columns = [
  { title: 'Ativo', field: 'symbol' },
  { title: 'Quantidade', field: 'shares' },
  { title: 'Lucro(%)', field: 'gain' }
]
const IncomeTax = () => {

  return (
    <>
    <div className="IncomeTax">
      <MaterialTable
        columns={columns}
        data={stocks}
        />
    </div>
    </>
  )
}

export default IncomeTax