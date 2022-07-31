import { FC } from 'react'
import HtmlParser from 'react-html-parser'
import { Footer, Navbar } from '../../components'
import { Flex, SectionTitle } from '../../components/common'
import { useAppSelector } from '../../hooks'

const TermsAndConditions:FC = () => {
  const termsAndConditions = useAppSelector(({ ong }) => ong.ongConfig?.brand.terms_and_conditions)

  return (
    <>
      <Navbar />

      <Flex mt={4} gap={3} px={4} textAlign="left" align="flex-start" direction="column">
        <SectionTitle fontSize={2.5} marginBottom={0} padding={0}>
          Term And Conditions
        </SectionTitle>

        <div>{HtmlParser(termsAndConditions)}</div>
      </Flex>

      <Footer />
    </>
  )
}

export default TermsAndConditions
