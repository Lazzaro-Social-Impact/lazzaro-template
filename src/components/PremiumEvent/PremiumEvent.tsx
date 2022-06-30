import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { Progress } from 'antd'

export default function PremiumEvent(): ReactElement {
  return (
    <PremiumEventSection>
      <EventDetails>
        <EventImage src="https://picsum.photos/200" alt="event" />
        <EventTitle>
          Sponsor an illed child
        </EventTitle>
        <EventDescription>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industrys standard dummy text ever since the 1500s and stuff
        </EventDescription>
        <p>Read more...</p>
      </EventDetails>
      <EventDonationProgress>
        <ProgressContainer>

          <CustomProgress
            type="circle"
            showInfo
            percent={80}
            strokeWidth={2}
            strokeColor="#000"
            trailColor="none"
            width={250}
          />
          <Donated>Donated</Donated>
        </ProgressContainer>
        <DonateButton>Donate Now</DonateButton>
      </EventDonationProgress>
    </PremiumEventSection>
  )
}

const PremiumEventSection = styled.section`
display: flex;
justify-content: space-between;
padding: 0 3.2rem;
align-items: flex-start;
margin: 3.8rem 0;
p:last-child {
    color: #777;
    text-decoration: underline;
}
`
const EventImage = styled.img`
width: 50px;
`

const EventDetails = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
gap: 1.2rem;
width: 80%;
height: 100%;
`

const EventTitle = styled.p`
font-size: 3.2rem;
font-weight: bold;
line-height: 1.2;
margin-bottom: 0;
`

const EventDescription = styled.p`
color: #777;
line-height: 1.8;
font-size: 1.2rem;
margin-top: 1.4rem;
`
const EventDonationProgress = styled.div`
display: flex;
flex-direction: column;
gap: 3.8rem;
align-items: center;
width:50%;
height: 100%;
`
const ProgressContainer = styled.div`
position: relative;
`
const CustomProgress = styled(Progress)`
.ant-progress-inner{
    font-weight: bold;
}
`
const Donated = styled.p`
position: absolute;
bottom: 4.2rem;
color: #5CB780 !important;
left: 50%;
bottom: 12%;
font-size: 1.4rem;
font-weight: bold;
text-decoration: none !important;
transform: translateX(-50%);
`
const DonateButton = styled.button`
color: white;
text-align: center;
background-color:black;
padding: 0.8rem 1.8rem;
font-weight: bold;
border-radius: 35px;
font-size: 1.2rem;
cursor: pointer;
`
