import { useSelector } from "react-redux";
import authSelectors from "Redux/auth/auth-selector";
import { useGetContactsQuery } from "Redux/contacts/contactsApi";
import Container from "components/Container";
import Form from "components/Form";
import ContactList from "components/ContactList";
import Filter from "components/Filter";

const ContactsPage = () => {
    const { data } = useGetContactsQuery();
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
        <Container>
            <Form />
            {isLoggedIn && data && (data.length > 1 ? <Filter /> : "")}
            <ContactList />
        </Container>
    );
};

export default ContactsPage;