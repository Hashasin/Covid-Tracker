import React from 'react';
import "./InfoBox.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";


   function InfoBox({ title, cases, active, total, isRed, ...props }) {
         console.log(title, active);
     return (
       <Card
         onClick={props.onClick}
         className={`infoBox ${active && "infoBox--selected"} ${
           isRed && "infoBox--red"
         }`}
       >
         <CardContent>
           <Typography color="textSecondary" gutterBottom>
             {title}
           </Typography>
           <h2
             className={`infoBox__cases ${!isRed && "infoBox__cases--green"}`}>
             {cases}
           </h2>

           <Typography className="infoBox__total" color="textSecondary">
             {total} Total
           </Typography>
         </CardContent>
       </Card>
     );
   }

export default InfoBox;
