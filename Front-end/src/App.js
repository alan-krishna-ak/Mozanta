import { useEffect, useState } from 'react'
import Form from './components/Form'
import Table from './components/Table'
import { fetchDetails } from './services/api'

function App() {
  const [data, setData] = useState(null)

  const getTableData = async () => {
    const res = await fetchDetails()
    if (res) {
      setData(res)
    }
  }

  useEffect(() => {
    getTableData()
  }, [])

  return (
    <div className='m-10 '>
      <div className='mb-5'>
        <h1 className='text-xl font-bold'>Student Registration</h1>
      </div>

      <div className='flex sm:space-x-32 sm:flex-row flex-col space-y-10 '>
        <div className='w-full sm:w-1/4'>
          <Form />
        </div>
        <div className='w-full'>
          <Table data={data} />
        </div>
      </div>
    </div>
  )
}

export default App
