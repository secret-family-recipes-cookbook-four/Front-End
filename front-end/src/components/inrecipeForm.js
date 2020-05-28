import React from 'react'

 function InrecipeForm(props) {
  const {
    values,
    onInputChange,
    onSubmit,
    disabled,
    errors,
  } = props

  return (
    <form onSubmit={onSubmit}>
      <div >
        <h2>New Recipe</h2>
      </div>

      <div >
        <label>Recipe Name:
          <input
            type='text'
            placeholder='Add recipe name'
            name='name'
            value={values.name}
            onChange={onInputChange}
          />
        </label>

        <label>Ingredients:
          <input
            type='text'
            placeholder='What is in your recipe'
            name='ingredients'
            value={values.ingredients}
            onChange={onInputChange}
          />
        </label>

        <label>Prep Time:
          <input 
          type='text'
          placeholder='How long to get ready'
          maxLength='15'
          name='prep' 
          value={values.prep} 
          onChange={onInputChange}
          > 
          </input>
        </label>

        <label>Cook Time:
          <input 
          type='text'
          placeholder='How long to eat'
          maxLength='15'
          name='cook' 
          value={values.cook} 
          onChange={onInputChange}
          > 
          </input>
        </label>

        <label>Servings:
          <input 
          type='text'
          placeholder='How much'
          maxLength='5'
          name='servings' 
          value={values.servings} 
          onChange={onInputChange}
          > 
          </input>
        </label>

        <label>Directions:
          <input 
          type='text'
          placeholder='How does it go together'
          name='directions' 
          value={values.directions} 
          onChange={onInputChange}
          > 
          </input>
        </label>

        <button disabled={disabled}>submit</button>

        <div >
            <div>{errors.name}</div>
            <div>{errors.ingredients}</div>
            <div>{errors.prep}</div>
            <div>{errors.cook}</div>
            <div>{errors.servings}</div>
            <div>{errors.directions}</div>
        </div>
        
      </div>
    </form>
  )
}


export default InrecipeForm