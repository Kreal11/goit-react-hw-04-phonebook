import { useEffect, useState } from 'react';
import { AddContact } from './AddContact/AddContact';
import { AllContacts } from './AllContacts/AllContacts';
import { SearchContacts } from './SearchContact/SearchContact';
import { toast } from 'react-toastify';
import styled from 'styled-components';

export const App = () => {
  // state = {
  //   contacts: [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ],
  //   filter: '',
  // };

  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  // componentDidMount() {
  //   const contacts = JSON.parse(window.localStorage.getItem('contacts'));

  //   if (contacts?.length) {
  //     this.setState({ contacts, filter: '' });
  //   }
  // }
  // useEffect(() => {
  //   const contacts = JSON.parse(window.localStorage.getItem('contacts'));
  //   if (contacts?.length) {
  //     setContacts(contacts);
  //   }
  // }, []);

  // componentDidUpdate(_, prevState) {
  //   if (prevState.contacts !== this.state.contacts) {
  //     window.localStorage.setItem(
  //       'contacts',
  //       JSON.stringify(this.state.contacts)
  //     );
  //   }
  // }

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddNewContact = newData => {
    const newContact = {
      id: crypto.randomUUID(),
      position: 'default',
      ...newData,
    };

    const existingContact = contacts.some(
      contact =>
        contact.name.toLowerCase().trim() ===
        newContact.name.toLowerCase().trim()
    );
    const existingNameWithoutSpace = contacts.some(
      contact =>
        contact.name.toLowerCase().replace(' ', '').trim() ===
        newContact.name.toLowerCase().replace(' ', '').trim()
    );
    if (existingContact || existingNameWithoutSpace) {
      return toast.warning(`${newContact.name} is already in contacts`);
    } else {
      setContacts(prev => [...prev, { ...newContact }]);
    }
  };

  // const { contacts } = state;
  // const newContact = {
  //   id: crypto.randomUUID(),
  //   position: 'default',
  //   ...newData,
  // };
  // const existingContact = contacts.some(
  //   contact =>
  //     contact.name.toLowerCase().trim() ===
  //     newContact.name.toLowerCase().trim()
  // );
  // const existingNameWithoutSpace = contacts.some(
  //   contact =>
  //     contact.name.toLowerCase().replace(' ', '').trim() ===
  //     newContact.name.toLowerCase().replace(' ', '').trim()
  // );
  // if (existingContact || existingNameWithoutSpace) {
  //   return toast.warning(`${newContact.name} is already in contacts`);
  // } else {
  //   this.setState(prevState => ({
  //     contacts: [...prevState.contacts, newContact],
  //   }));
  // }

  const handleDeleteContact = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  const handleSeacrhContact = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const handlChangeFilter = e => {
    setFilter(e.target.value);
  };

  // const { contacts } = contacts;
  const filteredContact = handleSeacrhContact();

  return (
    <div
      style={{
        marginTop: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <StyledHeaderH1>PHONEBOOK</StyledHeaderH1>
      <div>
        <AddContact addContact={handleAddNewContact} />

        <SearchContacts name={contacts.name} changeFilter={handlChangeFilter} />
        {!contacts.length ? (
          <StyledPlug>There are no contacts yet😭</StyledPlug>
        ) : (
          <AllContacts
            dataContacts={filteredContact}
            deleteContact={handleDeleteContact}
          />
        )}
      </div>
    </div>
  );
};

const StyledPlug = styled.p`
  text-align: center;
  margin-top: 30px;
  font-size: 18px;
`;

const StyledHeaderH1 = styled.h1`
  font-size: 3rem;
  text-transform: uppercase;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  letter-spacing: 2px;
  line-height: 1.2;
  margin-bottom: 10px;
`;
