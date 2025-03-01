"use client";
// import { Roboto } from "next/font/google";
import { ITasks } from "@/types";
import { useEffect, useState } from "react";
import TaskItem from "../task/TaskItem";
// const robotoFont = Roboto({
//   weight : ['400'], subsets : ['latin'], fallback : ['Arial', 'Tahoma']
// });
const Hero = () => {
  const [tasks, setTasks] = useState<ITasks[]>([]);
  const [loading, setLoading] = useState(false);
  const getTasks = () => {
    setLoading(true);
    fetch("https://dummyjson.com/todos")
      .then((res) => res.json())
      .then((res) => {
        const tasks: ITasks[] = res.todos.map((task: ITasks) => ({
          id: task.id,
          todo: task.todo,
          completed: task.completed,
        }));
        setTasks(tasks);
      }).finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getTasks();
  }, []);
  return (
    <div>
      {loading ? (
        <div className="text-center text-white text-lg font-semibold">Loading ...</div>
      ) : (
        <div className="space-y-4 max-w-2xl mx-auto m-7 p-6 bg-gray-900 text-white rounded-lg shadow-lg">
          {tasks.slice(0, 7).map((item) => (
            <TaskItem key={item.id} task={item}/>
          ))}
        </div>
      )}
    </div>

  );
};

export default Hero;
