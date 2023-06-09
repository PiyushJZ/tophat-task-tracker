import React, { useEffect, useState } from 'react';

function Timer({ start, end }) {
  const currentTimer = parseInt((Date.now() - new Date(start)) / 1000);
  const [timer, setTimer] = useState(currentTimer);

  useEffect(() => {
    const timeout = setTimeout(() => setTimer(timer + 1), 1000);
    if (end) {
      clearTimeout(timeout);
    }
  }, [timer]);

  const renderTimeTaken = () => {
    const timeTaken = (new Date(end) - new Date(start)) / 1000;
    return `Time Taken: ${parseInt(timeTaken / 60 / 60)} hrs-${
      parseInt(timeTaken / 60) % 60
    } mins-${parseInt(timeTaken) % 60} secs`;
  };

  const renderDate = () =>{
    return new Date(end).toLocaleDateString();
  }

  return (
    <>
      {start && !end
        ? `${parseInt(timer / 60 / 60)} : ${parseInt(timer / 60) % 60} : ${
            timer % 60
          }`
        : ''}
      {!start && end
        ? renderDate()
        : ""}
      {start && end ? <>{renderTimeTaken()}</> : ''}
    </>
  );
}

export default Timer;
