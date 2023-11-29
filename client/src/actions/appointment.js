import * as api from '../api'

//actions
// export const getAppointment = () => async (dispatch) => {
//   try {
//     const { data: newsData } = await api.fetchNews();
//     const action = {type: 'FETCH_ALL_APPOINTMENT', payload: newsData}

//     dispatch(action);

//   } catch (error) {
//     console.log(error.message)
//   }
  
// }

export const setAppointment = (appointment) => async (dispatch) => {
  try {  
    const {appointmentData} = await api.setAppointment(appointment);
    const action = {type: 'CREATE_APPOINTMENT', payload: appointmentData}

    dispatch(action);

  } catch (error) {
    console.log(error.message)
  }
  
}