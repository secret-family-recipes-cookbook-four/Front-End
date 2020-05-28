import React , {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import PublicRecipeCard from './PublicRecipeCard'

function PublicRecipes (props) {
    const [recipes, setRecipes] = useState()
    useEffect (() => {
        axios
        .get(`https://secretfamilyrecipes-backend.herokuapp.com/api/recipes`)
        .then((res) => {
            console.log({res})
            setRecipes(res.data.recipes)
        })
        .catch((err) => console.log({err}))
    },[])

    return (
        <div className="publicRecipes">
            {console.log({recipes})}
            {recipes ? recipes.map((item) => <PublicRecipeCard key={item.id} cardInfo={item} />) : null}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {};
}

export default connect(mapStateToProps, {})(PublicRecipes)