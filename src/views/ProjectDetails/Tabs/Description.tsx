import HtmlParser from 'react-html-parser'
import { Text } from '../../../components/common'

function Description({ description }: { description: string }) {
  return (
    <Text textAlign="left" mt={1}>
      {HtmlParser(description)}
    </Text>
  )
}

export default Description
