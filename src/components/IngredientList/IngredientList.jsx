// src/components/IngredientList/IngredientList.jsx

const IngredientList = ({ ingredients, onAdd }) => {
  return (
    <ul aria-label="Available ingredients">
      {ingredients.map((ingredient, idx) => (
        <li
          key={`${ingredient.name}-${idx}`}
          style={{ backgroundColor: ingredient.color }}
          title={ingredient.name}
        >
          <span>{ingredient.name}</span>
          <button
            type="button"
            aria-label={`Add ${ingredient.name}`}
            onClick={() => onAdd(ingredient)}
          >
            +
          </button>
        </li>
      ))}
    </ul>
  );
};

export default IngredientList;