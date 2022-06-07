import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {key} from '../.secrets/keys'
import { useParams } from 'react-router-dom';
import { addToFav } from '../actions/actions';
import { useDispatch, useSelector } from 'react-redux';

const Recipe = () => {

    let params = useParams(); 
    const [description, setDescription] = useState({})
    const [activeTab, setActiveTab] = useState("Instructions")
    const dispatch = useDispatch()
    
    // const actions = useSelector(state => state.favorites)
    
    useEffect(() => {
        recipeDescription()
    },[params.id])

    const recipeDescription = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${key}`)
        const details = await data.json()
        setDescription(details)
    };
    const handleAddToFavs = () =>{
        
        dispatch(addToFav(description))
        
    }


  return (
    <DetailWrapper>
        <div>
            <h2>{description.title}</h2>
            <img src={description.image} alt="" />
        </div>
        
        <Info>
            <Button className={activeTab === 'Instructions' ? 'active' : ''} onClick={() => setActiveTab("Instructions")}>Instructions</Button>
            <Button className={activeTab === 'Ingredients' ? 'active' : ''}onClick={() => setActiveTab("Ingredients")}>Ingredients</Button>
           
            {activeTab === 'Instructions' && (

            
            <div>
                <h4 dangerouslySetInnerHTML={{__html: description.summary}}></h4>

                <h4 dangerouslySetInnerHTML={{__html: description.instructions}}></h4>
            </div>
            )}
            {activeTab === "Ingredients" && (

            
            <ul>
                {description.extendedIngredients.map((ingredient) => (
                    <li key={ingredient.id}><h4>{ingredient.original}</h4></li>
                ))}
            </ul>
            )}


        </Info>
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
margin-top: 10rem;
margin-bottom: 5rem;
display: flex;

.active{
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
}
h2{
    margin-bottom: 2rem;
    
}
li{
    font-size: 1.2rem;
    line-height: 2.5rem;
    
}
ul{
    margin-top: 2rem;
}`;
const Button = styled.button`
padding: 1rem 2rem;
color: #313131;
background: white;
border: 2px solid black;
margin-right: 2rem;
font-weight: 600`

const Info = styled.div`
margin-left: 10rem`

export default Recipe