import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row lg:gap-16 gap-8">
        <img
          src="./img/suki.jpg"
          className="max-w-md rounded-lg shadow-2xl"
        />
        <div className="flex flex-col gap-10">
          <div>
            <h1 className="text-8xl font-bold lg:text-left text-center">404</h1>
            <h1 className="text-4xl font-bold lg:text-left text-center">Not Found</h1>
          </div>
          <div>
            <p className="lg:text-left text-center">
              You know the drill, the page you were looking for might have been moved or deleted.
            </p>
            <p className="lg:text-left text-center">Have a Suki photo before you go!</p>
          </div>
          <Link
            to="/"
            className="btn btn-primary btn-lg mx-auto lg:mx-0 flex w-fit">
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
