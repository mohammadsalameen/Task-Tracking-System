import TaskItem from "@/components/task/TaskItem";
import { fetchTasks } from "@/services/task.service";
import { ITasks } from "@/types";

const AllTasks =  async() => {
    const tasks : ITasks[]= await fetchTasks();

  return (
    <div className="space-y-4 max-w-2xl mx-auto m-7 p-6 bg-gray-900 text-white rounded-lg shadow-lg">
        <h2 className="text-center text-blue-400 text-lg">All Tasks </h2>
      {tasks.map((item) => (
        <TaskItem key={item.id} task={item} />
      ))}
    </div>
  );
};

export default AllTasks;
