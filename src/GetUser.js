import React, {useState}from "react";
import UserCard from "./components/UserCard";
import ShowUser from "./components/ShowUser";

function GetUser(){
    const [users,setUsers] = useState([]);
    const [user,setUser] = useState([]);
    const [loading,setLoading]=useState(false)


    function handleClick(){
        setLoading({loading:true})
        fetch("https://randomuser.me/api/?results=5")
        .then(response=>response.json())
        .then(res=>{
            setLoading(false)
            // console.log(res.results); 
            setUsers(res.results); 
            setUser(res.results[0]);

        })
    }

 
    
    const listUser=users.map(p=> <ShowUser key={p.cell}
         name={p.name.first} lastname={p.name.last} 
         onClick={() => setUser(p)}/>)


    const isLoading=loading?"loading...please wait" : listUser
         console.log(user.lengt);
         
        
    return(
       
       <div>
         
        <button onClick={handleClick}>getUser</button>
        {isLoading}
        <UserCard  props={user}/>
        </div>
    )
}

export default GetUser;