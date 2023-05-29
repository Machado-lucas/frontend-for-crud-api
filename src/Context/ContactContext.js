import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
axios.defaults.baseURL = "http://lucasmachadolv.eu1.alfasoft.pt/api/v1/";

const ContactContext = createContext();

const initialForm = {
  name: "",
  email: "",
  contact: "",
}

export const ContactProvider = ({ children }) => {
  const [formValues, setFormValues] = useState(initialForm);

  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState([]);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const getContacts = async () => {
    const apiContacts = await axios.get("contacts");
    setContacts(apiContacts.data.data);
  };

  const getContact = async (id) => {
    const response = await axios.get("contacts/" + id);
    const apiContact = response.data.data
    setContact(apiContact);
    setFormValues({
      name: apiContact.name,
      email: apiContact.email,
      contact: apiContact.contact
    })
  };

  const storeContact = async (e) => {
    e.preventDefault();
    try {
      await axios.post("contacts", formValues);
      setFormValues(initialForm)
      navigate("/contacts");
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };

  const updateContact = async (e) => {
    e.preventDefault()
    try {
      await axios.put("contacts/" + contact.id, formValues)
      setFormValues(initialForm)
      navigate("/contacts");
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  }

  const deleteContact = async (id) => {
    if(!window.confirm("Are you sure?")) {
      return;
    }
    await axios.delete("contacts/" + id)
    getContacts();
  }

  const deleteContactFromEdit = async (id) => {
    if(!window.confirm("Are you sure?")) {
      return;
    }
    setFormValues(initialForm)
    navigate("/contacts");
    await axios.delete("contacts/" + id)
    getContacts();
  }

  return (
    <ContactContext.Provider
      value={{
        contact,
        contacts,
        getContact,
        getContacts,
        onChange,
        formValues,
        storeContact,
        errors,
        setErrors,
        updateContact,
        deleteContact,
        deleteContactFromEdit
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export default ContactContext;
