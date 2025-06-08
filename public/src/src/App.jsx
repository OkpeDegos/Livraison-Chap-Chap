import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    const { data, error } = await supabase.from("user").select("*");
    if (!error) {
      setUsers(data);
    }
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Clients Livraison ChapChap</h1>
      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user.id} className="p-3 bg-gray-100 rounded shadow border">
            <strong>{user.nom}</strong> - {user.telephone}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
