import TaskItem from "@/components/task/TaskItem";
import { fetchTasks } from "@/services/task.service";
import { ITasks } from "@/types";
import { Suspense } from "react";

const AllTasks = async () => {
  const tasks: ITasks[] = await fetchTasks();

  return (
    <div className="space-y-4 max-w-2xl mx-auto m-7 p-6 bg-gray-900 text-white rounded-lg shadow-lg">
      <h2 className="text-center text-blue-400 text-lg font-bold">All Tasks </h2>
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

        {tasks.map((item) => (
          <TaskItem key={item.id} task={item} />
        ))}
        
      </Suspense>
    </div>
  );
};

export default AllTasks;
