import React from "react"
import {axiosWithAuth} from "../../utils/axiosWithAuth"
import {connect} from "react-redux"

function ProfileCard(props) {
    const deleteRecipe = e => {
        axiosWithAuth()
        .delete(`https://secretfamilyrecipes-backend.herokuapp.com/api/recipes/${props.recipe.id}`)
        .then ((res) => {
            console.log({res})
            window.location.reload()
        })
        .catch((err) => console.error({err}))
    }

    return (
        <div className="profileCardWrap">
            <div className="topCard">
                <h2>{props.recipe.title}</h2>   
            </div>
            <div className="ingredientsWrap">
                <h4>Ingredients</h4>
                <p>{props.recipe.ingredients}</p>
            </div>
            <div className="instructionsWrap">
                <h4>Instructions:</h4>
                <p>{props.recipe.instructions}</p>
            </div>
            <button onClick={deleteRecipe}>Delete</button>
        </div>
    )
}

const mapStatetoProps = (state) => {
    return {
        card: state.publicRecipe,
    }
}

export default connect(mapStatetoProps, {}) (ProfileCard)
