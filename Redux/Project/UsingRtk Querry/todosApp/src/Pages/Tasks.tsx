import { AddTask } from "@/components/module/tasks/AddTask";
import TaskCard from "@/components/module/tasks/TaskCard";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetTaskQuery } from "@/redux/features/user/userSlice";
import type { Itasks } from "@/types";


export default function Tasks() {

  const {isError,isLoading,data}=useGetTaskQuery(undefined)
 if(isLoading){
  return <p>Loading...</p>
 }
  return (
    <div className="mx-auto max-w-7xl  mt-20">
      <h1 className="text-white "> This is tasks</h1>
      <div className="flex justify-end items-center gap-5 mt-10">
        <Tabs defaultValue="ALL">
          <TabsList>
            <TabsTrigger value="ALL">All</TabsTrigger>
            <TabsTrigger value="LOW">Low</TabsTrigger>
            <TabsTrigger value="Medium">Medium</TabsTrigger>
            <TabsTrigger value="High">High</TabsTrigger>
          </TabsList>
        </Tabs>
        <AddTask></AddTask>
      </div>
      <div className="space-y-5 mt-5 ">
        { !isLoading&& data.tasks.map((task:Itasks) => (
          <TaskCard task={task} key={task.id}></TaskCard>
        )) }
      </div>
    </div>
  );
}
