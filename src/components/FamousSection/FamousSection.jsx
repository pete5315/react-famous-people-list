import React, { useState, useEffect } from 'react';
import './FamousSection.css';
import FamousPersonForm from '../FamousPersonForm/FamousPersonForm';
import FamousPersonList from '../FamousPersonList/FamousPersonList';
import axios from 'axios';

function FamousSection() {
  let [famousPeopleArray, setPeopleArray] = useState([]);

  const fetchPeople = () => {
    // TODO: fetch the list of people from the server
    axios({
        method : 'GET',
        url: '/people'
    }).then( response => {
        console.log(response.data);
        setPeopleArray(response.data)
    }).catch( (err) => {
        console.log(err);
    })
}

    return (
      <section className="new-person-section">
        <FamousPersonForm fetch={fetchPeople} />

        <FamousPersonList fetch={fetchPeople} famous={famousPeopleArray} />
      </section>
    );
}

export default FamousSection;