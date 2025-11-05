// src/components/BurgerStack/BurgerStack.jsx

const BurgerStack = ({ ingredients, onRemove }) => {
  return (
    <ul aria-label="Burger stack">
      {ingredients.map((ingredient, idx) => (
        <li
          key={`${ingredient.name}-${idx}`}
          style={{ backgroundColor: ingredient.color }}
          title={`${ingredient.name} (stack item #${idx + 1})`}
        >
          <span>{ingredient.name}</span>
          <button
            type="button"
            aria-label={`Remove ${ingredient.name} at position ${idx + 1}`}
            onClick={() => onRemove(idx)}
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
};

export default BurgerStack;