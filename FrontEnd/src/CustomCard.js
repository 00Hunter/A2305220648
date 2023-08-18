import React, { useState,useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './styles/dataCard.css';
import ApiClient from './ApiClient';


const [data,setdata]=useState();

const handleLoading=async(id)=>{
    const result=await ApiClient.getTrainsByid(id);

    if(result.data!=OK){
        console.log("error");
    }
    setdata(result.data);

}
useEffect(
    handleLoading(),
     []);

const CustomCard = () => {
  return (
    <Card className="card">
      <CardContent>
        <Typography variant="h6" className="title">
          {data.data_name}
        </Typography>
        <Typography>Departure: {data.departure_time}</Typography>
        <Typography>Delay: {data.delay_minutes} mins</Typography>
        <Typography>Sleeper Price: {data.sleeper_price}</Typography>
        <Typography>AC Price: {data.ac_price}</Typography>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
