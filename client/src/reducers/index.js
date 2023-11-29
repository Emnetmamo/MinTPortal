import { combineReducers } from "redux";
import news from './news'
import appointments from "./appointment";

export default  combineReducers({news: news, appointments: appointments})

