import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="./img/suki.jpg"
          className="max-w-md rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-8xl font-bold">404</h1>
          <h1 className="text-4xl font-bold">Not Found</h1>
          <p className="py-6">You know the drill, the page you were looking for might have been moved or deleted.</p>
          <p className="py-6">Have a Suki photo before you go!</p>
          <Link
            to="/"
            className="btn btn-primary">
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
