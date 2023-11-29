import axios from 'axios'

const url = 'http://localhost:5001/news'
export const fetchNews = () => axios.get(url);

const url2 = 'http://localhost:5001/admin/news/add-news'
export const setNews = (newNews) => axios.post(url2, newNews)

const url3 = 'http://localhost:5001/admin/appointments/add-appointment'
export const setAppointment = (newAppointment) => axios.post(url3, newAppointment)// api.js

