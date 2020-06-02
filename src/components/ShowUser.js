import React from "react"
import Link from '@material-ui/core/Link';

function ShowUser(props){
    
    // console.log(props);
    
    return(

        <div>
            <Link>
           <h5 onClick={props.onClick}>{props.name} 
            {props.lastname} </h5>
            </Link>
        </div>

    )
}


export default ShowUser;