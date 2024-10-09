import { useParams } from "react-router-dom";

const User = () => {
  const { userId } = useParams();
  return (
    <div>
      <div className="bg-orange-500 text-black text-3xl text-center">
        {" "}
        User: {userId}
      </div>
    </div>
  );
};

export default User;
