import { ReactElement } from 'react';
import styled from 'styled-components';
import { Progress } from 'antd';
import HTMLReactParser from 'html-react-parser';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from '../common';
import { IProject } from '../../types/interfaces';
import Modal from '../BuyModal';
import useResize from '../../hooks/useResize';
import ProjectDonation from '../Forms/ProjectDonation';

type Props = {
  project: IProject | Record<string, never>;
};

export default function PremiumProject({ project }: Props): ReactElement {
  const { title, description = '', imageURL, amount, donated, id } = project;
  const percentage = Math.round((donated / amount) * 100);
  const { t } = useTranslation();
  const progressSize = useResize({ objectToResizeInitialWidth: 250, mediumSize: 200, smallSize: 150 });

  return (
    <PremiumEventSection image={imageURL}>
      <EventDetails>
        <EventImage src='./assets/img/crown.png' alt='event' />
        <SectionTitle color='white' fontSize={2.8} padding={0} marginTop={0.8} marginBottom={0}>
          {title}
        </SectionTitle>
        <EventDescription>{HTMLReactParser(description?.slice(0, 120))}</EventDescription>
      </EventDetails>
      <EventDonationProgress>
        <ProgressContainer>
          <CustomProgress
            type='circle'
            showInfo
            percent={percentage}
            strokeWidth={2}
            strokeColor='white'
            trailColor='none'
            width={progressSize}
          />
          <Donated>Donated</Donated>
        </ProgressContainer>

        <Modal btnText={t('Donate Now')} title={`Donate to ${title}`}>
          <ProjectDonation modal projectId={id} />
        </Modal>
      </EventDonationProgress>
    </PremiumEventSection>
  );
}

const PremiumEventSection = styled.section<{ image: string }>`
  display: flex;
  justify-content: space-between;
  padding: 4rem 4.1rem;
  gap: 4rem;
  align-items: flex-start;
  margin-bottom: 6.2rem;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%),
    url(${({ image }) => image}) no-repeat center center;
  background-size: cover;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

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
`;
const EventImage = styled.img`
  width: 46px;
`;

const EventDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.2rem;
  height: 100%;
  width: 100%;
`;

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
`;
const EventDonationProgress = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.8rem;
  align-items: center;
  height: 100%;
  padding-left: 9.2rem;
`;
const ProgressContainer = styled.div`
  position: relative;
`;
const CustomProgress = styled(Progress)`
  .ant-progress-inner {
    font-weight: bold;
  }

  .ant-progress-text {
    color: white;
  }
`;
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
`;
