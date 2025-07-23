import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAppDispatch } from "@/redux/hook";

import { useState } from "react";

export function AddUser() {
  const dispatch = useAppDispatch();
  const [name, setName] = useState("");

  const handleAdd = () => {
    if (!name.trim()) return;
    dispatch(addUser(name));
    setName("");
  };

  return (
    <div className="flex gap-3">
      <Input
        placeholder="Enter user name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button onClick={handleAdd}>Add User</Button>
    </div>
  );
}
