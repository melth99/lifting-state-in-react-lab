// src/App.jsx

import BurgerStack from './components/BurgerStack/BurgerStack';
import IngredientList from './components/IngredientList/IngredientList';
import './App.css';
import { useState } from 'react';
import { use } from 'react';

const App = () => {

  const [stack, setStack] = useState([])
  const availableIngredients = [
    { name: 'Kaiser Bun', color: 'saddlebrown' },
    { name: 'Sesame Bun', color: 'sandybrown' },
    { name: 'Gluten Free Bun', color: 'peru' },
    { name: 'Lettuce Wrap', color: 'olivedrab' },
    { name: 'Beef Patty', color: '#3F250B' },
    { name: 'Soy Patty', color: '#3F250B' },
    { name: 'Black Bean Patty', color: '#3F250B' },
    { name: 'Chicken Patty', color: 'burlywood' },
    { name: 'Lettuce', color: 'lawngreen' },
    { name: 'Tomato', color: 'tomato' },
    { name: 'Bacon', color: 'maroon' },
    { name: 'Onion', color: 'lightyellow' },
    { name: 'Cheddar Cheese', color: '#FDE18B' },
    { name: 'Swiss Cheese', color: '#F1E1A8' },
  ];

  const [ingredients, setIngredients] = useState(availableIngredients)

  function handleAdd(addToBurger) {
    console.log('handleadd');
    setStack(prevStack => [...prevStack, addToBurger]);
    setIngredients(
      availableIngredients.filter(ingredient => ingredient.name !== addToBurger.name))
  }

  function handleDel(removedFood) {
    setStack(prevStack => prevStack.filter(food => food.name !== removedFood.name));
    setIngredients(prevIngredients => [...prevIngredients, removedFood]);
  }

  console.log(ingredients, 'intial ingredient justname')
  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
        <IngredientList ingredients={ingredients}
          stack={stack}
          setStack={setStack}
          setIngredients={setIngredients}
          availableIngredients={availableIngredients}
          handleAdd={handleAdd}></IngredientList>
        <BurgerStack stack={(stack)} handleDel={handleDel} />
      </section>
    </main>
  );

};

export default App;
