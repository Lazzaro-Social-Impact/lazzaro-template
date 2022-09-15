import HtmlParser from 'html-react-parser'

import { Box } from '../../../components/common'

function Description({ description }: { description: string }) {
  return (
    <Box p={2.6}>
      {HtmlParser(description)}
    </Box>
  )
}

export default Description
