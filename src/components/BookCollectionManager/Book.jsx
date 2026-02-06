function Book({index, title, author, genre, language, edition, pages, rating, onDelete}) {
return (
        <li className="book-item">
            <div className="book-info">
                <span className="book-title">{title}</span>
                <span className="book-author">by {author}</span>
                <span className="book-genre">genre: {genre}</span>
                <span className="book-language">language: {language}</span>
                <span className="book-edition">edition: {edition}</span>
                <span className="book-pages">pages: {pages}</span>
                <span className="book-rating">rating: {rating}</span>
            </div>
            <button
                onClick={() => onDelete(index)}
                className="delete-button"
            >
                Delete
            </button>
        </li>
)
}

export default Book