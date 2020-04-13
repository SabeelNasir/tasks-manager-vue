import axios from './interceptors'
import { apiUrl } from '@/config/config'
import formUrlEncoded from 'form-urlencoded'

axios.defaults.baseURL = apiUrl


const getRequest = (uri) => {
   return new Promise((resolve, reject) => {
      axios.get(uri).then(data => {
         resolve(data.data)
      }).catch(error => {
         reject(error)
      })
   })
}
const postRequest = (uri, data, contentType = 'application/json') => {
   if (contentType == 'application/x-www-form-urlencoded') {
      data = formUrlEncoded(data)
   }
   return new Promise((resolve, reject) => {
      axios.post(uri, data).then(data => {
         resolve(data.data)
      }).catch(error => {
         console.log(error)
         reject(error)
      })
   })
}
const patchRequest = (uri, data) => {
   return new Promise((resolve, reject) => {
      axios.patch(uri, data).then(data => {
         resolve(data.data)
      }).catch(error => {
         console.log(error)
         reject(error)
      })
   })
}
export { getRequest, postRequest, patchRequest }