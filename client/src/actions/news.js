import * as api from '../api'

// actions
export const getNews = () => async (dispatch) => {
  try {
    const { data: newsData } = await api.fetchNews();
    const action = {type: 'FETCH_ALL', payload: newsData}

    dispatch(action);

  } catch (error) {
    console.log(error.message)
  }
  
}

export const setNews = (news) => async (dispatch) => {
  try {  
    const {newsData} = await api.setNews(news);
    const action = {type: 'CREATE', payload: newsData}

    dispatch(action);

  } catch (error) {
    console.log(error.message)
  }
  
}