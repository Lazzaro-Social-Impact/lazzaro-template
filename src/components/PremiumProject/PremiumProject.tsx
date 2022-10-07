import { ReactElement, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Progress } from 'antd'
import HTMLReactParser from 'html-react-parser'
import moment from 'moment'
import { useTranslation } from 'react-i18next'
import { SectionTitle } from '../common'
import { DonateSubmitForm, IProject } from '../../types/interfaces'
import { useAppSelector, useFormSubmit } from '../../hooks'
import { getStartProjectDonationUrl } from '../../api/postApiServices'
import DonateForm from '../Forms/DonateForm'
import DonateModal from '../BuyModal'

interface IProps {
  project: IProject | Record<string, never>
}

export default function PremiumProject({ project }: IProps): ReactElement {
  const {
    title, description = '', imageURL, amount, donated, id
  } = project
  const percentage = Math.round((donated / amount) * 100)
  const ongId = useAppSelector(({ ong }) => ong?.ongId) || ''
  const [progressSize, setProgressSize] = useState(250)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const { submit, ...states } = useFormSubmit<DonateSubmitForm>({
    url: getStartProjectDonationUrl(ongId), isPayment: true, redirectPath: 'causes'
  })
  const { t } = useTranslation()

  useEffect(() => {
    const resize = () => {
      setScreenWidth(window.innerWidth)
    }

    window.addEventListener('resize', resize)

    switch (true) {
      case screenWidth < 768:
        setProgressSize(150)
        break
      case screenWidth < 992:
        setProgressSize(200)
        break
      default:
        setProgressSize(250)
    }

    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [screenWidth])
  const handleSubmit = (values: DonateSubmitForm) => {
    const donationInfo = {
      ...values,
      ong_id: ongId,
      birthDate: moment(values.birthDate).format('YYYY-MM-DD'),
      project_id: id
    }

    submit(donationInfo)
  }
  return (
    <PremiumEventSection image={imageURL}>
      <EventDetails>
        <EventImage src="./assets/img/crown.png" alt="event" />
        <SectionTitle color="white" fontSize={2.8} padding={0} marginTop={0.8} marginBottom={0}>
          {title}
        </SectionTitle>
        <EventDescription>
          {HTMLReactParser(description?.slice(0, 120))}
        </EventDescription>
      </EventDetails>
      <EventDonationProgress>
        <ProgressContainer>
          <CustomProgress
            type="circle"
            showInfo
            percent={percentage}
            strokeWidth={2}
            strokeColor="white"
            trailColor="none"
            width={progressSize}
          />
          <Donated>Donated</Donated>
        </ProgressContainer>

        <DonateModal btnText={t('Donate Now')} title={`Donate to ${title}`}>
          <DonateForm modal projectId={id} submitHandler={handleSubmit} states={states} />
        </DonateModal>

      </EventDonationProgress>
    </PremiumEventSection>
  )
}

const PremiumEventSection = styled.section<{image: string}>`
  display: flex;
  justify-content: space-between;
  padding: 4rem 4.1rem;
  gap: 4rem;
  align-items: flex-start;
  margin-bottom: 6.2rem;
  background: url(${({ image }) => image}) no-repeat center center;
  background-size: cover;

  button {
    padding: 1.1rem 2.8rem;
    font-size: 1.4rem;
  }
  @media (max-width: 590px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

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
  width: 46px;
`

const EventDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.2rem;
  height: 100%;
  width: 100%;
`

const EventDescription = styled.p`
  color: #fff;
  line-height: 1.8;
  font-size: 1.375rem;
  font-weight: 200;
  margin-top: 1.4rem;
  padding-right: 4rem;

  @media (max-width: 768px) {
    padding-inline: 4.1rem;
  }

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

  .ant-progress-text {
    color: white;
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
