import React from 'react';
import './DateTimeDisplay.css';

interface DateTimeDisplayProps {
  value: any;
  type: any;
}

const DateTimeDisplay: React.FC<DateTimeDisplayProps> = ({ value, type }) => {
  return (
    <div className='count'>
      <p>{value}</p>
      <span>{type}</span>
    </div>
  );
};

export default DateTimeDisplay;