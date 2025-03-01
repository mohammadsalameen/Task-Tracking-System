"use client";
import TaskItem from "@/components/task/TaskItem";
import { ITasks } from "@/types";
import { useEffect, useState } from "react";
const Page = () => {
  const [tasks, setTasks] = useState<ITasks[]>([]);
  const getTasks = () => {
    fetch("https://dummyjson.com/todos", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        const tasks: ITasks[] = res.todos.map((task: ITasks) => ({
          id: task.id,
          todo: task.todo,
          completed: task.completed,
        }));
        setTasks(tasks);
      });
  };

  useEffect(() => {
    getTasks();
  }, []);
  return (
    <div className="space-y-4 max-w-2xl mx-auto m-7 p-6 bg-gray-900 text-white rounded-lg shadow-lg">
      {tasks.map((item) => (
        <TaskItem key={item.id} task={item} />
      ))}
    </div>
  );
};

export default Page;
