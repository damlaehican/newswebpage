const initialState = {
  news: [],
  isLoading: false,
  isLoaded: false,
  hasError: false,
  filter: ''
}

export default function newsReducer(state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case "FETCHING_NEWS":
      return {
        ...state,
        isLoading: true
      }
    case "FETCHED_NEWS":
      return {
        ...state,
        news: action.news,
        isLoading: false,
        isLoaded: true,
      }
    case "ERROR":
      return {
        ...state,
        isLoading: false,
        hasError: true
      }
    case "FILTER":
    return{
      ...state,
      filter: action.filter
    }
    default:
      return state
  }

}