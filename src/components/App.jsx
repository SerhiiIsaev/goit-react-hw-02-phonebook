import { Component } from "react";
import { nanoid } from 'nanoid'

import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";

export default class App extends Component {

  state={
    contacts: [],
    filter: '',
  }

  onFilterChange = (e) => {
    this.setState({
      filter: e.target.value.toLocaleLowerCase()
    })
  }

  getFilteredContacts = () => {
    const { contacts, filter } = this.state
    let filteredContacts = []
    if (!filter) {
      filteredContacts = [...contacts]
    } else {
      const filteredItems = contacts.filter(item => item.name.includes(filter))
      filteredContacts = [...filteredItems]
    }
    return filteredContacts
  }

  addContact = (contact) => {
    const {contacts} = this.state
      const chekContact = contacts.filter(item => item.name === contact.name)
      if (chekContact.length > 0) {
        return alert(`${contact.name} is already in contacts`)
      } else {
        this.setState((prev) => {
        const newContact = {
            id: nanoid(),
          ...contact
        }
      
        return {
          contacts: [...prev.contacts, newContact]
        }
      })}
    
  }

  removeContact = (id) => {
    this.setState((prev) => {
        const newContacts = prev.contacts.filter((item) => item.id !== id);
        return {
          contacts: newContacts
        }
    })
  }

  render() {
    const data = this.getFilteredContacts()
    return(
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact}/>

        <h2>Contacts</h2>
        <Filter onFilterChange={this.onFilterChange} />
        <ContactList items = {data} removeContact={this.removeContact} />
      </div>
    )
  };
};
