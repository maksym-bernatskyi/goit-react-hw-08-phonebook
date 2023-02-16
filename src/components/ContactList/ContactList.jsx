import { useSelector } from "react-redux";
import { getFilter } from "Redux/contacts/contactsSlice";
import { useGetContactsQuery, useDeleteContactMutation } from "Redux/contacts/contactsApi";
import { ContainerList, Title, ButtonClose, TextList } from "./ContactList.styled";
import { Loader } from "components/Loader/Loader";
import Table from "react-bootstrap/Table";
import { motion } from "framer-motion";
import { MdOutlineDelete } from "react-icons/md";

const ContactList = () => {
    const { data = [], isFetching } = useGetContactsQuery();
    const [deleteContact] = useDeleteContactMutation();
    const nameFilter = useSelector(getFilter);

    const FilterItems = () => {
        return data.filter((item) => item.name.toLowerCase().includes(nameFilter));
    };

    let contacts = nameFilter === "" ? data : FilterItems();

    return (
        <motion.div
            initial={{ y: 300, opacity: 0 }}
            animate={{ y:0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.6 }}
        >
            <ContainerList>
                <Title>Contacts</Title>
                {isFetching && <Loader />}
                {data.length > 0 ? (
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Contact Name</th>
                                <th>Phone number</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contacts.map(({ id, name, number }, index) => (
                                <tr key={id} className="text">
                                    <td>{name}</td>
                                    <td>{number}</td>
                                    <td>
                                        <ButtonClose onClick={() => deleteContact(id)}>
                                            <MdOutlineDelete size={20} />
                                        </ButtonClose>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                ) : (
                    <TextList>No Contacts</TextList>
                )}
            </ContainerList>
        </motion.div>
    );
};

export default ContactList;