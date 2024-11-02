import './DigitalClock.css';

interface DigitalClockProps {
  time: Date;
}

export function DigitalClock({ time }: DigitalClockProps) {
  const hr = String(time.getUTCHours()).padStart(2, '0');
  const min = String(time.getUTCMinutes()).padStart(2, '0');
  const sec = String(time.getUTCSeconds()).padStart(2, '0');

  return <div className="digitalClock">{`${hr}:${min}:${sec}`}</div>;
}