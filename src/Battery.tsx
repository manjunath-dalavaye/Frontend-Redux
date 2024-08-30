import React from 'react';

interface BatteryProps {
  level: number;
  charging: boolean;
  chargingTime: number;
  dischargingTime: number;
}

const Battery: React.FC<BatteryProps> = ({ level, charging, chargingTime, dischargingTime }) => {
  return (
    <div>
      <h2>Battery Status</h2>
      <p>Level: {level}%</p>
      <p>Charging: {charging ? "Yes" : "No"}</p>
      <p>Charging Time: {chargingTime} seconds</p>
      <p>Discharging Time: {dischargingTime} seconds</p>
    </div>
  );
}

export default Battery;
