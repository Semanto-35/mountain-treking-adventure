import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";


const MyProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="max-w-3xl min-h-screen mx-auto text-center space-y-6 p-16 rounded-lg my-12 bg-[#DDE2E4]">
      <h3 className="text-3xl font-semibold">Welcome! {user?.displayName} to your profile</h3>
      <div className="flex justify-center items-center">
        <img className="rounded-full w-60 h-60 object-cover" src={user?.photoURL} alt="" />
      </div>
      <h4 className="text-xl font-semibold">{user?.displayName}</h4>
      <p className="text-lg">{user?.email}</p>
      <Link to={'/updateProfile'} className="btn text-white bg-[#1f7db4] text-lg">Update Profile</Link>
    </div>
  );
};

export default MyProfile;