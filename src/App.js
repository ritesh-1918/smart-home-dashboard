import React, { useState } from 'react';
import './SmartHome.css';

function App() {
  const [devices, setDevices] = useState({
    light: false,
    fan: false,
    ac: false,
    security: false,
  });

  const toggleDevice = (device) => {
    setDevices({ ...devices, [device]: !devices[device] });
  };

  return (
    <div className="dashboard">
      <h1>🏠 Smart Home Control</h1>
      {Object.keys(devices).map((device) => (
        <div
          key={device}
          className={`device ${devices[device] ? 'on' : ''}`}
        >
          <span>{device} is {devices[device] ? 'ON' : 'OFF'}</span>
          <button className="toggle-btn" onClick={() => toggleDevice(device)}>
            Toggle
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
