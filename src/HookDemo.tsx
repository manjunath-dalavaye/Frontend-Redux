import { useEffect, useState } from "react";

interface Data{
    id:number;
    name:string;
    age:number;
}

const HookDemo: React.FC=()=>{
   const [users,setUsers]=useState<Data[]>([]);
   useEffect(() => {
    // Fetch data from the local JSON server
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchData();
  }, [setUsers]);

    return (
        <>

        <h1>Users details</h1>
        <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - Age: {user.age}
          </li>
            ))}
        </ul>
        </>
    )

}

export default HookDemo;