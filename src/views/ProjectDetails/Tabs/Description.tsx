import { Text } from '../../../components/common'

function Description({ description }: { description: string }) {
  return (
    <Text textAlign="left" mt={1}>
      {description}
    </Text>
  )
}

export default Description
