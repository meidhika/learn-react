import { Link } from "react-router-dom";

function LoginButton({ scrolled, children }) {
  return (
    <Link
      to="/login"
      className={`px-4 py-2 rounded-full transition font-bold ${
        scrolled
          ? "bg-blue-600 text-white hover:bg-blue-700"
          : "bg-white text-blue-600 hover:bg-blue-100"
      }`}
    >
      {children || "Login"}
    </Link>
  );
}

export default LoginButton;
