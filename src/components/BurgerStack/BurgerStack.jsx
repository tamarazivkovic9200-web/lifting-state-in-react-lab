import Ingredient from '../Ingredient/Ingredient.jsx';

const BurgerStack = ({ ingredients = [], onRemove }) => {
  return (
    <ul aria-label="Burger stack">
      {ingredients.length === 0 ? (
        <li
          style={{
            backgroundColor: '#555',
            textAlign: 'center',
            fontStyle: 'italic',
            opacity: 0.7,
          }}
        >
          No Ingredients
        </li>
      ) : (
        ingredients.map((ingredient, idx) => (
          <Ingredient
            key={`${ingredient.name}-${idx}`}
            ingredient={ingredient}
            index={idx}
            onRemove={onRemove}
            isStack={true}
          />
        ))
      )}
    </ul>
  );
};

export default BurgerStack;