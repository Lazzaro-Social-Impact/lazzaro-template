import React, { ReactElement, useLayoutEffect, useState } from 'react'
import styled from 'styled-components'
import { Progress } from 'antd'
import { ReadMore, SectionTitle, Button } from '../common'
import { useTheme } from '../../app/context/theme-context'

export default function PremiumEvent(): ReactElement {
  const [progressWidth, setProgressWidth] = useState<number>(250)
  const [windowSize, setWindowSize] = useState<number>(window.outerWidth)
  const globalColor = useTheme()
  // Watch for window resize (width)
  useLayoutEffect(() => {
    const handleResize = () => {
      setWindowSize(window.outerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Watch for watch for width so that we can set the progress circle width
  useLayoutEffect(() => {
    switch (true) {
      case windowSize <= 768 && windowSize > 621:
        setProgressWidth(200)
        break
      case windowSize <= 621 && windowSize > 450:
        setProgressWidth(120)
        break
      case windowSize <= 450:
        setProgressWidth(100)
        break
      default:
        setProgressWidth(250)
    }

    return () => {
      setProgressWidth(250)
    }
  })

  return (
    <PremiumEventSection>
      <EventDetails>
        <EventImage src="https://picsum.photos/200" alt="event" />
        <SectionTitle fontSize={2.2} padding={0} marginTop={0} marginBottom={0}>
          Sponsor an illed child
        </SectionTitle>
        <EventDescription>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industrys standard dummy text ever since the 1500s and stuff
        </EventDescription>
        <ReadMore hoverColor={globalColor}>Read more</ReadMore>
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
            width={progressWidth}
          />
          <Donated>Donated</Donated>
        </ProgressContainer>
        <Button bgColor="#424242" fontSize={1} py={0.6} px={0.6}>
          Donate Now
        </Button>
      </EventDonationProgress>
    </PremiumEventSection>
  )
}

const PremiumEventSection = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 0 4.1rem;
  gap: 4rem;
  align-items: flex-start;
  margin-block: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;

    & > :first-child {
      text-align: center;

      img {
        align-self: center;
      }
    }

    & > :last-child {
      text-align: center;
      padding: 0;
    }
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
  height: 100%;
`

const EventDescription = styled.p`
  color: #777;
  line-height: 1.8;
  font-size: 1.2rem;
  margin-top: 1.4rem;
  padding-right: 4rem;
`
const EventDonationProgress = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.8rem;
  align-items: center;
  height: 100%;
  padding-left: 9.2rem;
`
const ProgressContainer = styled.div`
  position: relative;
`
const CustomProgress = styled(Progress)`
  .ant-progress-inner {
    font-weight: bold;
  }
`
const Donated = styled.p`
  position: absolute;
  bottom: 4.2rem;
  color: #5cb780 !important;
  left: 50%;
  bottom: 12%;
  font-size: 1.4rem;
  font-weight: bold;
  text-decoration: none !important;
  transform: translateX(-50%);
`
