import { useContext, useEffect } from "react";
import ContactContext from "../../Context/ContactContext";

export const ContactCreate = () => {
  const { formValues, onChange, storeContact, errors, setErrors } =
    useContext(ContactContext);

  useEffect(() => {
    setErrors({});
  }, []);
  return (
    <div className="mt-12">
      <form
        onSubmit={storeContact}
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
            <label htmlFor="contact" className="block mb-2 text-sm font-medium">
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

        <div className="my-4">
          <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md">
            Store
          </button>
        </div>
      </form>
    </div>
  );
};
