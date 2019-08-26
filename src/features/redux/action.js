import axios from 'axios'
import moment from "moment"
const dateFormat = "YYYY-MM-DD HH:mm:ss"

export function getApi(param) {
  const dateFrom =  moment(param[0]).format(dateFormat)
  const dateTo =  moment(param[1]).format(dateFormat)
  const url = "https://micros.express24.uz/api/report/orders"

  return dispatch => {
    dispatch(getApiBegin())
    return axios.get( url, { 
      headers: {
        "Authorization-Token":
        "express24:dc1e4e62-559c0e36-2322bb61-ce2dcb92"
      }, 
      params: {
        dateFrom,
        dateTo
      }, 
    })
    .then(data => {
      dispatch(getData(data))
      console.log(data);
      return data;
    })
    .catch(error => console.log(error.message))
  };
}

export const GET_API = "GET_API";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const GET_PARAM = "GET_PARAM";

export const getApiBegin = () => ({
  type: GET_API
})

export const getData = data => ({
  type: GET_DATA_SUCCESS,
  payload: { data }
})

export const getParam = param => ({
  type: GET_PARAM,
  payload: { param }
})



