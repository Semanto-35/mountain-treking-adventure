import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";


const Register = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState('');
  console.log(error);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    if (name.length < 6) {
      setError("name should be more then 6 character");
      return;
    }
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");

    if (password.length < 6) {
      setError('Password should be 6 characters or longer');
      return;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordRegex.test(password)) {
      setError('At least one uppercase, one lowercase, one number, one special character');
      return;
    }

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            navigate("/");
          })
          .catch((err) => {
            setError(err.message);
          });
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  const googleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center mx-4">
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
          {error && <label className="label text-red-600">{error}</label>}
          <div className="form-control mt-6">
            <button className="btn bg-[#2a9d8f] rounded-lg text-white text-lg">Register</button>
          </div>
        </form>
        <p className="text-center font-semibold">
          Allready Have An Account ?{" "}
          <Link className="text-[#2a9d8f]" to="/login">
            Login
          </Link>
        </p>
        <button onClick={googleLogin} className="btn mt-8 btn-sm text-lg btn-outline w-9/12 mx-auto">
          <FcGoogle></FcGoogle>
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Register;