import { React, useRef } from 'react';

const InputForm = ({ datePicker }) => {
  const dateInp = useRef('');
  const getEnteredDate = (e) => {
    e.preventDefault();
    datePicker(dateInp.current.value);
  };

  return (
    <form>
      <label htmlFor="date">Please enter the date:</label>
      <input id="date" type="text" ref={dateInp} placeholder={'dd/mm/yyyy'} />
      <button onClick={getEnteredDate}>Submit</button>
    </form>
  );
};

export default InputForm;
