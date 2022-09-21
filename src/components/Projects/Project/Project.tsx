import { type ReactElement } from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { useTranslation } from 'react-i18next'
import {
  Text, Flex, Link
} from '../../common'
import DonateForm from '../../Forms/DonateForm'
import DonateModal from '../../BuyModal'
import { useAppSelector, useFormSubmit } from '../../../hooks'
import { getStartProjectDonationUrl } from '../../../api/postApiServices'
import { DonateSubmitForm } from '../../../types/interfaces'
import { LazyImageComponent } from '../../common/LazyImage'

interface ProjectProps {
  imageURL: string;
  title: string;
  id: string;
}

export function Project({ imageURL, title, id }: ProjectProps): ReactElement {
  const ongId = useAppSelector(({ ong }) => ong?.ongId) || ''
  const { submit, ...states } = useFormSubmit<DonateSubmitForm>({
    url: getStartProjectDonationUrl(ongId), isPayment: true, redirectPath: 'causes'
  })

  const { t } = useTranslation()
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
    <ProjectCard>
      <LazyImageComponent
        width="100%"
        height="100%"
        src={imageURL}
        alt={title}
        effect="blur"
        placeholderSrc={imageURL}
      />
      <Text zIndex="1" fontSize={1.1} px={1} color="white">
        {title}
      </Text>

      <ProjectFooter>
        <Link size={1} to={`causes/${id}`} underlined>
          {t('Read More')}
        </Link>

        <DonateModal btnText={t('Donate')} title={`Donate to ${title}`}>
          <DonateForm modal projectId={id} submitHandler={handleSubmit} states={states} />
        </DonateModal>
      </ProjectFooter>
    </ProjectCard>
  )
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
`

const ProjectFooter = styled(Flex)`
  padding: 1.2rem;
  @media (max-width: 768px) {
    button {
      font-size: 1rem;
      padding: 0.6rem 0.7rem;
    }
  }
`
