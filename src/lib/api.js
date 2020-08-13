import axios from 'axios'

export const getAllStatuses = () => {
  return axios.get('https://api.tfl.gov.uk/line/mode/tube/status')
}