import React, {useEffect, useState} from "react"
import {getRecipes} from "../../store/actions/recipeAction"
import ProfileCard from "./profileCard"
import {connect} from "react-redux"
import {useHistory} from "react-router-dom"
import Rstyles from "../styles/styles"

function ProfilePage (props) {
    const { push } = useHistory()
    const [state, setState] = useState(props.recipes)
    const [dependants, setDependants] = useState([])

    const newRecipe = e => {
        push('/newrecipe')
    }

    const reload = () => {
        window.location.reload()
    }

    useEffect(() => {
        props.getRecipes()
    }, [dependants])

    return (
        <Rstyles>
            <div classname="profileInfo">
                <button onClick={newRecipe}>Add a New Recipe</button>
            </div>
            {props.recipes 
            ? props.recipes.map((item) => (
                <ProfileCard key={item.id} recipe={item} />
            )) : null}
        </Rstyles>
    )
}

const mapStateToProps = (state) => {
    console.log({ state });
    return {
        recipes: state.results
    }
}

export default connect(mapStateToProps, {getRecipes})(ProfilePage)