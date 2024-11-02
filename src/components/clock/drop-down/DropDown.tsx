import React from 'react';
import { Timezone } from 'types/Timezone';
import './DropDown.css';

interface DropDownProps {
  timezones: Timezone[];
  selectedTimezone: Timezone;
  onTimezoneChange: (timezone: Timezone) => void;
}

export function DropDown({ timezones, selectedTimezone, onTimezoneChange }: DropDownProps) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const timezone = timezones.find(tz => tz.name === event.target.value);
    if (timezone) {
      onTimezoneChange(timezone);
    }
  };

  return (
    <select className='dropDown' onChange={handleChange} value={selectedTimezone.name}>
      {timezones.map((tz) => (
        <option key={tz.name} value={tz.name}>
          {tz.name}
        </option>
      ))}
    </select>
  );
}
