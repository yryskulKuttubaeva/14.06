import axios from "axios";

function Form() {
    function onFormSumbit(event) {
        event.preventDefault();

        // console.log(event);
        // console.log(this);


        //Derect and simple
        // alert(`${event.target[0].value} ${event.target[1].value}`);

        //Better way
        const formData = new FormData(event.target);
        // alert(`${formData.get('first_name')} ${formData.get('last_name')} ${formData.get('address')} ${formData.get('age')}`)
        axios.post(`https://dvd1-d3625-default-rtdb.firebaseio.com/people.json`, Object.formEntries(formData.entries()));

    }
    return (
        <div className="From" onSubmit={onFormSumbit}>
            <label>
                First name:
                <input type="text" name="first_name" />
            </label>
            <label>
                Last name:
                <input type="text" name="last_name" />
            </label>
            <label>
                Address:
                <input type="text" name="address" />
            </label>
            <label>
                Age:
                <input type="text" name="age" />
            </label>

            <button>ADDAD</button>
        </div>
    )
}
export default Form;