import { AddUser } from "@/components/module/users/AddUser";
import { useAppSelector } from "@/redux/hook";
import { selectUsers } from "@/redux/users/userSlice";

export default function Users() {
  const users = useAppSelector(selectUsers);

  return (
    <div className="mx-auto max-w-7xl mt-20">
      <h1 className="text-white text-xl mb-10">This is Users</h1>
      <div className="flex justify-end mb-5">
        <AddUser />
      </div>
      <div className="space-y-5">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
