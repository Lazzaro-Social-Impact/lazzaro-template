import HtmlParser from 'html-react-parser'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import {
  Box, Flex, Link, SectionTitle
} from '../common'
import { useAppSelector } from '../../hooks'
import { LazyImageComponent } from '../common/LazyImage'

export default function AboutUs(): React.ReactElement {
  const {
    description = '', img_url: imgUrl, title_description: titleDescription
  } = useAppSelector(({ ong }) => ong.ongConfig?.description) || {}
  const { t } = useTranslation()
  return (
    <CustomFlex id="about" align="stretch" mt={4.2} pl={4.1}>
      <Flex direction="column" align="stretch" justify="stretch" textAlign="left" flex={1}>
        <SectionTitle marginTop={0} marginBottom={0.6} padding={0} fontSize={2.2}>
          {titleDescription}
        </SectionTitle>

        <Box fontSize="15px" pr={2.8} color="#777" lineHeight={1.8}>
          {HtmlParser(description).toString().length > 1020 ? (
            <>

              <Box>
                {HtmlParser(description).toString().slice(0, 1010)}...
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
        <LazyImageComponent
          src={imgUrl}
          alt="About us"
          placeholderSrc={imgUrl}
        />
      </Flex>
    </CustomFlex>
  )
}

const CustomFlex = styled(Flex)`
  @media screen and (max-width: 690px) {
    flex-direction: column;
    padding: 4.1rem;
    margin-top: 1.2rem;
    P {
      font-size: 13px;
    }

  }
    p,
    strong,
    span {
      color: rgb(34, 34, 34) !important;
      line-height: 1.6rem !important;
      font-size: 16px !important;
      font-weight: 400 !important;
    }
`
