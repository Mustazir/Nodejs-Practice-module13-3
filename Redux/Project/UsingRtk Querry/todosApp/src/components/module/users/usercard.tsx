import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";




interface IUserCardProps {
  user: { id: string; name: string };
}

export default function UserCard({ user }: IUserCardProps) {
 

  return (
    <div className="border px-5 py-3 rounded-md flex justify-between items-center">
      <h1 className="text-lg">{user.name}</h1>
      <Button
        variant="link"
        className="p-0 text-red-500"
        
      >
        <Trash2 />
      </Button>
    </div>
  );
}
