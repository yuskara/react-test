import React from 'react';
 
// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//     padding:"10px"
//   },
// });

export default function cardShow(props) {
  // const classes = useStyles();
  console.log(props);
  
  return (
   
    // <Card className={classes.root}>
    //   <CardActionArea>
    //     <CardMedia
    //       component="img"
    //       alt="Reptile"
    //       height="280"
    //       image={props.url}
    //       title={props.name}
    //     />
    //     <CardContent>
    //       <Typography gutterBottom variant="h6" component="h2">
    //         {props.name}
    //       </Typography>
          
    //     </CardContent>
    //   </CardActionArea>
      
    // </Card>
 <div>{props.url}</div>
  );
}
