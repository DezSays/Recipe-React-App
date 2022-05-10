import React, {useEffect, useState} from 'react'
import styled from 'styled-components';
import {useParams} from 'react-router-dom';
import {key} from '../.secrets/keys'
import Link from 'react-router-dom'


function Input() {

    const [searchedRecipe, setSearchedRecipe] = useState([])
    let params = useParams()

    const getInput = async (input) => {
        const cuisineData = await fetch(`https://api.spoonacular.com/recipes/complexSearch?number=10&apiKey=${key}&query=${input}`) 
        const recipeType = await cuisineData.json();
        setSearchedRecipe(recipeType.results);
   };

   useEffect(() => {
     
   getInput(params.input)
     
   }, [params.input])
   


  return (
      
    <Grid>
        {searchedRecipe.map((recipe) => {
            return(
              <Link to={'/recipe/' +recipe.id}>
                <Card key={recipe.id}>
                    <img src={recipe.image} alt="" />
                    <h4>{recipe.title}</h4>
                </Card>
              </Link>
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



export default Input