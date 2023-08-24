import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";

const HomeDashboard = () => {
  return (
    <>
      <h1 className="text-xl">Dashboard</h1>

     
      <div class="flex flex-row">
      <div class="basis-1/4"></div>
      <div class="basis-1/2">
      <Card className="my-5 p-5">
    
      </Card>
      
      </div>
      <div class="basis-1/4"></div>
    </div>
     
    </>
  );
}

export default HomeDashboard