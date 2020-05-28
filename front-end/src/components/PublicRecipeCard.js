import React from 'react';

export default function RecipeCard ({cardInfo}) {
    return (
    <div className="recipeCard">
        <h2>{cardInfo.title}</h2>
        <div className="ingredientsWrap">
            <h5>Ingredients:</h5>
            <p>{cardInfo.ingredients}</p>
        </div>
        <div className="categoryWrap">
            <h5>Category:</h5>
            <p>{cardInfo.category}</p>
        </div>
        <div className="instructionsWrap">
            <h5>Intructions:</h5>
            <p>{cardInfo.intructions}</p>
        </div>
    </div>
    )
} 