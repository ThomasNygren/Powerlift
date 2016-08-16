import axios from 'axios'

const ROOT_URL = 'http://swapi.co/api/'

export const getPerson = (id) => ({
  const url = `${ROOT_URL}people/${id}`
  const request = axios.get(url)
  return request
})
