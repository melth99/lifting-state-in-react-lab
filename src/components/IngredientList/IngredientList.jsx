import { useState } from "react";

// src/components/IngredientList/IngredientList.jsxuseState
const IngredientList = (props) => {
    console.log(props, 'props');

    // const ingredLis = props.ingredients
    //  console.log(ingredLis, 'ingredLis')


    return (
        <>
            <h1>Ingredient List</h1>
            <section className="ingredient-list">
                <h2>Ingredients</h2>
                {props.ingredients.length > 0 ? (
                    <ul>
                        {props.ingredients.map((ingredient, index) => (
                            <li key={`ingredient-${index}`}>
                                Ingredient: {ingredient.name}, Color: {ingredient.color}
                                <button onClick={() => props.handleAdd(ingredient)}>Add to burger</button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <h3>Nothing here!</h3>
                )}
            </section>
        </>
    )
}

export default IngredientList;
