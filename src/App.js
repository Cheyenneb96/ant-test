import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import { Calendar } from 'antd';

function App() {
  const testData = {
    eventDates: [
      '1645869600',
      '1645873200',
      '1645880400',
      '1645884000'
    ]
  }
  const [date, setDate] = useState('')
  const [milli, setMilli] = useState('')

  const handlePanelChange = (value, mode) => {
    // This is where you would fetch data for that month.
    // Generally you will fetch the data you need in a useEffect
    // Then use a filter to get only the dates that match the current month
    // Current info about the panel can be found with 'value' above
    console.log('hello', value)
  }

  const handleDateSelect = (value) => {
    // This is where you do the logic for a selected date
    // "value" here will return info about the date as a special obj called a "datetimeobject"
    // feel free to console log "value" and play around with the object
    const dateObj = value._d
    const epoch = dateObj.getTime()
    const dateUI = JSON.stringify(dateObj)
    console.log(dateObj.getDate())
    setDate(dateUI)
    setMilli(epoch)
  }
  return (
    <div className="App">
  <div className='container'>
    <div className='calendar'>
      <div className="site-calendar-demo-card">
        <Calendar
          fullscreen={false}
          onPanelChange={handlePanelChange}
          onSelect={handleDateSelect}
        />
      </div>
    </div>
    <div className='logs'>
      <ul>
        <li>DateObj: {date}</li>
      <li>Epoch Time: {milli}</li>
      </ul>
    </div>
  </div>
    </div>
  );
}

export default App;
