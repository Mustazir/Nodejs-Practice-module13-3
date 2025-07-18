import { AddTask } from "@/components/module/tasks/AddTask";
import TaskCard from "@/components/module/tasks/TaskCard";
import { useAppSelector } from "@/redux/hook";
import { selectTask } from "@/redux/tasks/taskSlice";

export default function Tasks() {
  const tasks = useAppSelector(selectTask);
  console.log(tasks);
  return (
    <div className="mx-auto max-w-7xl mt-20">
      <div className="flex justify-between items-center">
        <h1 className="text-white"> This is tasks</h1>
        <AddTask></AddTask>
      </div>
      <div className="space-y-5 mt-5 ">
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id}></TaskCard>
        ))}
      </div>
    </div>
  );
}
