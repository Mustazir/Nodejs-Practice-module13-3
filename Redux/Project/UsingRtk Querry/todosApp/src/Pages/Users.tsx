


import { AddUser } from "../components/module/users/Adduser";


export default function Users() {


  return (
    <div className="mx-auto max-w-7xl mt-20">
      <h1 className="text-white text-xl mb-10">This is Users</h1>
      <div className="flex justify-end mb-5">
        <AddUser />
      </div>
      <div className="space-y-5">
        {/*users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))*/}
      </div>
    </div>
  );
}
