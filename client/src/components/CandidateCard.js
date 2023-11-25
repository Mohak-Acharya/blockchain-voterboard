import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";

export default function Candidate({ id, name, voteCount }) {
  
  return (
    // <Card sx={{ maxWidth: 345, minWidth: 300 }}>
    //   <CardHeader
    //     title={
    //       <Typography align="center" variant="subtitle1">
    //         {name}
    //       </Typography>
    //     }
    //   />
      
    //   <CardActions sx={{ justifyContent: "center" }}>
    //     {voteCount && (
    //       <Typography align="center" variant="">
    //         <strong>{voteCount}</strong> votes
    //       </Typography>
    //     )}
    //   </CardActions>
    // </Card>
    <div>
      <p>
        {name} {voteCount && <strong>:{ voteCount}</strong>}
      </p>
    </div>
  );
}
