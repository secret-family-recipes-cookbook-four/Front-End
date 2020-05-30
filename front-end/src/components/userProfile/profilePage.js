import React, {useEffect, useState} from "react"
import {getRecipes} from "../../store/actions/recipeAction"
import ProfileCard from "./profileCard"
import {connect} from "react-redux"
import {useHistory} from "react-router-dom"

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
        <div className="profilePage">
            <nav>
                <button onClick={() => push("/recipes") }>Home Page</button>
            </nav>
                <ProfileCard recipe={props.recipes} />
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log({ state });
    return {
        recipes: state.results
    }
}

export default connect(mapStateToProps, {getRecipes})(ProfilePage)