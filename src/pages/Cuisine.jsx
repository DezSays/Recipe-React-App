

import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {Link, useParams} from 'react-router-dom';
import {key} from '../.secrets/keys'





function Cuisine() {

    const [cuisine, setCuisine] = useState([]);
    let params = useParams();

    const getCuisine = async (cuisine) => {
        const cuisineData = await fetch(`https://api.spoonacular.com/recipes/complexSearch?number=10&apiKey=${key}&cuisine=${cuisine}`) 
        const recipeType = await cuisineData.json();
        setCuisine(recipeType.results);
   };
   useEffect(() => {
    getCuisine(params.type)
   }, [params.type])
   
  return (
    <Grid>
        {cuisine.map((dish) => {
            return(
                <Card key={dish.id}>
                    <img src={dish.image} alt="{dish.title}" />
                    <h4>{dish.title}</h4>
                </Card>
            )
        })}

    </Grid>
  )
}

const Grid = styled.div`
display: grid;
grid-template-colums: repeat(auto-fit, minmax(20rem, 1fr));
grid-gap: 3rem;`

const Card = styled.div`
min-height: 15rem;
border-radius: 2rem;
overflow: hidden;
position: relative;



img{

border-radius: 2rem;
position: absolute;
left: 0;

height: 100%;
width:100%;
object-fit: contain;

}

h4{
  position: absolute;
  z-index: 10;
  left: 50%;
  bottom: 0%;
  transform: translate(-50%, 0%);
  color: white;
  width:100%;
  text-align: center;
  font-weight: 600;
  font-size: 1.5rem;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
}
`

export default Cuisine