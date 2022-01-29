import axios from 'axios'

const API = axios.create({
  baseURL: 'https://api.allorigins.win/raw?url=https://www.metaweather.com/api/'
})

export default API
