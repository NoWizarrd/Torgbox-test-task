import './AnalogueClock.css';

interface AnalogueClockProps {
  time: Date;
}

export function AnalogueClock({ time }: AnalogueClockProps) {
  const secondsDegrees = ((time.getUTCSeconds() / 60) * 360) + 90;
  const minsDegrees = ((time.getUTCMinutes() / 60) * 360) + ((time.getUTCSeconds() / 60) * 6) + 90;
  const hourDegrees = ((time.getUTCHours() / 12) * 360) + ((time.getUTCMinutes() / 60) * 30) + 90;

  return (
    <div className='clock'>
      <div className="outer-clock-face">
        <div className="marking marking-one"></div>
        <div className="marking marking-two"></div>
        <div className="marking marking-three"></div>
        <div className="marking marking-four"></div>
        <div className="inner-clock-face">
          <div className="hand hour-hand" style={{ transform: `rotate(${hourDegrees}deg)` }}></div>
          <div className="hand min-hand" style={{ transform: `rotate(${minsDegrees}deg)` }}></div>
          <div className="hand second-hand" style={{ transform: `rotate(${secondsDegrees}deg)` }}></div>
        </div>
      </div>
    </div>
  );
}