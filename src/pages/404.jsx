import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-2">Oops! Page not found.</p>
      <p className="text-gray-500 mb-6 text-center max-w-md">
        The page you’re looking for doesn’t exist or has been moved. But don’t
        worry, you can go back to the homepage.
      </p>
      <Link
        to="/"
        className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Go to Homepage
      </Link>
    </div>
  );
}
