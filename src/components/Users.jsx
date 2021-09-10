import React from "react";
import { Header, List } from "semantic-ui-react";

const Users = ({ users }) => {
  return (
    <>
      <Header>Liked by</Header>
      <List>
        {users.map((user) => (
          <List.Item key={user.id} icon="user" content={user.username} />
        ))}
      </List>
    </>
  );
};

export default Users;
