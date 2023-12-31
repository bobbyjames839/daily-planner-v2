import { useEffect, useState } from 'react';
import '../css/Planner.css';

export const Planner = () => {

  const [morning, setMorning] = useState(true);
  const [afternoon, setAfternoon] = useState(false); 

  const toggleMorning = () => {
    setMorning(true);
    setAfternoon(false);
  }

  const toggleAfternoon = () => {
    setMorning(false);
    setAfternoon(true);
  }  

  const addClass = (event, id) => {
    if (event.key === 'Enter') {
        if (event.target.value !== '') {
        const input = document.getElementById(id);
        input.classList.add('input-filled')
        input.blur();
        localStorage.setItem(id, event.target.value);
      }
    }
  }

  const removeClass = (event, id) => {
      const input = document.getElementById(id);
      input.blur();
      input.value = '';
      localStorage.removeItem(id);
      input.classList.remove('input-filled')
      input.classList.add('input')
  }

  const Section = (props) => {

    const index = parseInt(props.id) - 1;
    const storedValue = localStorage.getItem(props.id);
    const inputFilled = storedValue !== null && storedValue !== '';

    return (
      <div className='planner-section'>
        <p>{props.time}<span className='time-span' onClick={(event) => {removeClass(event, props.id)}}></span></p>
        <input
        className={inputFilled ? 'input-filled' : 'input'}
        value={storedValue !== null ? storedValue : undefined}
        id={props.id}
        onKeyDown={(event) => {addClass(event, props.id)}}
        key={props.id}
        />
      </div>
    );
  };

  return (
    <div className="planner">
      <div className='planner-top'>
        <button className='morning-button' onClick={toggleMorning} style={{backgroundColor: morning ? 'rgb(209, 209, 255)' : 'inherit'}}>Morning</button>
        <h1>Timetable</h1>
        <button className='afternoon-button' onClick={toggleAfternoon} style={{backgroundColor: afternoon ? 'rgb(209, 209, 255)' : 'inherit'}}>Afternoon</button>
      </div>

      <div className='planner-outer'>
        <div className='morning' style={{display: morning ? 'flex' : 'none'}}>
          <div className='planner-inner'>
            <Section time='06:00 - 06:30' id='1'/>
            <Section time='06:30 - 07:00' id='2'/>
            <Section time='07:00 - 07:30' id='3'/>
            <Section time='07:30 - 08:00' id='4'/>
            <Section time='08:00 - 08:30' id='5'/>
            <Section time='08:30 - 09:00' id='6'/>
            <Section time='09:00 - 09:30' id='7'/>
            <Section time='09:30 - 10:00' id='8'/>
            <Section time='10:00 - 10:30' id='9'/>
          </div>
          <div className='planner-inner'>
            <Section time='10:30 - 11:00' id='10'/>
            <Section time='11:00 - 11:30' id='11'/>
            <Section time='11:30 - 12:00' id='12'/>
            <Section time='12:00 - 12:30' id='13'/>
            <Section time='12:30 - 13:00' id='14'/>
            <Section time='13:00 - 13:30' id='15'/>
            <Section time='13:30 - 14:00' id='16'/>
            <Section time='14:00 - 14:30' id='17'/>
            <Section time='14:30 - 15:00' id='18'/>
          </div>
        </div>

        <div className='afternoon' style={{display: afternoon ? 'flex' : 'none'}}>
        <div className='planner-inner'>
            <Section time='15:00 - 15:30' id='19'/>
            <Section time='15:30 - 16:00' id='20'/>
            <Section time='16:00 - 16:30' id='21'/>
            <Section time='16:30 - 17:00' id='22'/>
            <Section time='17:00 - 17:30' id='23'/>
            <Section time='17:30 - 18:00' id='24'/>
            <Section time='18:00 - 18:30' id='25'/>
            <Section time='18:30 - 19:00' id='26'/>
            <Section time='19:00 - 19:30' id='27'/>
          </div>
          <div className='planner-inner'>
            <Section time='19:30 - 20:00' id='28'/>
            <Section time='20:00 - 20:30' id='29'/>
            <Section time='20:30 - 21:00' id='30'/>
            <Section time='21:00 - 21:30' id='31'/>
            <Section time='21:30 - 22:00' id='32'/>
            <Section time='22:00 - 22:30' id='33'/>
            <Section time='22:30 - 23:00' id='34'/>
            <Section time='23:00 - 23:30' id='35'/>
            <Section time='23:30 - 24:00' id='36'/>
          </div>
        </div>
      </div>
    </div>
  )
}

