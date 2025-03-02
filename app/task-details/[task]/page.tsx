import TaskDetailsCard from "@/components/task-card/TaskDetailsCard";
import { fetchTasks } from "@/services/task.service";
import { ITasks } from "@/types";
import Link from "next/link";
import { Suspense } from "react";

interface IProps {
  params: { task: string };
}

const TaskDetails = async ({ params }: IProps) => {
  const tasks: ITasks[] = await fetchTasks();
  const task = tasks.find((t) => t.id === Number(params.task));

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
      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-screen text-white">
            <div className="flex flex-col items-center space-y-4">
              {/* Spinner */}
              <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

              <p className="text-lg font-semibold text-gray-300">Loading...</p>
            </div>
          </div>
        }
      >
        <TaskDetailsCard task={task} />
      </Suspense>
    </div>
  );
};

export default TaskDetails;
