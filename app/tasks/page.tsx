import TaskItem from "@/components/task/TaskItem";
import { ITasks } from "@/types";

const AllTasks = async () => {
  const data = await fetch("https://dummyjson.com/todos", {
    method: "GET",
    cache: "no-store", 
  });

  if (!data.ok) {
    return (
      <div className="text-center text-red-500 text-lg font-semibold">
        Failed to load tasks
      </div>
    );
  }

  const res = await data.json();
  const tasks: ITasks[] = res.todos.map((task: ITasks) => ({
    id: task.id,
    todo: task.todo,
    completed: task.completed,
  }));

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
