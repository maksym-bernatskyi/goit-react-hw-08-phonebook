import { useState } from 'react';
import { useGetContactsQuery, useCreateContactMutation } from 'Redux/contacts/contactsApi';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import Input from 'components/Input';
import { FormContainer, ButtonSubmit } from "./Form.styled";
import { TailSpin } from 'react-loader-spinner';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';

const Form = () => {
    const [createContact, { isLoading }] = useCreateContactMutation();
    const { data: contacts } = useGetContactsQuery();
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");

    const reset = () => {
        setName("");
        setNumber("");
    };

    const handleInputChange = (event) => {
        setName(event.currentTarget.value);
    };

    const handleSubmit = (event) => {
        if (number.length > 13) {
        return alert('Please enter correct phone number!');
    }

        const checkName = contacts.find((element) => element.name === name);

        checkName === undefined 
            ? createContact({ name, number }) 
            : toast.error(`${name} is already in contacts!`, {
                position: toast.POSITION.TOP_RIGHT,
                theme: "dark",
            });

        event.preventDefault();
        reset();
    };

        return (
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.5 }}      
            >
                <FormContainer onSubmit={handleSubmit}>
                    <Input 
                        onChange={handleInputChange} 
                        title="Create contact tab" 
                        type="text" 
                        name="name" 
                        value={name} 
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        placeholder="Please enter the name"
                        />
                    <PhoneInput 
                        defaultCountry="UA"
                        onChange={(number) => {setNumber(number)}}
                        region="Europe"
                        title="Number"
                        type="tel"
                        name="number"
                        value={number}
                        placeholder="Please enter phone number"
                        autoComplete="off"
                        international
                        className="inputPhone"
                        maxLength="16"
                        />
                    <ButtonSubmit disabled={isLoading} onSubmit={handleSubmit}>
                        {isLoading && <TailSpin color="#ffffff" width="16" height="16" />}
                        Add contact
                    </ButtonSubmit>
                </FormContainer>
            </motion.div>
        );
    };

export default Form;