/* eslint-disable max-len */
import React, { useState } from 'react'
import { Typography } from 'antd'
import styled from 'styled-components'

const { Paragraph, Title, Text } = Typography

export function Aboutus(): React.ReactElement {
  const [isReadMore, setIsReadMore] = useState(false)
  const text = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut reprehenderit vitae enim placeat voluptate id cupiditate similique labore nostrum fugiat, at tempore, tenetur accusamus ab esse quae, aliquid architecto nulla? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis eligendi eum, ab, odit ut voluptate dolorem aliquid quidem reiciendis quas expedita hic id consectetur vitae earum quos soluta consequatur architecto! Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta praesentium omnis iure nobis reprehenderit corrupti minus doloribus, natus, dicta quam corporis architecto. Eos non quisquam optio nostrum aliquid numquam voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi provident tempora sapiente aliquid illum voluptate quas, dolore culpa architecto hic enim ullam dolor quisquam molestias cum doloribus iusto sequi possimus.'
  return (
    <AboutUs>
      <LeftSection>
        <AboutUsTitle level={1}>About us</AboutUsTitle>
        <AboutUsDescription>
          {isReadMore ? (text) : (text.slice(0, 200))}
        </AboutUsDescription>
        <ReadMore onClick={() => setIsReadMore(!isReadMore)}>{isReadMore ? 'Show Less...' : 'Read More...'}</ReadMore>
      </LeftSection>
      <ImageContainer>
        <img
          className="about-us__img"
          src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          alt=""
          style={{ width: '100%' }}
        />
      </ImageContainer>
    </AboutUs>
  )
}

const AboutUs = styled.section`
display: flex;
justify-content: space-between;
margin-top: 4.2rem;
padding-left: 2.4rem;
`

const LeftSection = styled.div`
display: flex;
flex-direction: column;
gap: 1.8rem;
width: 100%;
`
const ImageContainer = styled.div`
  width: 100%;
`

const AboutUsTitle = styled(Title)`
font-size: 2.4rem;
`
const AboutUsDescription = styled(Paragraph)`
font-size: 1.4rem;
padding-right: 2.8rem;
color: #777;
line-height: 1.8;
`

const ReadMore = styled(Text)`
text-decoration: underline;
cursor: pointer;
align-self: flex-start;
color: #777;
 &:hover {
    color: #000;
 }
`
