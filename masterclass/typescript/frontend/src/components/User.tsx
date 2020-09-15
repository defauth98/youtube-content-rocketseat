import React from "react";

interface Iuser {
  name: string;
  email: string;
}

interface Props {
  user: Iuser;
}

const User: React.FC<Props> = ({ user, children }) => {
  return (
    <div>
      <strong>Nome: </strong>
      {user.name} <br />
      <strong>Email: </strong>
      {user.email} <br />
    </div>
  );
};

export default User;
