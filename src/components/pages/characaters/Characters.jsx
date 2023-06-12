import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Typography } from "@mui/material"
import CardCharacter from '../../common/cardCharacter/CardCharacter'


const Characters = () => {

  let [character, setCharacter] = useState([])

  useEffect(()=>{

    // const apiRAM = "https://rickandmortyapi.com/api/character"
    // fetch(apiRAM)
    //   .then(res => res.json())
    //   .then(res => setCharacter(res.results))

    axios.get("https://rickandmortyapi.com/api/character")
    .then(res => setCharacter(res.data.results))



  },[])

  console.log(character)

  return (

    <>
      <Typography variant='h2' color={"primary"} align='center' marginBottom={2}>Personajes</Typography>
      <div style={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",

      }}>
        {
          character.map((character)=>{
            return(
              <CardCharacter character={character} key={character.id}/>
            )
          })
        }
      </div>
    </>
  )
}

export default Characters