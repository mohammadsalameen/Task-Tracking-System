import Spinner from "@/components/spinner/Spinner";
import TaskItem from "@/components/task/TaskItem";
import { fetchTasks } from "@/services/task.service";
import { ITasks } from "@/types";
import { Suspense } from "react";

const AllTasks = async () => {
  const tasks: ITasks[] = await fetchTasks();

  return (
    <div className="space-y-4 max-w-2xl mx-auto m-7 p-6 bg-gray-900 text-white rounded-lg shadow-lg">
      <h2 className="text-center text-blue-400 text-lg font-bold">All Tasks </h2>
      <Suspense fallback={<Spinner/>}>
        {tasks.map((item) => (
          <TaskItem key={item.id} task={item} />))}
      </Suspense>
    </div>
  );
};

export default AllTasks;
