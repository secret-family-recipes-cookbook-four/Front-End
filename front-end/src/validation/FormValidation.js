import * as yup from 'yup'


const FormValidation = yup.object().shape({
    name: yup.string()
        .min(3, 'Name must be at least three characters long')
        .required('Name is required'),

    ingredients: yup.string()
        .required('Ingredients are required'),

    prep: yup.string()
        .required('Prep time is required'),

    cook: yup.string()
        .required('Cook time is required'),

    servings: yup.string()
        .required('Servings is required'),

    directions: yup.string()
        .required('Directions are required'),

})

export default FormValidation
