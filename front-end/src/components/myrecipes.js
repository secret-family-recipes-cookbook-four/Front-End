import React, {useState, useEffect} from 'react';
import Inrecipe from './components/Inrecipe';
import InrecipeForm from './components/inrecipeForm';
import FormValidation from './validation/FormValidation';
import axios from 'axios';
import * as yup from 'yup';

const initialFormValues = {
  name: '',
  ingredients: '',
  prep: '',
  cook:'',
  servings:'',
  directions:'',
}

const initialFormErrors = {
  name: '',
  ingredients: '',
  prep: '',
  cook:'',
  servings:'',
  directions:'',
}

const initialDisabled = true
const indivrecipe = []

function Myrecipe() {
  const [indivrecipes, setIndivrecipes] = useState(indivrecipe)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const getIndivrecipes = () => {
    axios.get('http://reqres.in/api/indivrecipes')
      .then(response => {
        setIndivrecipes(response.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const postNewRecipe = newRecipe => {
    axios.post('http://reqres.in/api/indivrecipes', newRecipe)
      .then(response => {
        setIndivrecipes([response.data, ...indivrecipes])
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        setFormValues(initialFormValues)
      })
  }

  const onInputChange = evt => {
    const name = evt.target.name
    const value = evt.target.value
    yup
      .reach(FormValidation, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: ''
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        })
      })

    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  

  const onSubmit = evt => {
    evt.preventDefault()
    
    const newRecipe = { 
      name: formValues.name,
      ingredients: formValues.ingredients,
      prep: formValues.prep,
      cook: formValues.cook,
      servings: formValues.servings,
      directions: formValues.directions,
    }
    postNewRecipe(newRecipe)
  }

  useEffect(() => {
    getIndivrecipes()
  }, [])

  useEffect(() => {
    FormValidation.isValid(formValues)
      .then(valid => {
        setDisabled(!valid)
      })
  }, [formValues])

  return (
    <div >
      <header><h1>Recipes</h1></header>

      <InrecipeForm
        values={formValues}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
        disabled={disabled}
        errors={formErrors}
      />

      {
        indivrecipes.map(item => {
          return (
            <Inrecipe key={item.id} details={item} />
          )
        })
      }
    </div>
  )
}

export default Myrecipe
