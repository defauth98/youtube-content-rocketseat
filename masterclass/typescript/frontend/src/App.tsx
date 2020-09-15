import React, { useEffect, useState } from "react";
import api from "./services/api";

import User from "./components/User";

interface Iuser {
  name: string;
  email: string;
}

function App() {
  const [users, setUsers] = useState<Iuser[]>();

  useEffect(() => {
    api.get<Iuser[]>("/users").then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <div className="app">
      {users.map((user) => (
        <User user={user} key={user.email} />
      ))}
    </div>
  );
}

export default App;
