import styled from "styled-components"

const color = "green"

export const Title = styled.h1`
text-align: center;
background: ${color};
color: white;
padding:20px;
margin: 20px;
`

export const FlexContainer = styled.div`
display: flex;
width: 85%;
margin: 10px auto;
justify-content: space-around;
flex-wrap: wrap;
`

export const Card = styled.div`
width: 30%;
min-width: 300px;
height: 400px;
border: 3px dashed green;
padding: 6px;
text-align: center;
`

export const StyledImage = styled.img`
width: 200px;
height: 200px;
display: block;
object-fit: cover;
margin: auto;
`

export const Button = styled.button`
padding: 20px;
font-size: 1.3em;
border: none;
border-radius: 30px;
background-color: green;
color: white;
margin: 10px
`