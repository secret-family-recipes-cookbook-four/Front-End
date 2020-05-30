import React , {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import PublicRecipeCard from './PublicRecipeCard'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import {useHistory} from "react-router-dom"

function PublicRecipes (props) {  
    const [recipes, setRecipes] = useState()
    const { push } = useHistory()
    useEffect (() => {
        axiosWithAuth()
        .get(`https://secretfamilyrecipes-backend.herokuapp.com/api/recipes`)
        .then((res) => {
            console.log({res})
            setRecipes(res.data)
        })
        .catch((err) => console.log({err}))
    },[])

    const user_id = localStorage.getItem('user_id')
    const [form, setForm] = useState({
        user_id: user_id,
        title: "",
        ingredients: "",
        category: "",
        instructions: "",
    })
    

    const addRecipe = (e) => {
        e.preventDefault()

        axiosWithAuth()
        .post( `https://secretfamilyrecipes-backend.herokuapp.com/api/recipes/${user_id}/user`, form)
        .then((res) => {
            console.log(res)
            setRecipes(res.newRecipe)
            
        })
        .catch((err) => console.error({err}))
    }

    const changeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    } 
    
    const logout = (e) => {
        localStorage.removeItem("token");
        localStorage.removeItem("userID");
        push('/')
      };

    return (
        <div className="publicRecipes">
            {console.log({recipes})}
            {recipes ? recipes.map((item) => <PublicRecipeCard key={item.id} cardInfo={item} />) : null}

            <div className="recipeForm">
        <nav>
            <button onClick={logout}>Logout</button>
            <button onClick={() => push("/profilepage") }>Profile</button>
        </nav>
            <form onSubmit={addRecipe} className="addRecipe">
                <h3>Add A New Recipe!</h3>
                <label htmlFor="title">
                    <input 
                    type="text"
                    placeholder="Title"
                    name="title"
                    value={form.title}
                    onChange={changeHandler}
                    />
                </label>
                <label htmlFor="ingredients">
                    <input 
                    type="text"
                    placeholder="Ingredients"
                    name="ingredients"
                    value={form.ingredients}
                    onChange={changeHandler}
                    />
                </label>
                <label htmlFor="category">
                    <input 
                    type="text"
                    placeholder="Category"
                    name="category"
                    value={form.category}
                    onChange={changeHandler}
                    />
                </label>
                <label htmlFor="instructions">
                    <input 
                    type="text"
                    placeholder="Instructions"
                    name="instructions"
                    value={form.instructions}
                    onChange={changeHandler}
                    />
                </label>
                <button>Submit</button>
            </form>
        </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {};
}

export default connect(mapStateToProps, {})(PublicRecipes)