import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'store/contactsSlice';
import Container from './List.styled';
const List = () => {
  const getContacts = (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const contactsIsFiltered = getContacts(
    useSelector(state => state.contacts),
    useSelector(state => state.filter)
  );
  const dispatch = useDispatch();
  return (
    <Container>
      {contactsIsFiltered.map(({ id, name, number }) => (
        <li key={id} className="contact__item">
          <p>
            {name}: {number}
          </p>
          <button
            type="button"
            onClick={() => dispatch(deleteContact(id))}
            className="contact__btn"
          >
            Delete
          </button>
        </li>
      ))}
    </Container>
  );
};
export default List;
