import { ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { ReadMore, Text, Image } from '../../common'
import DonateForm from '../../Forms/DonateForm'
import DonateModal from '../../BuyModal'
import { useAppSelector, usePostData } from '../../../hooks'
import { getStartProjectDonationUrl } from '../../../api/postApiServices'

interface ProjectProps {
  imageURL: string;
  title: string;
  id: string;
}

  interface DonateSubmitForm {
    firstName: string;
    lastName: string;
    user_email: string;
    home_address: string;
    birthDate: Date;
    nif: number;
    amount: number;
    anonymous: boolean;
    message?: string;
    certificate: boolean;
    terms: boolean;
  }

export function Project({ imageURL, title, id }: ProjectProps): ReactElement {
  const navigate = useNavigate()
  const ongId = useAppSelector(({ ong }) => ong?.ongId)
  const navigateTo = (path: `projects/${string}`) => () => navigate(path)

  const {
    mutateAsync, ...states
  } = usePostData<DonateSubmitForm>(getStartProjectDonationUrl(ongId))

  const handleSubmit = async (values: DonateSubmitForm) => {
    const donationInfo = { ...values, ong_id: ongId, }

    const { data: { data: paypal } } = await mutateAsync(donationInfo)
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

const ProjectCard = styled.div`
  flex: 1;
  height: 37rem;
  border: 1px solid #ccc;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  span {
    color: #fff;
    padding: 0 1.2rem;
    font-size: 1.2rem;
    line-height: 1.8;
    width: 55%;
  }

  img {
    position: absolute;
    z-index: -1;
    height: 100%;
    width: 100%;
    object-fit: cover;
    filter: brightness(0.5);
  }

  @media (max-width: 768px) {
    span {
      width: 100%;
    }
  }
`

const ProjectFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem;
`
