import styled from "styled-components";
import Backgroud from '../../assets/background1.svg'

export const Container = styled.div`
background-image: url("${Backgroud}");
background-size: cover;

display: flex;
flex-direction: column;
align-items: center;
gap: 40px;

`
export const Image = styled.img`
margin-top: 30px;
`
export const InputLabel = styled.p`
letter-spacing: -0.48px;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 22px;
color: #ffffff;
margin-left: 25px;
`
export const Input = styled.input`
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 14px;

width: 342px;
height: 58px;
padding-left: 25px;
margin-bottom: 34px;

border: none;
outline: none;

font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 28px;

color: #ffffff;
`