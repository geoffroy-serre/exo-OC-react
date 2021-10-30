import { useState } from 'react';
import { plantList } from '../../Data/plants';
import Categories from '../Categories/Categories';
import PlantItem from '../PlantItem/PlantItem';
import './styles.css';

function ShoppingList({ cart, setCart }) {
  const [categoryState, setCategoryState] = useState('all');
  const categories = plantList.reduce((acc, plant) => (acc.includes(plant.category) ? acc : acc.concat(plant.category)), []);

  return (
    <div className="shopping-list">
      <Categories categories={categories} setCategoryState={setCategoryState} />
      <ul className="plant-list">
        {plantList.map((plant) =>
          categoryState === 'all' ? (
            <PlantItem
              key={plant.id}
              id={plant.id}
              name={plant.name}
              description={plant.description}
              price={plant.price}
              image={plant.image}
              light={plant.light}
              carbon={plant.carbon}
              setCart={setCart}
              cart={cart}
            />
          ) : (
            plant.category === categoryState && (
              <PlantItem
                key={plant.id}
                id={plant.id}
                name={plant.name}
                description={plant.description}
                price={plant.price}
                image={plant.image}
                light={plant.light}
                carbon={plant.carbon}
                setCart={setCart}
                cart={cart}
              />
            )
          )
        )}
      </ul>
    </div>
  );
}

export default ShoppingList;
