import { useContext, useRef, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const Login = () => {
  const emailRef = useRef(null);
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  const { userLogin, setUser } = useContext(AuthContext);
  const [error, setError] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location?.state ? location.state : "/");
        toast.success("Login in successful");
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
        toast.success("Login in successful");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const handleForgetPassword = () => {
    const email = emailRef.current?.value;
    if (!email) {
      setError('Please provide a valid email address')
    }
    else {
      navigate("/forgetpassword", { state: { email } });
    }
  }

  return (
    <div className="min-h-screen flex justify-center items-center mx-4">
      <div className="card bg-[#f7f7f7] w-full max-w-lg shrink-0 rounded-lg p-10">
        <h2 className="text-2xl font-semibold text-center">
          Login your account
        </h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              ref={emailRef}
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
            {error && (
              <label className="label text-red-600">
                {error}
              </label>
            )}
            <label onClick={handleForgetPassword} className="label">
              <a className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#2a9d8f] rounded-lg text-lg text-white">Login</button>
          </div>
        </form>
        <p className="text-center font-semibold">
          Dont’t Have An Account ?{" "}
          <Link className="text-[#2a9d8f]" to="/register">
            Register
          </Link>
        </p>
        <button onClick={googleLogin} className="btn mt-8 btn-sm text-lg btn-outline w-9/12 mx-auto">
          <FcGoogle></FcGoogle>
          Login with Google</button>
      </div>
    </div>
  );
};

export default Login;