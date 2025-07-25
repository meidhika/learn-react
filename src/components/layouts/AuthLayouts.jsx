import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";

const AuthLayouts = (props) => {
  const { children, title, type } = props;
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  return (
    <div>
      <div
        className={`flex justify-center min-h-screen items-center ${
          isDarkMode && "bg-slate-900"
        }`}
      >
        <Link
          to="/"
          className="absolute top-0 left-0 bg-transparent text-white font-bold text-lg p-4"
        >
          Home
        </Link>
        <div className="w-full max-w-xl border border-gray-300 rounded-lg p-8">
          <button
            className="absolute top-5 right-5 border border-gray-300 p-2 text-white rounded"
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            {isDarkMode ? "☀" : "🌙"}
          </button>
          <h1 className="text-3xl font-bold mb-2 text-blue-500">{title}</h1>
          <p className="font-medium text-slate-600 mb-8">
            Welcome, Please Enter Your Details
          </p>
          {children}
          <Navigation type={type} />
        </div>
      </div>
    </div>
  );
};

const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <p className="text-slate-500 text-sm text-center mt-5">
        Don't Have an Account?{" "}
        <Link to="/register" className="text-blue-500 font-bold">
          Register
        </Link>
      </p>
    );
  } else {
    return (
      <p className="text-slate-500 text-sm text-center mt-5">
        Already Have an Account?{" "}
        <Link to="/login" className="text-blue-500 font-bold">
          Login
        </Link>
      </p>
    );
  }
};

export default AuthLayouts;
