import { Form } from '../../components'
import { Flex, SectionTitle } from '../../components/common'

function Donate() {
  const handleSubmit = (values:any) => {
    console.log(values)
  }

  return (
    <Flex direction="column">
      <SectionTitle fontSize={3}>Make a donation</SectionTitle>
      <Form submitHandler={handleSubmit} />
    </Flex>
  )
}

export default Donate
