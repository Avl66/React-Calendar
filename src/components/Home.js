import React, { useState } from 'react';
import Calendar from './Calendar';
import InputForm from './Inputform';

function Home() {
  const [inputDate, setInputDate] = useState('');
  const datePicker = (inpdate) => {
    setInputDate(inpdate);
  };
  const inpRegex = /^(\d{2}\/){2}\d{4}$/;
  return (
    <>
      <header>
        <span>
          React <b>Calendar</b>
        </span>
      </header>
      <main>
        <InputForm datePicker={datePicker} />
        {inpRegex.test(inputDate) && <Calendar date={inputDate} />}
        {!inpRegex.test(inputDate) && (
          <h3 id="errorMsg">
            Please enter the date in <i>dd/mm/yyyy</i> format
          </h3>
        )}
      </main>
    </>
  );
}

export default Home;
