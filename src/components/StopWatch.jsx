import { useEffect, useState } from "react";

function StopWatch() {
  const [isRunning, setIsRunning] = useState();
  const [time, setTime] = useState(0);

  // useEffect attivato solo se premo i pulsanti start e stop START
  useEffect(() => {
    let timer = null;

    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(timer); // Cleanup on unmount
  }, [isRunning]);
  // useEffect attivato solo se premo i pulsanti start e stop END

  return (
    <>
      <div className="box">
        <span>{time}</span>
        <div className="controls">
          <button
            onClick={() => {
              setIsRunning(true);
            }}
          >
            Start
          </button>
          <button
            onClick={() => {
              setIsRunning(false);
            }}
          >
            Stop
          </button>

          <button
            onClick={() => {
              setTime(0);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default StopWatch;
