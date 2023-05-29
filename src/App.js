import { Routes, Route, Link } from "react-router-dom";
import { ContactProvider } from "./Context/ContactContext";

import { Home } from "./components/Home";
import { ContactIndex } from "./components/contacts/ContactIndex";
import { ContactCreate } from "./components/contacts/ContactCreate";
import { ContactEdit } from "./components/contacts/ContactEdit";

function App() {
  return (
    <ContactProvider>
      <div className="App">
        <div className="max-w-7xl mx-auto min-h-screnn">
          <nav>
            <ul className="flex">
              <li className="m-2 p-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md">
                <Link to="/">Home</Link>
              </li>

              <li className="m-2 p-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md">
                <Link to="/contacts">Contacts</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacts" element={<ContactIndex />} />
            <Route path="/contacts/create" element={<ContactCreate />} />
            <Route path="/contacts/:id/edit" element={<ContactEdit />} />
          </Routes>
        </div>
      </div>
    </ContactProvider>
  );
}

export default App;
