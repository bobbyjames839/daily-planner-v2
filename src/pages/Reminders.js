import { useEffect, useState } from 'react';
import '../css/Reminders.css';

export const Reminders = () => {
  const [neww, setNeww] = useState('');

  const [list, setList] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(list))
  }, [list])

  const addItem = (event) => {
    if (event.key === 'Enter') {
      if (neww.trim() !== '') {
        const newItem = {
          name: neww,
          id: list.length === 0 ? 1 : list[list.length - 1].id + 1,
        };
        setList([...list, newItem]);
        setNeww('');
      }
    }
  };

  const deleteReminder = (itemID) => {
    setList(list.filter((item) => itemID !== item.id));
  };

  return (
    <div className='reminders'>
      <div className='add-reminder'>
        {list.length < 3 ? (
          <input
            placeholder='Add reminders here'
            value={neww}
            onChange={(event) => {
              setNeww(event.target.value);
            }}
            onKeyPress={(event) => {
              addItem(event);
            }}
          />
        ) : (
          null
        )}
      </div>

      <div className='reminders-list'>
        {list.length > 0 ? (
          list.map((item) => (
            <div className='single-reminder' key={item.id}>
              <i
                className='fa fa-circle'
                onClick={() => {
                  deleteReminder(item.id);
                }}
              ></i>
              <p>{item.name}</p>
            </div>
          ))
        ) : (
          <p className='no-reminders'>You have no reminders</p>
        )}
      </div>
    </div>
  );
};
