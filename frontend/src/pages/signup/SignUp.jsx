import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const { loading, signup } = useSignup();
  const handleCheckboxChange = (gender) => {
    setInputs({
      ...inputs,
      gender,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("in", inputs);
    await signup(inputs);
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Chat App
        </h1>
        <span className="text-blue-700 text-2xl font-semibold ">Sign Up</span>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className=" label-text text-base text-gray-100">
                Full Name
              </span>
            </label>
            <input
              type="text"
              className="w-full input input-bordered h-10"
              placeholder="John Doe"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-100">
                Username
              </span>
            </label>

            <input
              type="text"
              className="w-full input input-bordered h-10"
              placeholder="johndoe"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label ">
              <span className="text-base label-text text-gray-100">
                Password
              </span>
            </label>

            <input
              type="password"
              className="w-full input input-bordered h-10"
              placeholder="Enter Password"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label ">
              <span className="text-base label-text text-gray-100">
                Confirm Password
              </span>
            </label>

            <input
              type="password"
              className="w-full input input-bordered h-10"
              placeholder="Confirm Password"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>
          <GenderCheckbox
            onCheckboxChange={handleCheckboxChange}
            selectedGender={inputs.gender}
          />

          <Link
            to="/login"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Already have an account ?
          </Link>

          <div>
            <button
              className="btn btn-block btn-sm mt-2 border border-slate-700"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
