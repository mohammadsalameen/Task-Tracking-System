"use client";
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
        const tasks : ITasks[] = res.todos.map((task : ITasks) => (
            {
                id : task.id,
                todo : task.todo,
                completed : task.completed
            }
        ));
        setTasks(tasks);
      });
  };

  useEffect(() => {
    getTasks();
  }, []);
  return (
    <div>
        {
            tasks.map(item => (
                <div key={item.id}>
                    <h2>Task Title : {item.todo}</h2>
                    <h4>Status : {item.completed ? "Completed" : "Pending"}</h4>
                </div>
            ))
        }
        <h2>hello</h2>
    </div>
  );
};

export default Page;
