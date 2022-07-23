/* eslint-disable max-len */
import React from 'react'
import { Typography } from 'antd'
import styled from 'styled-components'
import { ReadMore, SectionTitle } from '../common'
import { useTheme } from '../../app/context/theme-context'

const { Paragraph } = Typography

export default function AboutUs(): React.ReactElement {
  const globalColor = useTheme()
  const text = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut reprehenderit vitae enim placeat voluptate id cupiditate similique labore nostrum fugiat, at tempore, tenetur accusamus ab esse quae, aliquid architecto nulla? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis eligendi eum, ab, odit ut voluptate dolorem aliquid quidem reiciendis quas expedita hic id consectetur vitae earum quos soluta consequatur architecto! Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta praesentium omnis iure nobis reprehenderit corrupti minus doloribus, natus, dicta quam corporis architecto. Eos non quisquam optio nostrum aliquid numquam voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi provident tempora sapiente aliquid illum voluptate quas, dolore culpa architecto hic enim ullam dolor quisquam molestias cum doloribus iusto sequi possimus.'
  return (
    <AboutUsSection id="about">
      <LeftSection>
        <SectionTitle marginTop={0} padding={0} fontSize={2.4}>About us</SectionTitle>
        <AboutUsDescription>
          { text.slice(0, 200)}
        </AboutUsDescription>
        <ReadMore
          hoverColor={globalColor}
          color="black"
          href="/about"
        >Read more
        </ReadMore>
      </LeftSection>
      <ImageContainer>
        <img
          src="https://images.unsplash.com/flagged/photo-1555251255-e9a095d6eb9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
          style={{ maxWidth: '100%' }}
        />
      </ImageContainer>
    </AboutUsSection>
  )
}

const AboutUsSection = styled.section`
display: flex;
justify-content: space-between;
margin-top: 4.2rem;
padding-left: 4.1rem;
`

const LeftSection = styled.div`
display: flex;
flex-direction: column;
width: 100%;
`
const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`

const AboutUsDescription = styled(Paragraph)`
font-size: 1.1rem;
padding-right: 2.8rem;
color: #777;
line-height: 1.8;
`
