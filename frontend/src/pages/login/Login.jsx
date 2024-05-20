import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
        <h1 className=" text-3xl font-semibold text-center text-gray-300">
          Chat App
        </h1>
        <span className="text-blue-700 text-2xl font-semibold ">Login</span>

        <form action="">
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-100">
                Username
              </span>
            </label>
            <input
              type="text"
              className="w-full input input-bordered h-10"
              placeholder="Enter a  username"
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text text-gray-100">
                Password
              </span>
            </label>

            <input
              type="password"
              className="w-full input input-bordered h-10"
              placeholder="Enter Password"
            />
          </div>

          <Link
            to="/signup"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            {"Don't"} have an account ?
          </Link>

          <div>
            <button className="btn btn-block btn-sm mt-2">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
