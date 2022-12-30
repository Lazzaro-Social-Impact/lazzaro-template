import { type ReactElement } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Text, Flex, Link } from '../../common';
import DonateModal from '../../BuyModal';
import { LazyImageComponent } from '../../common/LazyImage';
import ProjectDonation from '../../Forms/ProjectDonation';

interface ProjectProps {
  imageURL: string;
  title: string;
  id: string;
}

export function Project({ imageURL, title, id }: ProjectProps): ReactElement {
  const { t } = useTranslation();

  return (
    <ProjectCard>
      <LazyImageComponent
        width='100%'
        height='100%'
        src={imageURL}
        alt={title}
        effect='blur'
        placeholderSrc={imageURL}
      />
      <Text zIndex='1' fontSize={1.4} weight='600' px={1} color='white'>
        {title}
      </Text>

      <ProjectFooter>
        <Link size={1} to={`causes/${id}`} underlined>
          {t('Read More')}
        </Link>

        <DonateModal btnText={t('Donate')} title={`Donate to ${title}`}>
          <ProjectDonation modal projectId={id} />
        </DonateModal>
      </ProjectFooter>
    </ProjectCard>
  );
}

const ProjectCard = styled(Flex)`
  flex: 1;
  height: 36.25rem;
  border: 1px solid #ccc;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-end;
  align-items: stretch;
  text-align: left;
  .lazy-load-image-background.blur.lazy-load-image-loaded {
    position: absolute;
    height: 36.25rem !important;
  }

  img {
    position: absolute;
    z-index: -1;
    filter: brightness(0.5);
  }
`;

const ProjectFooter = styled(Flex)`
  padding: 1.2rem;
  @media (max-width: 768px) {
    button {
      font-size: 1rem;
      padding: 0.6rem 0.7rem;
    }
  }
`;
