import React from 'react';

interface DateTimeDisplayProps {
  value: any;
  type: any;
  isDanger: any;
}

const DateTimeDisplay: React.FC<DateTimeDisplayProps> = ({ value, type, isDanger }) => {
  return (
    <div className={isDanger ? 'countdown danger' : 'countdown'}>
      <p>{value}</p>
      <span>{type}</span>
    </div>
  );
};

export default DateTimeDisplay;