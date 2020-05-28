import React, {useState} from "react"
import {useHistory} from "react-router-dom"
import {axiosWithAuth} from "../utils/axiosWithAuth"

export default function CreateRecipe (props) {
    const userID = localStorage.getItem('userID')
    const [form, setForm] = useState({
        user_id: userID,
        title: "",
        ingredients: "",
        category: "",
        instructions: "",
    })

    const { push } = useHistory()
    const addRecipe = (e) => {
        e.preventDefault()

        axiosWithAuth()
        .post( `https://secretfamilyrecipes-backend.herokuapp.com/api/recipes/:id/user`, form)
        .then((res) => {
            console.log({res})
            push('/userprofile')
            window.location.reload()
        })
        .catch((err) => console.error({err}))
    }

    const changeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="recipeForm">
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
    )


}