import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../../app/context/theme-context'
import { Footer, Navbar } from '../../components'
import { SectionTitle, Paragraph } from '../../components/common'

const TermsAndConditions = () => {
  const color = useTheme()

  return (
    <>
      <Navbar />

      <Flex>
        <SectionTitle fontSize={2.5} color={color} marginBottom={0} padding={0}>
          Term And Conditions
        </SectionTitle>

        <Paragraph color="#777777" fontSize={1}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo magni molestias ipsam.
          Vel voluptatibus repudiandae rem dicta accusantium mollitia reiciendis, illo, error
          facilis similique fugit blanditiis obcaecati sequi aliquam aspernatur,facilis similique
          fugit blanditiis obcaecati sequi aliquam aspernatur, facilis similique fugit blanditiis
          obcaecati sequi aliquam aspernatur,facilis similique fugit blanditiis obcaecati sequi
          aliquam aspernatur.
        </Paragraph>
      </Flex>

      <Footer />
    </>
  )
}

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  gap: 3rem;
  padding-inline: 4rem;
  flex: 1;
`
export default TermsAndConditions
