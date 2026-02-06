import React, { useState } from "react";
import "./BookCollectionManager.css";
import Book from "./Book.jsx"

function BookCollectionManager() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [language, setLanguage] = useState("");
  const [edition, setEdition] = useState("");
  const [pages, setPages] = useState("");
  const [rating, setRating] = useState("");

  // Handle input change for title
  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  // Handle input change for author
  function handleAuthorChange(event) {
    setAuthor(event.target.value);
  }

  // Handle input change for genre
  function handleGenreChange(event) {
    setGenre(event.target.value);
  }

  function handleLanguageChange(event) {
    setLanguage(event.target.value);
  }

  function handleEditionChange(event) {
    setEdition(event.target.value);
  }

  function handlePagesChange(event) {
    setPages(event.target.value);
  }

  function handleRatingChange(event) {
    setRating(event.target.value);
  }

  // Add a new book to the list
  function addBook() {
    if (title.trim() !== "" && author.trim() !== "") {
      setBooks((b) => [...b, { title, author, genre, language, edition, pages, rating }]);
      setTitle("");
      setAuthor(""); // Clear the input fields
      setGenre("");
      setLanguage("");
      setEdition("");
      setPages("");
      setRating("");
    }
  }

  // Delete a book from the list
  function deleteBook(index) {
    const updatedBooks = books.filter((_, i) => i !== index);
    setBooks(updatedBooks);
  }

  return (
    <div className="app-container">
      <h1>Book Collection Manager</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter book title..."
          value={title}
          onChange={handleTitleChange}
          className="input-field"
        />
        <input
          type="text"
          placeholder="Enter author name..."
          value={author}
          onChange={handleAuthorChange}
          className="input-field"
        />
        <input
          type="text"
          placeholder="Enter book genre..."
          value={genre}
          onChange={handleGenreChange}
          className="input-field"
        />
        <input
          type="text"
          placeholder="Enter book language..."
          value={language}
          onChange={handleLanguageChange}
          className="input-field"
        />
        <input
          type="text"
          placeholder="Enter book edition..."
          value={edition}
          onChange={handleEditionChange}
          className="input-field"
        />
        <input
          type="number"
          placeholder="Enter book pages..."
          value={pages}
          onChange={handlePagesChange}
          className="input-field"
        />
        <input
          type="number"
          placeholder="Enter book rating..."
          value={rating}
          onChange={handleRatingChange}
          className="input-field"
        />
        <button onClick={addBook} className="add-button">
          Add Book
        </button>
      </div>

      <div className="books-section">
        <h2>Your Books ({books.length})</h2>
        {books.length === 0 ? (
          <p className="empty-message">No books yet. Add one to get started!</p>
        ) : (
          <ol className="books-list">
            {books.map((book, index) => (
              <Book
                key={index}
                index={index}
                title={book.title}
                author={book.author}
                genre={book.genre}
                language={book.language}
                edition={book.edition}
                pages={book.pages}
                rating={book.rating}
                onDelete={deleteBook}
              />
            ))}
          </ol>
        )}
      </div>
    </div>
  );
}

export default BookCollectionManager;
{/*}
             <li key={index} className="book-item">
                <div className="book-info">
                  <span className="book-title">{book.title}</span>
                  <span className="book-author">by {book.author}</span>
                  <span className="book-genre">{book.genre}</span>
                  <span className="book-language">{book.language}</span>
                </div>
                <button
                  onClick={() => deleteBook(index)}
                  className="delete-button"
                >
                  Delete
                </button>
              </li>
*/}