import {
  GET_API,
  GET_DATA_SUCCESS,
  GET_PARAM
} from './action'

const initialState = {
  loading: false,
  data: [],
  param: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case GET_PARAM: 
    return {
      ...state,
      param: action.payload.param
    }
    case GET_API: 
    return {
      ...state
    }
    case GET_DATA_SUCCESS:
    return {
      ...state,
      loading: true,
      data: action.payload.data.data.items
    }
    default:
    return state
  } 
}