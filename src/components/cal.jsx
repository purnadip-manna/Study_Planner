import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Cal() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        className={"wrapper"}
      />
    </div>
  );
}
export default Cal;
