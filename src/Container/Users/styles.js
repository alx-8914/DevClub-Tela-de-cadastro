import styled from "styled-components";
import Backgroud from '../../assets/backgroun.svg'

export const Container = styled.div`
background-image: url("${Backgroud}");
background-size: cover;

display: flex;
flex-direction: column;
align-items: center;
gap: 40px;

height: 100%;
min-height: 100%;

`
export const Image = styled.img`
margin-top: 30px;
`
export const Project = styled.li`
display: flex;
justify-content: space-around;
align-items: center;
margin-top: 20px;
height: 58px;
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 14px;

width: 342px;
height: 58px;

border: none;
outline: none;

p {
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;

  color: #ffffff;
}

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`