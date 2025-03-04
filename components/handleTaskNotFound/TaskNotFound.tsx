import Image from "next/image";
import Link from "next/link";
const TaskNotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white text-center px-6">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
            alt="Task Not Found"
            width={200}
            height={200}
            className="mb-6"
          />
    
          <h1 className="text-4xl font-bold text-red-500">Task Not Found</h1>
          <p className="mt-2 text-gray-400 text-lg max-w-md">
            Oops! The task you’re looking for doesn’t exist or has been removed.
          </p>
    
          <Link
            href="/"
            className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300 shadow-lg"
          >
            Go Back Home
          </Link>
        </div>
      );
}

export default TaskNotFound
