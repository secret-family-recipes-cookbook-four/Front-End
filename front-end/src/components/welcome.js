import React from "react";

function welcome () {

    return(
        <div>
            <a>Logout</a>
        </div>
        <div>
            <h2>Welcome ${props.username}</h2>
            <h3>What would you like to make today?</h3>
            <button>Add a new recipe</button>
            <p></p>
        </div>
    )

}

export default welcome