import React,{useEffect,useState} from "react";
import cardShow from "./cardShow";

function fileFetch(){
   
    const URL="https://randomuser.me/api/?results=5"
    // const [loading,setLoading]=useState(false)


    useEffect(()=>{
        // setLoading({loading:true})
    fetch(URL)
    .then(response=>response.json())
    .then(res=>{
        // setLoading(false)
        setData(res)
        console.log(res)      
          })
        .catch(e=>console.error(e))
    },[])
    
//   function  handleSelect(event){
//         setValue(event.target.value);
//     }

    
    const styless={
        display: "grid",
        flexWrap: 'nowrap',
        gridTemplateColumns: "auto auto auto auto",
        backgroundColor: "#2196F3",
        padding: "30px",
        margin:"20px"
    }

 
return(
        <div>
            
          <button onClick={useEffect}>get user</button>

                   
        <div style={styless}>
            
          
           </div>
        </div>

    )
}

export default fileFetch