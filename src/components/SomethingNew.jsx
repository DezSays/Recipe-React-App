import React, { useEffect, useState } from 'react'
import {key} from '../.secrets/keys'
import styled from 'styled-components'
import {Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/react-splide/css';

function SomethingNew() {

  const [newRecipe, setNewRecipe] = useState([]);


  useEffect(() => {
    getNewRecipe()
  }, []);

  const getNewRecipe = async () => {

    const recipeCheck = localStorage.getItem('newRecipe')

    if(recipeCheck){

      setNewRecipe(JSON.parse(recipeCheck))

    }
    else{

      const randomRecipeAPI = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${key}`) 

      const randomRecipeData = await randomRecipeAPI.json()

      localStorage.setItem('newRecipe', JSON.stringify(randomRecipeData.recipes))
  
      console.log(randomRecipeData)
  
      setNewRecipe(randomRecipeData.recipes)
      
    }
  }


  return (
  
    <TitleStyle>
      <h2>
        Something New
      </h2>

      <Splide
        options={{
          perPage: 3,
          arrows: true,
          pagination: false,
          drag: "free",
          gap: "5rem"
        }}>
        {newRecipe.map((recipe) => {

          return(
            <SplideSlide key={recipe.id}>
              <RecipeHolder>
                
                <p>
                  {recipe.title}
                </p>

                <img src={recipe.image} alt="{recipe.title}" />
                <GradientLayer />
              </RecipeHolder>
            </SplideSlide>
          )
        })}
      </Splide>
    </TitleStyle>

    
  )
}

const TitleStyle = styled.div`
margin: 5rem 0rem; `

const GradientLayer = styled.div`
z-index: 3;
position:absolute;
height:100%;
width:100%;
background:linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.75))`

const RecipeHolder = styled.div`
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
object-fit: cover;

}

p{
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


export default SomethingNew