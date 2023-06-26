import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/operations';
import s from './ContactListItem.module.css';

const ContactListItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  return (
    <li className={s.contactItem}>
      {name}: {phone}
      <button
        type="button"
        className={s.deleteBtn}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactListItem;
