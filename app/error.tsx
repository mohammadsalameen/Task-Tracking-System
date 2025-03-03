"use client";

interface IProps {
  error: Error;
  reset: () => void;
}

const Error = (props: IProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-white px-6">
      <h2 className="text-5xl font-bold text-red-500 animate-bounce">Oops!!</h2>
      <h3 className="text-2xl font-semibold mt-4 text-black">
        Something went wrong while processing your request!
      </h3>
      <p className="mt-2 text-gray-400 text-lg text-center max-w-md">
        You can{" "}
        <button
          onClick={props.reset}
          className="text-blue-400 hover:text-blue-500 font-semibold underline transition"
        >
          try again
        </button>{" "}
        or{" "}
        <button
          onClick={() => window.location.reload()}
          className="text-green-400 hover:text-green-500 font-semibold underline transition"
        >
          refresh the page
        </button>
      </p>
      <p className="mt-4 text-sm text-blue-300 bg-gray-800 p-4 rounded-lg shadow-md max-w-md text-center">
        Contact the system administrator and provide the following info:
        <span className="block mt-2 text-red-400 font-mono">{props.error.message}</span>
      </p>
    </div>
  );
};

export default Error;
