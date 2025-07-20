import { AddTask } from "@/components/module/tasks/AddTask";
import TaskCard from "@/components/module/tasks/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAppSelector } from "@/redux/hook";
import { selectTask } from "@/redux/tasks/taskSlice";

export default function Tasks() {
  const tasks = useAppSelector(selectTask);
 
  return (
    <div className="mx-auto max-w-7xl  mt-20">
      <h1 className="text-white "> This is tasks</h1>
      <div className="flex justify-end items-center gap-5 mt-10">
        <Tabs>
          <TabsList>
            <TabsTrigger value="ALL">All</TabsTrigger>
            <TabsTrigger value="LOW">Low</TabsTrigger>
            <TabsTrigger value="HIGH">High</TabsTrigger>
            <TabsTrigger value="MEDIUM">Medium</TabsTrigger>
          </TabsList>
        </Tabs>
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
