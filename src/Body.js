import React from 'react'
import styled from 'styled-components'
import background from '/Users/jessica/my-app/src/assets/Banner.jpg'

function Body(){
    return(
      <Section>
        <div>
          <Title>Hello World, this is my first styled component!</Title>
          <Background/>
          {/* <img src={require('/Users/jessica/my-app/src/assets/Banner.jpg') /> */}
        </div>
      </Section>
    )
}

const Section = styled.section`
  position: relative;
  height: 100%;
`

const Title = styled.h1`
  position: absolute;
  padding-bottom: 15px;
  color: #0000ff;
  font-size: 1.5em;
  jusify-content: center;
`

const Background = styled.img`
  Background-image: url(${background});
`

export default Body