const Recipe = ({ id, onDel, recipe }) => {
    const { name, ingredients, cuisine, difficulty, cookTime, servings, allergens } = recipe;
    return (
        <li key={id} className="recipe-item">
            <h4 className="recipe-title">{name}</h4>
            <p className="recipe-ingredients">{ingredients}</p>
            <p className="recipe-info1">{cuisine} | {difficulty} | {cookTime}</p>
            <p className="recipe-info2">{servings} | {allergens}</p>
            <button className="del-btn" onClick={() => onDel(id)}>Delete</button>
        </li>
    )
}

export default Recipe;