import { useDispatch, useSelector } from "react-redux";
import { ContainerSearch, Title, Input } from "./Filter.styled";
import { filter, getFilter } from "Redux/contacts/contactsSlice";
import { motion } from "framer-motion";

const Filter = () => {
    const dispatch = useDispatch();
    const value = useSelector(getFilter);

    const onChange = (event) => {
        dispatch(filter(event.currentTarget.value.toLocaleLowerCase().trim()));
    };

    return (
        <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.5 }}
        >
            <ContainerSearch>
                <Title>Find contacts by name</Title>
                <Input 
                type="text" 
                value={value} 
                onChange={onChange} 
                placeholder="Search contact"
                />
            </ContainerSearch>
        </motion.div>
    );
};

export default Filter;