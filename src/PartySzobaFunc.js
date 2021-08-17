import React, {useState,useEffect} from 'react';
import Fal from './Fal';
import VillanyKapcsolo from './VillanyKapcsolo';


const PartySzobaFunc=()=>{
const [egAVillany, kapcsol]=useState(true)

  useEffect(()=>{
  const interval= setInterval(()=>kapcsol(!egAVillany), 2000);
  console.log()
  return {
    clearInterval(interval)
  
  };
  })


    return (
      <Fal vanEFeny={egAVillany}>
        <VillanyKapcsolo
          kapcsolasra={()=>kapcsol(!egAVillany)}
          beVanKapcsolva={egAVillany}
        />
      </Fal>
    );
  
  }

  export default PartySzobaFunc;