import './Content.css'
// eslint-disable-next-line no-unused-vars
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useState, useEffect } from "react";
import axios from 'axios';

export const Content = () => {
  const [persons, setPersons] = useState([]);

  const getPersons = async () => {
    const response = await axios.get("https://rickandmortyapi.com/api/character");
    console.log(response)
    setPersons(response.data.results);
  }

  useEffect(() => {
    getPersons()
  }, [])

  return (
    <div className='card_persons'>
      {
        persons.map((person, index) => (
          <Card key={index} sx={{ maxWidth: 300 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                image={person.image}
                alt="imagen de API"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {person.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {person.species}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))
      }
    </div>
  )
}




