import { fetchTasks } from "@/services/task.service";
import { ITasks } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface IProps {
  params: { task: string };
}

const TaskDetails = async ({ params }: IProps) => {
    const tasks : ITasks[] = await fetchTasks(); 
    const task  = tasks.find((t) => t.id === Number(params.task));

    if (!task) {
        return (
          <div className="text-center text-red-500 text-lg font-semibold">
            Task not found
            <Link
              href="/"
              className="mt-4 block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
            >
              Back to Tasks
            </Link>
          </div>
        );
    }
    
  return (
    <div className="max-w-2xl mx-auto m-7 p-6 bg-gray-900 text-white rounded-lg shadow-lg">


      <h1 className="text-3xl font-bold mb-4 text-blue-400">Task Details</h1>
      <p className="text-lg">
        <strong>ID:</strong> {task.id}
      </p>
      <h2 className="text-xl font-semibold">
        <strong>Title:</strong> {task.todo}
      </h2>
      <Image
        src={
          task.completed
            ? "https://banner2.cleanpng.com/20180315/djw/av0u3beuj.webp"
            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpsNw7m0m0T-Q2zkI2X3zyK6gt5QUkv8BJFg&s"
        }
        width={50}
        height={50}
        alt="Completed Image"
      />
      <h3
        className={`mt-2 text-lg font-medium px-4 py-2 rounded-lg inline-block 
        ${
          task.completed
            ? "bg-green-500 text-white"
            : "bg-yellow-500 text-black"
        }`}
      >
        {task.completed ? "✅ Completed" : "⏳ Pending"}
      </h3>

      <Link
        href="/"
        className="mt-6 inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
      >
        Back to Tasks
      </Link>
    </div>
  );
};

export default TaskDetails;
