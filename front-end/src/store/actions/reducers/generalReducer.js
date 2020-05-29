const initialState = {
    isFetching: false,
    user_id: '',
    results: [],
    error: ''
}

const userID = localStorage.getItem('user_id')

export const generalReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_USER_RECIPES_START':
            return {
                ...state,
                isFetching:true
            }

        case 'GET_USER_RECIPES_SUCCESS':
            const recipes = action.payload
            return {
                ...state,
                isFetching:false,
                user_id: userID,
                results: recipes
            }
        
        case 'GET_USER_RECIPES_FAILURE':
            return {
                ...state,
                isFetching:false,
                error: action.error,
            }

        default:
            return state
        
    }
}