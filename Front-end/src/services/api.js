import axios from 'axios'

export const saveDetails = async (name, birthday, grade, section, gender) => {
  const data = await axios.post('http://localhost:8080/api/save', {
    name,
    dateOfBirth: birthday,
    classs: grade,
    gender,
    division: section,
  })
  if (data.status === 200) {
    return data.data
  }
}

export const fetchDetails = async () => {
  const res = await axios.get('http://localhost:8080/api/students')
  if (res.status === 200) {
    return res.data
  }
}
