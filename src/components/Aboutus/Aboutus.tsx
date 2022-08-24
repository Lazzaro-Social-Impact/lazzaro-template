import HtmlParser from 'html-react-parser'
import { useTranslation } from 'react-i18next'
import {
  Box, Flex, Image, Link, SectionTitle
} from '../common'
import { useAppSelector } from '../../hooks'

export default function AboutUs(): React.ReactElement {
  const {
    description = '', img_url: imgUrl, title_description: titleDescription
  } = useAppSelector(({ ong }) => ong.ongConfig?.description) || {}
  const { t } = useTranslation()
  return (
    <Flex id="about" align="stretch" mt={4.2} pl={4.1}>
      <Flex direction="column" align="stretch" justify="stretch" textAlign="left" flex={1}>
        <SectionTitle marginTop={0} padding={0} fontSize={2.4}>
          {titleDescription}
        </SectionTitle>

        <Box fontSize={1.1} pr={2.8} color="#777" lineHeight={1.8}>
          {HtmlParser(description).toString().length > 1180 ? (
            <>

              <Box>
                {HtmlParser(description).toString().slice(0, 1180)}...
              </Box>

              <Link to="/about" align="flex-end" mt={1.8} underlined>
                {t('Read More')}
              </Link>
            </>
          )
            : HtmlParser(description)}
        </Box>

      </Flex>

      <Flex justify="flex-end" align="flex-start" flex={1}>
        <Image src={imgUrl} alt="About us" />
      </Flex>
    </Flex>
  )
}
