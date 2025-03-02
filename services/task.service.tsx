import { ITasks } from "@/types";

export const fetchTasks = async() =>{
    const data = await fetch("https://dummyjson.com/todos", {
        method: "GET",
        cache: "no-store", 
      });
      const res = await data.json();
      const tasks: ITasks[] = res.todos.map((task: ITasks) => ({
        id: task.id,
        todo: task.todo,
        completed: task.completed,
      }));
      return tasks;
}