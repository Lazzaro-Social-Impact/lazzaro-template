import HtmlParser from 'html-react-parser'

import { Box } from '../../../components/common'

function Description({ description }: { description: string }) {
  return (
    <Box>
      {HtmlParser(description)}
    </Box>
  )
}

export default Description
