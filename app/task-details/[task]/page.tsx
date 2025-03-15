'use client'
import TaskNotFound from "@/components/handleTaskNotFound/TaskNotFound";
import Spinner from "@/components/spinner/Spinner";
import TaskDetailsCard from "@/components/task-card/TaskDetailsCard";
import { fetchTasks } from "@/services/task.service";
import { ITasks } from "@/types";
import { Suspense, useEffect, useState } from "react";

interface IProps {
  params: Promise<{ task: string }>;
}

const TaskDetails = ({ params }: IProps) => {
    const [task, setTask] = useState<ITasks | null>(null);
    const [loading, setLoading] = useState(true);
    const [copied, setCopied] = useState(false);
    useEffect(() =>{
      const loadTask = async () =>{
        const tasks: ITasks[] = await fetchTasks();
        const Params = await params;
            const foundTask = tasks.find((t) => t.id === Number(Params.task));
            if(foundTask){
                setTask(foundTask);
            }
            setLoading(false);
        }
        loadTask();
    }, [params]);
    if (loading) {
        return (
          <div className="flex items-center justify-center min-h-screen text-white">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-lg font-semibold text-gray-300">Loading...</p>
            </div>
          </div>
        );
      }

  if (!task) {
    // notFound();
    return <TaskNotFound />;
  }

    const handleCopy = async() =>{
        if(navigator.clipboard){
            await navigator.clipboard.writeText(task.todo); //copy title
            setCopied(true);
            setTimeout(() => {
                setCopied(false);
            }, 2000);
        }
    }
  return (
    <div className="min-h-96 w-full">
      <div className="max-w-2xl mx-auto m-7 p-6 bg-gray-900 text-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-blue-400">Task Details</h1>
        <Suspense fallback={<Spinner/> }>
          <TaskDetailsCard task={task} />
        <button
          onClick={handleCopy}
          className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
        >
          {copied ? "✅ Copied!" : "📋 Copy Title"}
        </button>
        </Suspense>
      </div>
    </div>
  );
};

export default TaskDetails;
