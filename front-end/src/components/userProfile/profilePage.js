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

    const reload = () => {
        window.location.reload()
    }


    useEffect(() => {
        props.getRecipes()
    }, [dependants])
console.log(props.recipes)
    return (
        <Rstyles>
            <div className="profilePage">
            <nav>
                <button onClick={() => push("/recipes") }>Home Page</button>
            </nav>
                <ProfileCard recipe={props.recipes} />
        </div>
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