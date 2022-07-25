import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../../../app/context/theme-context'
import { Text } from '../../../components/common'

interface IProps {
  title: 'Latest Donations' | 'Historical';
}
function LatestDonations({ title }: IProps) {
  const color = useTheme()
  return (
    <>
      <Text weight="bold" fontSize={2} color={color} textAlign="left">
        {title || 'Latest Donations'}
      </Text>
      <Section>
        <Flex>
          <h1>Amjad</h1>
          <Text textAlign="right">$34</Text>
        </Flex>

        <Text lineHeight={0} textAlign="left">1/3/2922</Text>

        <Text mt={1}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Nemo, in molestias fugiat doloribus exercitationem quaerat vitae ab. Mi
        </Text>
      </Section>
    </>
  )
}

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 3rem;
  border-radius: 15px;
  text-align: left;
  border: 1px solid #777777;
  width: 60%;
`

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export default LatestDonations
