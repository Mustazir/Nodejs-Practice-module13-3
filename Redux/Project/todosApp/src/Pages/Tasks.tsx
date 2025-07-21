import { AddTask } from "@/components/module/tasks/AddTask";
import TaskCard from "@/components/module/tasks/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAppSelector } from "@/redux/hook";
import { filterTask, selectTask } from "@/redux/tasks/taskSlice";
import { useDispatch } from "react-redux";

export default function Tasks() {
  const tasks = useAppSelector(selectTask);
  const dispatch=useDispatch();
 
  return (
    <div className="mx-auto max-w-7xl  mt-20">
      <h1 className="text-white "> This is tasks</h1>
      <div className="flex justify-end items-center gap-5 mt-10">
        <Tabs defaultValue="ALL">
          <TabsList>
            <TabsTrigger onClick={()=>dispatch(filterTask("ALL"))} value="ALL">All</TabsTrigger>
            <TabsTrigger onClick={()=>dispatch(filterTask("LOW"))} value="LOW">Low</TabsTrigger>
            <TabsTrigger onClick={()=>dispatch(filterTask("MEDIUM"))} value="Medium">Medium</TabsTrigger>
            <TabsTrigger onClick={()=>dispatch(filterTask("HIGH"))} value="High">High</TabsTrigger>
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
