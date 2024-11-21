import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";


const UpdateProfile = () => {
  const { updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.photo.value;
    console.log(name, photoURL);
    updateUserProfile({ displayName: name, photoURL: photoURL })
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="min-h-screen max-w-3xl mx-auto border my-12 p-8 bg-[#f7f7f7]">
      <h3 className="text-3xl px-8 font-medium">Update Your Information</h3>
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
          <button className="btn mt-6 btn-warning text-lg">Update Info</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;