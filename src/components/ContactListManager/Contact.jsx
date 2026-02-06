

function Contact({Contact, Id, onDelete}) {
    //console.log(Contact.Contact)
    const { favorite, name, email, job_title, birthday, notes, website } = Contact
    const handleDelete = () => {
    onDelete(Id);
  };

    return (

        <li key={Id} className="contact-item">
            <div className="contact-info" style={favorite === true ? ({ backgroundColor: "#F54927" }) : ({ backgroundColor: "inherit" })}>
                <span className="contact-name">{name}</span>
                <span className="contact-email">{email}</span>
                <span className="contact-job_title">{job_title}</span>
                <span className="contact-birthday">{birthday}</span>
                <span className="contact-notes">{notes}</span>
                <span className="contact-website">{website}</span>
                {/* <span className="contact-favorite">{contact.favorite}</span> */}
            </div>
            <button
                onClick={handleDelete}
                className="delete-button"
            >
                Delete
            </button>
        </li>

    )
}

export default Contact;