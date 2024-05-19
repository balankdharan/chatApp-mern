import GenderCheckbox from "./GenderCheckbox";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Chat App
        </h1>
        <span className="text-blue-700 text-2xl font-semibold ">Sign Up</span>

        <form action="">
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              className="w-full input input-bordered h-10"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>

            <input
              type="text"
              className="w-full input input-bordered h-10"
              placeholder="johndoe"
            />
          </div>
          <div>
            <label className="label ">
              <span className="text-base label-text">Password</span>
            </label>

            <input
              type="password"
              className="w-full input input-bordered h-10"
              placeholder="Enter Password"
            />
          </div>
          <div>
            <label className="label ">
              <span className="text-base label-text">Confirm Password</span>
            </label>

            <input
              type="password"
              className="w-full input input-bordered h-10"
              placeholder="Confirm Password"
            />
          </div>
          <GenderCheckbox />

          <a
            href="#"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Already have an account ?
          </a>

          <div>
            <button className="btn btn-block btn-sm mt-2 border border-slate-700">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;