

import React from 'react'
import { FaPizzaSlice, FaHome } from "react-icons/fa";
import { GiTacos, GiChopsticks, GiChickenLeg, GiHamburger, GiChefToque, GiCookie, GiRoastChicken, GiHotSpices, GiCoolSpices, GiFriedFish, GiSushis } from "react-icons/gi";
import styled from "styled-components";
import {NavLink} from "react-router-dom"



function Category() {
  return (<>
  <List>    
  <SLink to={'/'}>
        <FaHome />
        <h4>Home</h4>
    </SLink>
    </List>
    <List>
  <SLink to={'/cuisine/Italian'}>
        <FaPizzaSlice />
        <h4>Italian</h4>
    </SLink>
  <SLink to={'/cuisine/Cajun'}>
        <GiHotSpices />
        <h4>Cajun</h4>
    </SLink>
  <SLink to={'/cuisine/Japanese'}>
        <GiSushis />
        <h4>Japanese</h4>
    </SLink>
  <SLink to={'/cuisine/Caribbean'}>
        <GiFriedFish />
        <h4>Caribbean</h4>
    </SLink>
    </List>
    <List>
  <SLink to={'/cuisine/Nordic'}>
        <GiCoolSpices />
        <h4>Nordic</h4>
    </SLink>
  <SLink to={'/cuisine/British'}>
        <GiCookie />
        <h4>British</h4>
    </SLink>
  <SLink to={'/cuisine/African'}>
        <GiRoastChicken />
        <h4>African</h4>
    </SLink>
    <SLink to={'/cuisine/Southern'}>
        <GiChickenLeg />
        <h4>Southern</h4>
    </SLink>
    </List>
    <List>
    <SLink to={'/cuisine/American'}>
        <GiHamburger />
        <h4>American</h4>
    </SLink>
    <SLink to={'/cuisine/French'}>
        <GiChefToque />
        <h4>French</h4>
    </SLink>
    <SLink to={'/cuisine/Chinese'}>
        <GiChopsticks />
        <h4>Chinese</h4>
    </SLink>
    <SLink to={'/cuisine/Mexican'}>
        <GiTacos />
        <h4>Mexican</h4>
    </SLink>
    </List>
    </>
  );
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem
`

const SLink = styled(NavLink)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 50%;
margin-right: 2rem;
text-decoration: none;
background: linear-gradient(35deg, #494949, #313131);
width: 6rem;
height: 6rem;
cursor: pointer;
transform: scale(0.8);

h4{
    color: white;
    font-size: 0.8rem;
}

svg{
    color: white;
    font-size: 1.5rem;
}
&.active{
    background: linear-gradient(to right, #6bbf59, #08a045);

    svg{
        color: white;
    }
    h4 {
        color: white;
    }
}
`

export default Category