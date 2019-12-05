import styled, { keyframes } from "styled-components";


const rotate = keyframes`
    0% { transform: rotate( 0 ); }
    10% { width: 6.250em; height: 6.250em; }
    66% { width: 2.4em; height: 2.4em; }
    100%{ transform: rotate(360deg); width: 6.250em; height: 6.250em; }
`

const dotsY = keyframes`
    66% { opacity: .1; width: 2.4em; }
    77%{ opacity: 1; width: 0; }
`
const dotsX = keyframes`
    66% { opacity: .1; height: 2.4em;}
    77%{ opacity: 1; height: 0; }
`

const flash = keyframes`
    33% { opacity: 0; border-radius: 0%; }
    55%{ opacity: .6; border-radius: 100%; }
    66%{ opacity: 0; }
`






export const LoadingContainer = styled.div`
  position: absolute;
  margin: auto;
  top: 0; bottom: 0; left: 0; right: 0;
  width: 6.250em; height: 6.250em;
  animation: ${rotate} 2.4s linear infinite;
  background:#fff;
.white { 
  top: 0; bottom: 0; left: 0; right: 0; 
  background: white; 
  animation: ${flash} 2.4s linear infinite;
  opacity: 0;
}
.dot {
  position: absolute;
  margin: auto;
  width: 2.4em; height: 2.4em;
  border-radius: 100%;
  transition: all 1s ease;
}
.dot:nth-child(2) { top: 0; bottom: 0; left: 0; background: #FF4444; animation: ${dotsY} 2.4s linear infinite; }
.dot:nth-child(3) { left: 0; right: 0; top: 0; background: #FFBB33; animation: ${dotsX} 2.4s linear infinite; }
.dot:nth-child(4) { top: 0; bottom: 0; right: 0; background: #99CC00; animation: ${dotsY} 2.4s linear infinite; }
.dot:nth-child(5) { left: 0; right: 0; bottom: 0; background: #33B5E5; animation: ${dotsX} 2.4s linear infinite; }

`