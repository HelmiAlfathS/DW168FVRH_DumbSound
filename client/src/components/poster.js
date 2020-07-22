import React, {Component} from 'react';
import styled from 'styled-components';



function Poster(props){
  return  <Styles>
    <img className="poster" src={props.src} alt={props.src}/> </Styles>
}
export default Poster;

const Styles = styled.div`
.poster{
  width: 200px;
  object-fit: cover;
  max-height: 300px;
}
`