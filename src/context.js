import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
    switch(action.type) {
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            }
        default: 
            return state;
    }
}

export class Provider extends Component {

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
            ],
            dispatch: action => {
                this.setState(state => reducer(state, action))
            }
        
        };

        render() {
            return (
                <Context.Provider value={ this.state }>
                 {this.props.children}
                </Context.Provider>
            )
        }
}

export const Consumer = Context.Consumer;