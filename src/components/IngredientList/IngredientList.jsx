import Ingredient from '../Ingredient/Ingredient.jsx';

const IngredientList = ({ ingredients = [], onAdd }) => {
  return (
    <ul aria-label="Available ingredients">
      {ingredients.map((ingredient, idx) => (
        <Ingredient
          key={`${ingredient.name}-${idx}`}
          ingredient={ingredient}
          index={idx}
          onAdd={onAdd}
          isStack={false}
        />
      ))}
    </ul>
  );
};

export default IngredientList;