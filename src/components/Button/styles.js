import styled from "styled-components";

export const Button = styled.button`
width: 342px;
height: 74px;
margin-top: 130px;

background: ${props => props.$isBack ? 'transparent' :  ' rgba(0,0,0, 0.8)'};
border-radius: 14px;
border: ${props => props.$isBack ? '1px solid #fff' : 'none'};

font-style: normal;
font-weight: bold;
font-size: 17px;
line-height: 28px;

color: #ffffff;
cursor: pointer;

display: flex;
align-items: center;
justify-content: center;
gap: 20px;

&:hover {
  background: linear-gradient(180deg, #ff6378 0%, #fe7e);
  opacity: 0.8;
  color: #5f0d3b;
}
&:active {
  background: linear-gradient( 180deg, #4e4e 0%, #4deaff);
  opacity: 0.6;
  color: #045904;
}
img {
  transform: ${props => props.$isBack && 'rotateY(180deg)'} ;
}
`