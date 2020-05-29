import React, { useState } from 'react';
import { Radio, DatePicker } from 'antd';
import './App.css';
import 'antd/dist/antd.css';
import CustomDatePicker from './CustomDatapicker';

function App() {
  const [value, setValue] = useState('DAILY');
  const [minDate, setMinDate] = useState('');
  const [maxDate, setMaxDate] = useState('');

  function onChange(e) {
    setValue(e.target.value);
  }

  function onDateChange(date, dateString) {
    console.log(date, dateString);
  }

  return (
    <div className='App'>
      <DatePicker
        placeholder='select minDate'
        onChange={(d) => setMinDate(d)}
      />
      {'   '}
      <DatePicker
        placeholder='select maxDate'
        onChange={(d) => setMaxDate(d)}
      />
      <br />
      <br />
      <Radio.Group onChange={onChange} value={value}>
        <Radio value='DAILY'>Daily</Radio>
        <Radio value='WEEKLY'>Weekly</Radio>
        <Radio value='MONTHLY'>Monthly</Radio>
        <Radio value='QUARTERLY'>Quarterly</Radio>
      </Radio.Group>
      <br />
      <br />
      <CustomDatePicker
        picker={value}
        minDate={minDate}
        maxDate={maxDate}
        onChange={onDateChange}
      />
    </div>
  );
}

export default App;
