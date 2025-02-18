// src/components/BurgerStack/BurgerStack.jsx

const BurgerStack = (props) => {
    console.log('burger staCK PROPS', props)
 
    



    return (
       
        <section className="burger">
            
            
       { props.stack.map((ingredient,index) => (
            <li key={`ingredient-${index}`}> 
     { `Food:${ingredient.name} Color:${ingredient.color}`}
     <button onClick={() => props.handleDel(ingredient)}>Remove</button>

        </li>
        ))}
        </section>
    
    )

}

export default BurgerStack;
