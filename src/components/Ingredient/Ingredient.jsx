const Ingredient = ({ ingredient, index, onAdd, onRemove, isStack }) => {
  if (!ingredient) return null;

  return (
    <li style={{ backgroundColor: ingredient.color }}>
      <span>{ingredient.name}</span>
      {isStack ? (
        <button onClick={() => onRemove(index)}>X</button>
      ) : (
        <button onClick={() => onAdd(ingredient)}>+</button>
      )}
    </li>
  );
};

export default Ingredient;