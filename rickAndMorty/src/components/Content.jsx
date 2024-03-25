import './Content.css'
// eslint-disable-next-line no-unused-vars
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useState, useEffect } from "react";
import axios from 'axios';







export const Content = () => {
  const [persons, setPersons] = useState([]);


  const getPersons = async () => {
    const allPersons = [];

    for (let page = 1; page <= 41; page++) {
      try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`);
        allPersons.push(...response.data.results);
      } catch (error) {
        console.log('Error fetching persons:', error);
      }
    }

  console.log(allPersons);
  setPersons(allPersons);
};

  useEffect(() => {
    getPersons()
  }, [])

  return (
    <div className='card_persons'>
      {
        persons.map((person, index) => (
          <Card key={index} sx={{ maxWidth: 300 }} className="card-container">
            <CardActionArea>
              <img className="img-fluid rounded-pill" src={person.image} alt={person.name} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {person.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Species: {person.species}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Status: {person.status}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Location : {person.location.name}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))
      }
    </div>
  )
}