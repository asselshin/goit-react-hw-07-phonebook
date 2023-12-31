import { useSelector } from 'react-redux';
import { getContacts, getFilterState } from 'redux/selectors';
import ContactListItem from '../ContactListItem/ContactListItem';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterState);
  const normalizedFilter = filter.toLowerCase();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <ul>
      {filteredContacts.map(({ id, name, phone }) => {
        return <ContactListItem key={id} id={id} name={name} phone={phone} />;
      })}
    </ul>
  );
};

export default ContactList;
