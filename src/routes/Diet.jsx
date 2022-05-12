

import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import {Link, useParams} from 'react-router-dom';
import {key} from '../.secrets/keys'





function Diet() {

    const [Diet, setDiet] = useState([]);
    let params = useParams();

    const getDiet = async (Diet) => {
        const DietData = await fetch(`https://api.spoonacular.com/recipes/complexSearch?number=10&apiKey=${key}&tags=${Diet}`) 
        const recipeType = await DietData.json();
        setDiet(recipeType.results);
   };
   useEffect(() => {
    getDiet(params.type)
   }, [params.type])
   
  return (
    <Grid>
        {Diet.map((dish) => {
            return(
                <Card key={dish.id}>
                  <Link to={'/recipe/'+dish.id}>
                    <img src={dish.image} alt="{dish.title}" />
                    <h4>{dish.title}</h4>
                  </Link>
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

export default Diet