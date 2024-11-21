import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Register = () => {
  const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    //get form data
    const form = new FormData(e.target);
    const name = form.get("name");
    if (name.length < 6) {
      setError({ ...error, name: "name should be more then 6 character" });
    }
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            navigate("/");
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
        // ..
      });
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-[#f7f7f7] w-full max-w-lg shrink-0 rounded-lg p-10">
        <h2 className="text-2xl font-semibold text-center">
          Register your account
        </h2>
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
          {error.name && (
            <label className="label text-sx text-red-500">{error.name}</label>
          )}

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
          {/* email input  */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          {error.register && <label className="label">{error.register}</label>}

          <div className="form-control mt-6">
            <button className="btn bg-[#f1c40f] rounded-lg text-lg">Register</button>
          </div>
        </form>
        <p className="text-center font-semibold">
          Allready Have An Account ?{" "}
          <Link className="text-[#1f7db4]" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;