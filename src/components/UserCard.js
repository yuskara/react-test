import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
 import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    padding:"10px"
  },
});

export default function UserCard({props}) {
    
  const classes = useStyles();
  
  
  
  if (Object.keys(props).length>0){
    console.log(props);
  return (
   
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="f"
          height="280"
          image={props.picture.large}
          title={props.name.first}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
          {props.name.first}
            {props.name.last}
          </Typography>
          {props.email}
          {props.cell}
        </CardContent>
      </CardActionArea>
      
    </Card>
 
  );
  }else{return(<div></div>)}
}

