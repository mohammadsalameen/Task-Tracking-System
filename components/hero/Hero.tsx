import { ITasks } from "@/types";
import TaskItem from "../task/TaskItem";
import { fetchTasks } from "@/services/task.service";

const Hero = async () => {
  const tasks : ITasks[] = await fetchTasks();

  // if (!tasks.ok) {
  //   return (
  //     <div className="text-center text-red-500 text-lg font-semibold">
  //       Failed to load tasks
  //     </div>
  //   );
  // }

  return (
    <div className="space-y-4 max-w-2xl mx-auto m-7 p-6 bg-gray-900 text-white rounded-lg shadow-lg">
      {tasks.slice(0, 7).map((item) => (
        <TaskItem key={item.id} task={item} />
      ))}
    </div>
  );
};

export default Hero;
