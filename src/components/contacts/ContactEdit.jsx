import { useContext, useEffect } from "react";
import ContactContext from "../../Context/ContactContext";
import { useParams } from "react-router-dom";

export const ContactEdit = () => {
  const {
    formValues,
    onChange,
    errors,
    setErrors,
    contact,
    getContact,
    updateContact,
    deleteContactFromEdit
  } = useContext(ContactContext);
  let { id } = useParams();

  useEffect(() => {
    getContact(id);
    setErrors({});
  }, []);
  return (
    <div>
      <div className="mt-12">
        <form
          onSubmit={updateContact}
          className="max-w-md mx-auto p-4 bg-white shadow-md rounded-sm"
        >
          <div className="space-y-6">
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 text-sm font-medium">
                Name
              </label>
              <input
                name="name"
                value={formValues["name"]}
                onChange={onChange}
                className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
              />
            </div>
            {errors.name && (
              <span className="text-sm text-red-400">{errors.name[0]}</span>
            )}

            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                E-mail
              </label>
              <input
                name="email"
                value={formValues["email"]}
                onChange={onChange}
                className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
              />
            </div>
            {errors.email && (
              <span className="text-sm text-red-400">{errors.email[0]}</span>
            )}

            <div className="mb-4">
              <label
                htmlFor="contact"
                className="block mb-2 text-sm font-medium"
              >
                Contact
              </label>
              <input
                name="contact"
                value={formValues["contact"]}
                onChange={onChange}
                className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
              />
            </div>
            {errors.contact && (
              <span className="text-sm text-red-400">{errors.contact[0]}</span>
            )}
          </div>

          <div className="my-4 space-x-2">
            <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md">
              Update
            </button>

            <button
              onClick={() => deleteContactFromEdit(contact.id)}
              className="px-4 py-2 bg-red-500 hover:bg-red-700 text-white rounded-md"
            >
              Delete
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
