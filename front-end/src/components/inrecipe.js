import React from 'react'

 function Inrecipe(props) {
  const { details } = props

  if (!details) {
    return <h3>Working on fetching your recipe details...</h3>
  }

  return (
    <div >
      <h2>{details.name}</h2>
      <p>Ingredients: {details.ingredients}</p>
      <p>Prep Time: {details.prep}</p>
      <p>Cook Time: {details.cook}</p>
      <p>Servings: {details.servings}</p>
      <p>Directions: {details.directions}</p>
    </div>
  )
}


export default Inrecipe