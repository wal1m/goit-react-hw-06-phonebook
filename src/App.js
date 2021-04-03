import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from './redux/contacts/contacts-actions'

import Container from './components/Container/Container';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

function App() {
  const [filter, setFilter] = useState('');

  const dispatch = useDispatch();

  // const hendleSubmit = (contact) => {
  //   if (contacts.find(({ name }) => name === contact.name)) {
  //     alert(`${contact.name} is already in contacts`);
  //     return;
  //   }

  //   // setContacts((prevState) => [contact, ...prevState]);
  // };

  const handleSearchChange = e => {
    setFilter(e.target.value);
  };
  dispatch(filterContacts(filter));

   // useEffect(() => {
  //   // console.log("Чтение из localStorage", localStorage.getItem("contacts"));
  //   const contactsSave = localStorage.getItem("contacts");
  //   const parsedContactsSave = JSON.parse(contactsSave);
  //   if (parsedContactsSave) {
  //     setContacts(parsedContactsSave);
  //   }
  // }, []);

  // useEffect(() => {
  //   // console.log("Запись в localStorage");
  //   localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter onChange={handleSearchChange} />
      {/* <Filter  /> */}
      <ContactList />
      {/* <ContactList contacts={filtrContactList} onDelete={handleDeleteContact} /> */}
    </Container>
  );
}

export default App;
