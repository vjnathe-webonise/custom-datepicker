import React from 'react';
import { DatePicker } from 'antd';
import './App.css';
import 'antd/dist/antd.css';

const PICKER_MAPPIG = {
  DAILY: {
    type: 'date',
    placeholder: 'Select Date',
    format: 'DD-MMM-YYYY',
  },
  WEEKLY: {
    type: 'week',
    placeholder: 'Select Week',
    format: '\\W\\kw-YYYY',
  },
  MONTHLY: {
    type: 'month',
    placeholder: 'Select Month',
    format: 'MMM-YYYY',
  },
  QUARTERLY: {
    type: 'quarter',
    placeholder: 'Select Quarter',
    format: '\\QQ \\F\\Y YYYY',
  },
};

function CustomDatePicker(props) {
  function onDateChange(date, dateString) {
    typeof props.onChange === 'function' && props.onChange(date, dateString);
  }

  function disabledDate(current) {
    if (!props.minDate && !props.maxDate) {
      return false;
    }

    if (!current) {
      return false;
    }
    let minDate;
    let maxDate;
    let disabledDate = false;
    if (props.minDate) {
      minDate = new Date(props.minDate);
      disabledDate = current < minDate;
    }
    if (props.maxDate) {
      maxDate = new Date(props.maxDate);
      disabledDate = !disabledDate ? current > maxDate : disabledDate;
    }
    return disabledDate;
  }

  const picker = PICKER_MAPPIG[props.picker];

  if (!picker) {
    return <h3>Invalid value for props picker</h3>;
  }

  return (
    <div className='App'>
      <div>
        <DatePicker
          key={props.picker}
          placeholder={props.placeholder || picker.placeholder}
          onChange={onDateChange}
          picker={picker.type}
          inputReadOnly={props.inputReadOnly}
          format={picker.format}
          disabledDate={disabledDate}
          showToday={props.showToday}
          disabled={props.disabled}
          allowClear={props.allowClear}
        />
      </div>
    </div>
  );
}

CustomDatePicker.defaultProps = {
  showToday: false,
  picker: 'DAILY',
  placeholder: '',
  inputReadOnly: true,
  minDate: '',
  maxDate: '',
  disabled: false,
  onChange: () => {},
  allowClear: false,
};

export default CustomDatePicker;
