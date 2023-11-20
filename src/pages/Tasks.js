import React, { useState, useRef, useEffect } from 'react';
import '../css/Tasks.css';

export const Tasks = () => {

  const [readonlyStates, setReadonlyStates] = useState([false, false, false, false, false]);
  const [values, setValues] = useState(['', '', '', '', '']);
  const focusedInputRef = useRef(null);

  useEffect(() => {
      const savedValues = JSON.parse(localStorage.getItem('values')) || ['', '', '', '', ''];
      setValues(savedValues);

      const newReadonlyStates = savedValues.map(value => value !== '');
      setReadonlyStates(newReadonlyStates);
  }, []);

  //Toggle complete

  const [complete, setComplete] = useState([]);
  
  const toggleComplete = (num) => {
    setComplete((selected) =>
      selected.includes(num)
        ? selected.filter((item) => item !== num)
        : [...selected, num]
    );
  };

  //ReadOnly

  const toggleRO = (index) => {
    const newReadonlyStates = [...readonlyStates];
    newReadonlyStates[index] = !newReadonlyStates[index];
    setReadonlyStates(newReadonlyStates);

    if (newReadonlyStates[index]) {
      focusedInputRef.current = null;
    }
    localStorage.setItem('values', JSON.stringify(values));
    localStorage.setItem('readOnlyStates', JSON.stringify(readonlyStates));
  }

  const handleFocus = (index) => {
    focusedInputRef.current = index;
  }

  const handleChange = (index, newValue) => {
    const newValues = [...values];
    newValues[index] = newValue;
    setValues(newValues);
  }

  //refresh

  const refresh = () => {
    setValues(['','','','','']);
    setComplete([]);
    localStorage.removeItem('values', JSON.stringify(values));
    setReadonlyStates([false, false, false, false, false]);
  }



  const Reminder = (props) => {
    const isComplete = complete.includes(props.num);

    return (
      <div className="task">
        <p>{props.num}</p>

        <input
          style={{backgroundColor: isComplete ? 'rgb(180,255,170)' : 'white'}}
          ref={(input) => {
            inputRefs.current[props.num - 1] = input;
            if (props.num === focusedInputRef.current) {
              input && input.focus();
            }
          }}
          value={values[props.num - 1]}
          onChange={(event) => handleChange(props.num - 1, event.target.value)}
          onFocus={() => handleFocus(props.num)}
          readOnly={readonlyStates[props.num - 1]}
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              toggleRO(props.num - 1);
            }
          }}
        />

        <div onClick={() => {toggleComplete(props.num)}}>
          {isComplete ? <i className='fa fa-check'></i> : <i className='fa fa-times'></i>}
        </div>
      </div>
    );
  };

  const inputRefs = useRef([]);

  return (
    <div className="tasks">
      <h1>My Goals</h1>
      <button className='refresh' onClick={refresh}></button>
      <Reminder num={1}/> 
      <Reminder num={2}/> 
      <Reminder num={3}/> 
      <Reminder num={4}/> 
      <Reminder num={5}/> 
    </div>
  );
};



