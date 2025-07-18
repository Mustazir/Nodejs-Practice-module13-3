import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { useAppDispatch } from "@/redux/hook";
import { deleteTask, toggoleCompletedTask } from "@/redux/tasks/taskSlice";
import type { Itasks } from "@/types";

import { Trash2 } from "lucide-react";

interface IProps {
  task: Itasks;
}

export default function TaskCard({ task }: IProps) {
  const dispatch =useAppDispatch()
  return (
    <div className="border px-5 py-3 rounded-md ">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div
            className={cn("size-3 rounded-full", {
              " bg-green-500": task.priority === "LOW",
              " bg-green-100": task.priority === "MEDIUM",
              " bg-red-500": task.priority === "HIGH",
            })}
          ></div>
          <h1 className={cn({"line-through":task.isCompleted})}>{task.title}</h1>
        </div>

        <div className="flex gap-3 items-center">
          <Button variant="link" className="p-0 text-red-500" onClick={()=>dispatch(deleteTask(task.id))} >
            <Trash2 />
          </Button>
          <Checkbox checked={task.isCompleted} onClick={()=>dispatch(toggoleCompletedTask(task.id))}/>
        </div>
      </div>

      <p className="mt-5">{task.description}</p>
    </div>
  );
}
