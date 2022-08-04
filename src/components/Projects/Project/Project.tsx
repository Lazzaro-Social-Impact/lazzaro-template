import { ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import {
  ReadMore, Text, Image, Flex
} from '../../common'
import DonateForm from '../../Forms/DonateForm'
import DonateModal from '../../BuyModal'
import { useAppSelector, usePostData } from '../../../hooks'
import { getStartProjectDonationUrl } from '../../../api/postApiServices'
import { DonateSubmitForm } from '../../../types/interfaces'

interface ProjectProps {
  imageURL: string;
  title: string;
  id: string;
}

export function Project({ imageURL, title, id }: ProjectProps): ReactElement {
  const navigate = useNavigate()
  const ongId = useAppSelector(({ ong }) => ong?.ongId)
  const navigateTo = (path: `projects/${string}`) => () => navigate(path)

  const { mutateAsync, ...states } = usePostData<{ data: string }, DonateSubmitForm>(
    getStartProjectDonationUrl(ongId)
  )

  const handleSubmit = async (values: DonateSubmitForm) => {
    const donationInfo = { ...values, ong_id: ongId }

    const {
      data: { data: paypal },
    } = await mutateAsync(donationInfo)

    window.open(paypal, '_blank')
  }

  return (
    <ProjectCard>
      <Image src={imageURL} alt="" />
      <Text fontSize={1.1} px={1} color="white">
        {title}
      </Text>

      <ProjectFooter>
        <ReadMore fontSize={1} onClick={navigateTo(`projects/${id}`)}>
          Read more
        </ReadMore>

        <DonateModal btnText="Donate" title={`Donate to ${title}`}>
          <DonateForm projectId={id} submitHandler={handleSubmit} states={states} />
        </DonateModal>
      </ProjectFooter>
    </ProjectCard>
  )
}

const ProjectCard = styled(Flex)`
  flex: 1;
  height: 37rem;
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
