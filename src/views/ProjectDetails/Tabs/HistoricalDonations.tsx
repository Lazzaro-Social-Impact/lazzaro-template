import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { getProjectLatestDonationsURL } from '../../../api/getApiServices'
import { Text } from '../../../components/common'
import { useDependant } from '../../../hooks'

interface IProps {
  title: 'Latest Donations' | 'Historical';
  projectId: string;
}

interface IDonation {
  id: string;
  text: string;
  anonymous: boolean;
  amount: number;
  createdAt: string;
  User: {
    firstName: string;
    lastName: string;
  };
}
function LatestDonations({ title, projectId }: IProps) {
  const { data: donations } = useDependant(
    getProjectLatestDonationsURL(projectId),
    [`donations${projectId}`],
    projectId
  )

  const formatDate = (date: string) => moment(date).format('MM Do YYYY')
  return (
    <Container>
      <Text weight="bold" fontSize={2} textAlign="left">
        {title || 'Latest Donations'}
      </Text>
      {donations?.map((donation: IDonation) => (
        <Section>
          <Flex>
            <Text fontSize={1.2}>
              {donation.anonymous
                ? 'anonymous'
                : `${donation.User.firstName} ${donation.User.lastName}`}
            </Text>
            <Text textAlign="right">${donation.amount}</Text>
          </Flex>

          <Text fontSize={0.7} lineHeight={0} textAlign="left" color="#777777" mt={-1.5}>
            {formatDate(donation.createdAt)}
          </Text>

          <Text mt={1}>{donation.text}</Text>
        </Section>
      ))}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow-y: auto;
  height: 50rem;
  `
const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 3rem;
  border-radius: 15px;
  text-align: left;
  border: 1px solid #777777;
  width: 80%;
  margin-inline: 3rem;
`

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export default LatestDonations
