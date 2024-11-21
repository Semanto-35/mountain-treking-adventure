import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import app from "../firebase/firebase.config";
import { toast } from "react-toastify";


const ForgetPassword = () => {
  const auth = getAuth(app);
  const emailRef = useRef();
  const location = useLocation();
  const getedEmail = location.state?.email || "";
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    if (!email) {
      alert("Please enter your email to reset the password.");
    }
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.info("Forget password email sent")
        navigate('/login');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });

  }

  return (
    <div className="min-h-screen flex justify-center items-center">
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
              defaultValue={getedEmail}
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#f1c40f] rounded-lg text-lg">Reset Password</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;