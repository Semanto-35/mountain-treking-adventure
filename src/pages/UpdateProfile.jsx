import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const UpdateProfile = () => {
  const { updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.photo.value;

    updateUserProfile({ displayName: name, photoURL: photoURL })
      .then(() => {
        toast.success("Profile updated Successfully!")
        navigate("/profile");
      })
      .catch((err) => {
        // console.log(err);
      });
  }
  return (
    <div className="min-h-screen max-w-3xl mx-4 md:mx-auto my-12 p-8 bg-[#DDE2E4] rounded-lg">
      <h3 className="text-2xl md:text-3xl px-8 font-medium">Update Your Information</h3>
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            name="name"
            type="text"
            placeholder="name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            name="photo"
            placeholder="photo-url"
            className="input input-bordered"
            required
          />
        </div>
        <div>
          <button className="btn mt-6 bg-[#2a9d8f] text-white text-lg">Update Info</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;