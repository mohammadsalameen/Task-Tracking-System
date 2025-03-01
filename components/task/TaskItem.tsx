import { ITasks } from "@/types";
import Image from "next/image";
import Link from "next/link";
interface IProps {
  task: ITasks;
}
const TaskItem = (props: IProps) => {
  return (
    <div className="p-4 border-l-4 rounded-md shadow-md flex items-center bg-gray-800 border-blue-500 space-x-4">
      <Image
        src={
          props.task.completed
            ? "https://banner2.cleanpng.com/20180315/djw/av0u3beuj.webp"
            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpsNw7m0m0T-Q2zkI2X3zyK6gt5QUkv8BJFg&s"
        }
        width={80}
        height={80}
        alt="Completed Image"
      />
      <div>
        <h2 className="text-xl font-semibold">{props.task.todo}</h2>
        <h4
          className={`mt-2 font-medium ${
            props.task.completed ? "text-green-400" : "text-yellow-400"
          }`}
        >
          {props.task.completed ? " Completed" : " Pending"}
        </h4>
        <Link
          href={`/task-details/${props.task.id}`}
          className="text-blue-400 hover:underline mt-2 block"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
};

export default TaskItem;
