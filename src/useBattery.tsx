import React from "react";
import { useBattery } from "@uidotdev/usehooks";
import Battery from "./Battery";

const BatteryUse: React.FC=()=>{
  const { loading, level, charging, chargingTime, dischargingTime } = useBattery();

  
  const safeLevel = level !== null ? level * 100 : 0;
  const safeChargingTime = chargingTime !== null ? chargingTime : 0;
  const safeDischargingTime = dischargingTime !== null ? dischargingTime : 0;

  return (
    <div className="wrapper">
      <h1>Battery Level</h1>
      {!loading ? (
        <>
          <Battery
            level={safeLevel}
            charging={charging ?? false}
            chargingTime={safeChargingTime}
            dischargingTime={safeDischargingTime}
          />
          <h2>Battery Level: {Math.round(safeLevel)}%</h2>
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}

export default BatteryUse;