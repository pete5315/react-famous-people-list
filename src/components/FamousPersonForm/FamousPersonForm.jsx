import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FamousPersonList from '../FamousPersonList/FamousPersonList';



function FamousPersonForm(props) {

    let [famousPersonName, setPersonName] = useState('');
    let [famousPersonRole, setPersonRole] = useState('');
    let fetchPeople = props.fetch
    const addPerson = (evt) => {
        evt.preventDefault();
        axios.post(`/people`, {name : famousPersonName, role: famousPersonRole})
        .then( (response) => {
            console.log(response);
            fetchPeople();
            setPersonName('');
            setPersonRole('');
        })
        .catch(function (error) {
            console.log(error);
        });    
        console.log(`The person is ${famousPersonName} and they're famous for ${famousPersonRole}`);
    }



    return (
    <div>
        <form onSubmit={addPerson}>
        <label htmlFor="name-input">Name:</label>
        <input value={famousPersonName} id="name-input" onChange={e => setPersonName(e.target.value)} />
        <label htmlFor="role-input">Famous for:</label>
        <input value={famousPersonRole} id="role-input" onChange={e => setPersonRole(e.target.value)} />
        <button type="submit">Done</button>
        </form>
    </div>
    )
}
export default FamousPersonForm;