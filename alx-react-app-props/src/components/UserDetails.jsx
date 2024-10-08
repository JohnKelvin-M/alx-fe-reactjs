import { useContext } from 'react';
import UserContext from '../UserContext'; // Adjusted import since UserContext is one folder up

function UserDetails() {
  const userData = useContext(UserContext);

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;

