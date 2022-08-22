import HtmlParser from 'react-html-parser'
import { Box } from '../../../components/common'

function Description({ description }: { description: string }) {
  return (
    <Box>
      {HtmlParser(description)}
    </Box>
  )
}

export default Description
