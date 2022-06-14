import axios from "axios";
import { useEffect, useState } from "react"

function People () {
    const [people, setPeople] = useState(null);

    useEffect(function() {
        axios.post(`https://dvd1-d3625-default-rtdb.firebaseio.com/people.json`)
        .then(({data}) =>{
            const newPeople = Object.keys(data).map(id => {
                return { id:id, ...data[id]};
                
            })
            setPeople(newPeople)
        });
    }, []); 

    let output ="Loading...";
    if (people !== null) {
        output =people.map((person) => (
            <li key={person.id}>
                {person.first_name} {person.last_name} {person.address} {person.age}
            </li>
        ))
    }
    return(
        <ul>
              {output}
        </ul>
    )
}
export default People