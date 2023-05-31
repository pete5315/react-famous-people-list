import React, { useEffect } from 'react';
import FamousPerson from '../FamousPerson/FamousPerson';


function FamousPersonList(props) {
    let famousPeopleArray=props.famous
    let fetchPeople=props.fetch

    useEffect(() => {
        fetchPeople();
    }, []);
    

    return (
        <ul>
            {famousPeopleArray.map(person => (
                    <FamousPerson person={person} key={person.id}/>
            ))}
        </ul>    
    )

}
export default FamousPersonList;