import React, { useState } from 'react';
import '../assets/css/contactlist.css';

function ContactList() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contacts, setContacts] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        setContacts(contacts.concat({ name: name, email: email }));
        setName('');
        setEmail('');
    };
    
    return (
        <div className="container">
            <div className="form-wrapper">
                <h2>Add Contact</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <button type="submit">Add</button>
                </form>
            </div>
            <div className="list-contacts">
                <h2>Contact List</h2>
                {contacts.map((contact, index) => (
                    <div className="contact" key={index}>
                        <p className="contact-name">{contact.name}</p>
                        <p className="contact-email">{contact.email}</p>
                    </div>
                ))}
            </div>
        </div>

    );
}

export default ContactList;
