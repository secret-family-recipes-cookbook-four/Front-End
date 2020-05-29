import React from "react"
import {Route, Switch} from "react-router-dom"
import Login from "./loginRegister"
import PublicRecipes from "./PublicRecipes"
import PrivateRoute from "../utils/PrivateRoute"
import ProfilePage from "./userProfile/profilePage"
import CreateRecipe from "./CreateNewRecipe"

export default function FamilyRecipes (props) {
    return (
        <div>
        <Switch>
            <Route exact path='/'>
                <Login />
            </Route>
            <Route exact path='/recipes'>
                <PublicRecipes /> 
            </Route>

            <PrivateRoute exact path='/profilepage' component={ProfilePage} />
            <PrivateRoute exact path='/createrecipe' component={CreateRecipe} />
        </Switch>
        </div>
    )
}