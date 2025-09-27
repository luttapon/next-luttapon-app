import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface CircularProgressProps {
  value: number; // เช่น 60
}

const CircularProgress: React.FC<CircularProgressProps> = ({ value }) => {
  return (
    <div style={{ width: 100, height: 100 }}>
      <CircularProgressbar
        value={value}
        text={`${value}%`}
        styles={buildStyles({
          pathColor: '#ff8a2d', // สีส้ม
          textColor: '#fff',
          trailColor: '#444', // สีพื้นหลัง
        })}
      />
    </div>
  );
};

export default CircularProgress;