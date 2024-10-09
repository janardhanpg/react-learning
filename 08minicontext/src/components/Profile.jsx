import UserContext from "../context/UserContext";
import {useContext} from "react";

const Profile = () => {
  const { user } = useContext(UserContext);
  if (!user) return <h1>Not logged in</h1>;
  else return <div>Profile:{user.username}</div>;
};

export default Profile;
