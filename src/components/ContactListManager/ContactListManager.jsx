import React, { useState } from "react";
import "./ContactListManager.css";
import Contact from "./Contact"

function ContactListManager() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [job_title, setJobTitle] = useState("");
  const [birthday, setBirthday] = useState("");
  const [notes, setNotes] = useState("");
  const [website, setWebsite] = useState("");
  const [favorite, setFavorite] = useState(false);

  // Handle input change for name
  function handleNameChange(event) {
    setName(event.target.value);
  }

  // Handle input change for email
  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  // Handle input change for job_title
  function handleJobTitleChange(event) {
    setJobTitle(event.target.value);
  }

  // Handle input change for birthday
  function handleBirthdayChange(event) {
    setBirthday(event.target.value);
  }

  // Handle input change for notes
  function handleNotesChange(event) {
    setNotes(event.target.value);
  }

  // Handle input change for website
  function handleWebsiteChange(event) {
    setWebsite(event.target.value);
  }

  // Handle input change for favorite
  function handleFavoriteChange() {
    setFavorite(!favorite);
  }

  // Add a new contact to the list
  function addContact() {
    if (name.trim() !== "" && email.trim() !== "") {
      setContacts((c) => [...c, { name, email, job_title, birthday, notes, website, favorite }]);

      //sort contacts by favorite
      if (contacts.length !== 0) {
        contacts.sort(function (a, b) { return b.favorite - a.favorite })
      }

      setName("");
      setEmail(""); // Clear the input fields
      setJobTitle("");
      setBirthday("");
      setNotes("");
      setWebsite("");
      setFavorite(false);
      document.getElementById('favoriteCheckbox').checked = false // clear checkbox
    }
  }

  // Delete a contact from the list
  function deleteContact(index) {
    const updatedContacts = contacts.filter((_, i) => i !== index);
    setContacts(updatedContacts);
  }

  return (
    <div className="app-container">
      <h1>Contact List Manager</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter contact name..."
          value={name}
          onChange={handleNameChange}
          className="input-field"
        />
        <input
          type="email"
          placeholder="Enter email address..."
          value={email}
          onChange={handleEmailChange}
          className="input-field"
        />
        <input
          type="text"
          placeholder="Enter job title..."
          value={job_title}
          onChange={handleJobTitleChange}
          className="input-field"
        />
        <label>date of birth</label>
        <input
          type="date"
          placeholder="Enter birthday..."
          value={birthday}
          onChange={handleBirthdayChange}
          className="input-field"
        />
        <input
          type="text"
          placeholder="Enter notes..."
          value={notes}
          onChange={handleNotesChange}
          className="input-field"
        />
        <input
          type="text"
          placeholder="Enter website..."
          value={website}
          onChange={handleWebsiteChange}
          className="input-field"
        />
        <label>add to favorites: 
          <input
          type="checkbox"
          id="favoriteCheckbox"
          value={favorite}
          onClick={handleFavoriteChange}
          className="input-field"
        />
        </label>
        <button onClick={addContact} className="add-button">
          Add Contact
        </button>
      </div>

      <div className="contacts-section">
        <h2>Your Contacts ({contacts.length})</h2>
        {contacts.length === 0 ? (
          <p className="empty-message">No contacts yet. Add one to get started!</p>
        ) : (
          <ol className="contacts-list">
            {contacts.map((contact, index) => (
              <Contact key={index} Contact={contact} Id={index} onDelete={deleteContact} />
            ))}
          </ol>
        )}
      </div>
    </div>
  );
}

export default ContactListManager;