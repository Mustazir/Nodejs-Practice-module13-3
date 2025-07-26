import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { useAppDispatch } from "@/redux/hook";
import { deleteUser } from "@/redux/users/userSlice";


interface IUserCardProps {
  user: { id: string; name: string };
}

export default function UserCard({ user }: IUserCardProps) {
  const dispatch = useAppDispatch();

  return (
    <div className="border px-5 py-3 rounded-md flex justify-between items-center">
      <h1 className="text-lg">{user.name}</h1>
      <Button
        variant="link"
        className="p-0 text-red-500"
        onClick={() => dispatch(deleteUser(user.id))}
      >
        <Trash2 />
      </Button>
    </div>
  );
}
