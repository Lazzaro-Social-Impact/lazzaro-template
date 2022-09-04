import { type ReactElement } from 'react'
import styled from 'styled-components'
import {
  Text, Image, Flex, Link
} from '../../common'
import DonateForm from '../../Forms/DonateForm'
import DonateModal from '../../BuyModal'
import { useAppSelector, useFormSubmit } from '../../../hooks'
import { getStartProjectDonationUrl } from '../../../api/postApiServices'
import { DonateSubmitForm } from '../../../types/interfaces'

interface ProjectProps {
  imageURL: string;
  title: string;
  id: string;
}

export function Project({ imageURL, title, id }: ProjectProps): ReactElement {
  const ongId = useAppSelector(({ ong }) => ong?.ongId) || ''
  const { submit, ...states } = useFormSubmit<DonateSubmitForm>(getStartProjectDonationUrl(ongId))

  const handleSubmit = (values: DonateSubmitForm) => {
    const donationInfo = { ...values, ong_id: ongId }

    submit(donationInfo)
  }

  return (
    <ProjectCard>
      <Image src={imageURL} alt="" />
      <Text fontSize={1.1} px={1} color="white">
        {title}
      </Text>

      <ProjectFooter>
        <Link size={1} to={`causes/${id}`} underlined>
          Read more
        </Link>

        <DonateModal btnText="Donate" title={`Donate to ${title}`}>
          <DonateForm projectId={id} submitHandler={handleSubmit} states={states} />
        </DonateModal>
      </ProjectFooter>
    </ProjectCard>
  )
}

const ProjectCard = styled(Flex)`
  flex: 1;
  height: 50rem;
  border: 1px solid #ccc;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-end;
  align-items: stretch;
  text-align: left;

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
