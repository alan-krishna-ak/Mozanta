

const Table = ({ data }) => {
  return (
    <div>
      <div class='relative overflow-x-auto shadow-md sm:rounded-lg'>
        <table class='w-full text-sm text-left text-gray-500 '>
          <thead class='text-xs text-gray-700 uppercase bg-gray-50 '>
            <tr>
              <th scope='col' class='px-6 py-3'>
                Roll Number
              </th>
              <th scope='col' class='px-6 py-3'>
                Student Name
              </th>
              <th scope='col' class='px-6 py-3'>
                Date of Birth
              </th>
              <th scope='col' class='px-6 py-3'>
                Class
              </th>
              <th scope='col' class='px-6 py-3'>
                Division
              </th>
              <th scope='col' class='px-6 py-3'>
                Gender
              </th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((data, index) => {
                return (
                  <tr class='bg-white border-b' key={index}>
                    <td class='px-6 py-4 whitespace-nowrap'>{data.adNumber}</td>

                    <td class='px-6 py-4 whitespace-nowrap'>{data.name}</td>
                    <td class='px-6 py-4 whitespace-nowrap'>
                      {data.dateOfBirth}
                    </td>
                    <td class='px-6 py-4 whitespace-nowrap'>{data.classs}</td>
                    <td class='px-6 py-4 whitespace-nowrap'>{data.division}</td>
                    <td class='px-6 py-4 whitespace-nowrap'>{data.gender}</td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table