import { saveDetails } from '../services/api'

const Form = () => {
  const formHandler = async (event) => {
    // event.preventDefault()
    const { name, birthday, grade, section, gender } = event.target

    if (
      !name.value ||
      !birthday.value ||
      !grade.value ||
      !section.value ||
      !gender.value
    ) {
      return alert('Please enter all the fields')
    }
    try {
      await saveDetails(
        name.value,
        birthday.value,
        grade.value,
        section.value,
        gender.value
      )
      // window.location.reload()
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div className='border p-2 border-blue-100 shadow'>
      <form onSubmit={formHandler} className='space-y-5 '>
        <div className='flex flex-col space-y-2'>
          <label htmlFor='name'>Name:</label>
          <input type='text' id='name' className='border border-blue-500 p-2' />
        </div>

        <div className='flex flex-col space-y-2'>
          <label htmlFor='birthday'>Birthday:</label>
          <input
            type='date'
            id='birthday'
            name='birthday'
            className='border border-blue-500 p-2 w-1/3'
          />
        </div>

        <div className='flex space-x-5 '>
          <div>
            <label htmlFor='grade' className='mr-3'>
              Class:
            </label>
            <select id='grade' className='border border-blue-500'>
              <option value='1'>I </option>
              <option value='2'>II </option>
              <option value='3'>III </option>
              <option value='4'>IV </option>
              <option value='5'>V </option>
              <option value='6'>VI </option>
              <option value='7'>VII </option>
              <option value='8'>VIII </option>
              <option value='9'>IX </option>
              <option value='10'>X </option>
              <option value='11'>XI </option>
              <option value='12'>XII </option>
            </select>
          </div>

          <div>
            <label htmlFor='section' className='mr-3'>
              Section:
            </label>
            <select id='section' className='border border-blue-500'>
              <option value='A'>A </option>
              <option value='B'>B </option>
              <option value='C'>C </option>
              <option value='D'>D </option>
            </select>
          </div>
        </div>

        <div className='space-x-3'>
          <label htmlFor='gender'>Gender:</label>
          <input type='radio' value='MALE' id='male' name='gender' />
          <label htmlFor='male'>Male</label>
          <input type='radio' value='FEMALE' id='female' name='gender' />
          <label htmlFor='male'>Female</label>
        </div>

        <div className='flex justify-end'>
          <button type='submit' className='bg-green-400 p-2 rounded'>
            Save
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form
