import styled, { css } from 'styled-components'

export const Section = styled.section`
    color: ${props => props.theme.Leiteria.gabriel};//theme caption

  /* background-color: ${props => props.active ? "#ccc" : "#fff000"}; //props status hook */
  
    ${props => props.active && css`
        border: 1px solid black;
        background-color: #999;
    ` };
  
    ${props => !props.active && css`
        border: 1px solid black;
        background-color: #999;
    ` };
`
