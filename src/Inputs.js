import {  useState } from "react";

function Inputs() {
    const [firstName , setFirstName] = useState('');
    const [lastName , setLastName] = useState('');

    function onFirstNameChange(event)  {
        setFirstName(event.target.value)
    }
    function onLastNameChange(event)  {
        setLastName(event.target.value)
    }

    function onButtonClick() {
        alert(`${firstName} ${lastName}`)
    }

  return (
    <div className="Inputs">
      <label>
        First name:
        <input type="text" onChange={onFirstNameChange} />
      </label>
      <label>
        Last name:
        <input type="text" onChange={onLastNameChange} />
      </label>

      <button onClick={onButtonClick}>ADD</button>
    </div>
  );
}

export default Inputs;
