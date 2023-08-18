import React,{ useEffect, useState } from 'react';
import TrainCard from './TrainCard';
import './styles/TrainList.css';
import ApiClient from './ApiClient';



const [data,setData]=useState();
const handleData=()=>{
    const result=ApiClient.get();
    if(result.status!=200){
        console.log("error")
    }
    setData(result.data);
}


useEffect(
handleData(),[]
)

const CustomList = ({ trains }) => {
  return (

    <div className="trainList">
      {data.map((train) => (
        <TrainCard key={train.train_id} train={train} />
      ))}
    </div>
  );
};

export default CustomList;
