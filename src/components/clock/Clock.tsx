import { useState, useEffect } from 'react';
import { AnalogueClock } from './analogueClock/AnalogueClock';
import { DigitalClock } from './digitalClock/DigitalClock';
import { DropDown } from './drop-down/DropDown';
import { Timezone } from 'types/Timezone';
import './Clock.css';

interface ClockProps {
  timezones: Timezone[];
}

export default function Clock({ timezones }: ClockProps) {
  const [selectedTimezone, setSelectedTimezone] = useState<Timezone>(timezones[0]);
  const [currentTime, setCurrentTime] = useState<number>(Date.now());

  const updateCurrentTime = () => {
    const utcMilliseconds = Date.now();
    const timezoneOffset = parseInt(selectedTimezone.timezone, 10) * 60 * 60 * 1000; 
    const adjustedTime = utcMilliseconds + timezoneOffset;

    setCurrentTime(adjustedTime);
  };

  useEffect(() => {
    const intervalId = setInterval(updateCurrentTime, 1000);
    updateCurrentTime();
    return () => clearInterval(intervalId);
  }, [selectedTimezone]);

  const handleTimezoneChange = (timezone: Timezone) => {
    setSelectedTimezone(timezone);
  };

  return (
    <div className='mainClock'>
      <AnalogueClock time={new Date(currentTime)} />
      <DigitalClock time={new Date(currentTime)} />
      <DropDown timezones={timezones} selectedTimezone={selectedTimezone} onTimezoneChange={handleTimezoneChange} />
    </div>
  );
}