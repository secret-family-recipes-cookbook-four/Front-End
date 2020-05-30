import {axiosWithAuth} from "../../utils/axiosWithAuth"


const userID = localStorage.getItem('user_id')

export const getRecipes = () => {
    return (dispatch) => {
        dispatch({type: 'GET_USER_RECIPES_START'})
        axiosWithAuth()
        .get(`https://secretfamilyrecipes-backend.herokuapp.com/api/recipes/:id/${userID}`)
        .then((res) => {
            console.log(res.data)
            dispatch({type: 'GET_USER_RECIPES_SUCCESS', payload: res.data})
        })
        .catch((err) => console.error({err}))
    }
}