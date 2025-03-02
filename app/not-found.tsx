import Link from "next/link";
import Image from "next/image";
import NotFoundImage from '../public/NotFound.png'

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white px-6">
      <Image
        src={NotFoundImage.src} 
        alt="Not Found"
        width={300}
        height={300}
        className="mb-6"
      />

      <h1 className="text-7xl font-bold text-red-500 animate-bounce">404</h1>
      <h2 className="text-3xl font-semibold mt-4">Oops! Page Not Found</h2>
      <p className="mt-2 text-gray-400 text-lg text-center max-w-md">
        The page you are looking for doesn’t exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300 shadow-lg"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
