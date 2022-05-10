import React, { useEffect, useState } from 'react'
import {key} from '../.secrets/keys'
import styled from 'styled-components'
import {Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import {Link} from 'react-router-dom'

function Vegetarian() {
  
    const [Vegetarian, setVegetarian] = useState([]);


  useEffect(() => {
    getVegetarian()
  }, []);

  const getVegetarian = async () => {

    const recipeCheck = localStorage.getItem('Vegetarian')

    if(recipeCheck){

      setVegetarian(JSON.parse(recipeCheck))

    }
    else{

      const VegetarianRecipeAPI = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${key}&tags=vegetarian`) 

      const VegetarianRecipeData = await VegetarianRecipeAPI.json()

      localStorage.setItem('Vegetarian', JSON.stringify(VegetarianRecipeData.recipes))
  
      console.log(VegetarianRecipeData)
  
      setVegetarian(VegetarianRecipeData.recipes)
      
    }
  }


  return (
  
    <Wrapper>
      <h2>
        Vegetarian
      </h2>

      <Splide
        options={{
          perPage: 4,
          arrows: true,
          pagination: false,
          drag: "free",
          gap: "5rem"
        }}>
        {Vegetarian.map((recipe) => {

          return(
            <SplideSlide key={recipe.id}>
              <Card>
                <Link to={'/recipe/' +recipe.id}>
                <p>
                  {recipe.title}
                </p>

                <img src={recipe.image} alt="{recipe.title}" />
                <Gradient />
                </Link>
              </Card>
            </SplideSlide>
          )
        })}
      </Splide>
    </Wrapper>

    
  )
}


const Wrapper = styled.div`
margin: 5rem 0rem; `

const Gradient = styled.div`
z-index: 3;
position:absolute;
height:100%;
width:100%;
background:linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.75))`

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



export default Vegetarian