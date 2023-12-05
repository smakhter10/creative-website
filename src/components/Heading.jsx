import React from 'react'
import styled from 'styled-components'

const Heading = ({text}) => {
  return (
    <HeadingCss>
        <div></div>
        <p>{text}</p>
        <div></div>
    </HeadingCss>
  )
}

const HeadingCss = styled.section `
    display: flex;
    align-items: center;
    justify-content: center;

    div{
        background-color: white;
        height: 1px;
        width: 30vw;
        
    }

    p{
        color: white;
        font-size: 1.4rem;
        margin: 30px;
    }
`

export default Heading