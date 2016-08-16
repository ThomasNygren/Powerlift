import getPerson from '../../services/swapi'
import t from './actionTypes'

export const getPersonTest = (id) => (
  let request = getPerson(id)
  {
  type: t.GET,
  payload: { request }
})
