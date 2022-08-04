import React from 'react'
import HtmlParser from 'react-html-parser'
import {
  Box, Flex, Image, Link, SectionTitle
} from '../common'
import { useAppSelector } from '../../hooks'

export default function AboutUs(): React.ReactElement {
  const {
    description, img_url, title_description
  } = useAppSelector(({ ong }) => ong.ongConfig?.description) || {}

  return (
    <Flex id="about" align="stretch" mt={4.2} pl={4.1}>
      <Flex direction="column" align="stretch" justify="stretch" textAlign="left" flex={1}>
        <SectionTitle marginTop={0} padding={0} fontSize={2.4}>
          {title_description}
        </SectionTitle>

        <Box fontSize={1.1} pr={2.8} color="#777" lineHeight={1.8}>
          {HtmlParser(description?.slice(0, 400))}
        </Box>

        <Link to="/about" align="flex-start" underlined>
          Read more
        </Link>
      </Flex>

      <Flex justify="flex-end" align="flex-start" flex={1}>
        <Image src={img_url} alt="About us" />
      </Flex>
    </Flex>
  )
}
