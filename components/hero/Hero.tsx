import { ITasks } from "@/types";
import TaskItem from "../task/TaskItem";
import { fetchTasks } from "@/services/task.service";
import { notFound } from "next/navigation";
import { Suspense } from "react";

const Hero = async () => {
  const tasks : ITasks[] = await fetchTasks();

  if (!tasks) {
    notFound();
  }

  return (
    <div className="space-y-4 max-w-2xl  mx-auto m-7 p-6 bg-gray-900 text-white rounded-lg shadow-lg">
      <h2 className="font-bold text-blue-400 text-lg text-center">The First 7 Tasks</h2>
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
      {tasks.slice(0, 7).map((item) => (
        <TaskItem key={item.id} task={item} />
      ))}
      </Suspense>
    </div>
  );
};

export default Hero;
