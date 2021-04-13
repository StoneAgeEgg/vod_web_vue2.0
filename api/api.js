import axiosInstance from './index'

const axios = axiosInstance

export const getCategory = () => {
  return axios.get(`http://127.0.0.1:8080/api/data/category`)
}

export const postBook = (bookName, bookAuthor) => {
  return axios.post(`http://127.0.0.1:8080/api/books/`, {'name': bookName, 'author': bookAuthor})
}
