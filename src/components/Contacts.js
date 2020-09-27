import React, { Component } from 'react'
import Contact from './Contact';

class Contacts extends Component {
    state = {
            contacts : [
                {
                    id: 1,
                    name: 'Adarsh Shivhare',
                    email: 'adarsh@gmail.com',
                    phone: '75871-38569'
                },
                {
                    id: 2,
                    name: 'Ayush Mathur',
                    email: 'ayush@gmail.com',
                    phone: '75871-38579'
                },
                {
                    id: 3,
                    name: 'Dhruv Patel',
                    email: 'dhruv@gmail.com',
                    phone: '75871-38589'
                },
                {
                    id: 4,
                    name: 'Urmi Patel',
                    email: 'urmi@gmail.com',
                    phone: '75871-38599'
                }
            ]
        
        };
    
    deleteContact = (id) => {
        const { contacts } = this.state;

        const newContact = contacts.filter(contact => contact.id !== id);

        this.setState({
            contacts: newContact
        });
    }
    render() {
        const { contacts } = this.state;
        return (
            <React.Fragment>
                {
                    contacts.map(contact => (
                        <Contact key={contact.id} contact={contact} deleteClickHandler={this.deleteContact.bind(this, contact.id)} />
                    ))
                }
            </React.Fragment>
        )
    }
}

export default Contacts;