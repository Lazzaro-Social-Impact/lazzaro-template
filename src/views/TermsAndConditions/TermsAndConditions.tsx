import { Footer, Navbar } from '../../components'
import { Flex, SectionTitle, Text } from '../../components/common'

const TermsAndConditions = () => (
  <>
    <Navbar />

    <Flex mt={4} gap={3} px={4} justify="flex-start">
      <SectionTitle fontSize={2.5} marginBottom={0} padding={0}>
        Term And Conditions
      </SectionTitle>

      <Text color="#777777" fontSize={1} textAlign="left">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo magni molestias ipsam.
        Vel voluptatibus repudiandae rem dicta accusantium mollitia reiciendis, illo, error
        facilis similique fugit blanditiis obcaecati sequi aliquam aspernatur,facilis similique
        fugit blanditiis obcaecati sequi aliquam aspernatur, facilis similique fugit blanditiis
        obcaecati sequi aliquam aspernatur,facilis similique fugit blanditiis obcaecati sequi
        aliquam aspernatur.
      </Text>
    </Flex>

    <Footer />
  </>
)

export default TermsAndConditions
