import PropTypes from 'prop-types';
import { ContactListItem } from './ContactItem';

const ContactList = () => {
    return (
        <ul>
            <ContactListItem />
            <ContactListItem />
            <ContactListItem/>
            
        </ul>
    )
}

export {ContactList}