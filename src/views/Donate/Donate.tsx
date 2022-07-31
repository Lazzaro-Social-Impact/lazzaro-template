import { getStartDonationUrl } from '../../api/postApiServices'
import { Footer, Navbar, DonateForm } from '../../components'
import { Flex, SectionTitle } from '../../components/common'
import { useAppSelector, usePostData } from '../../hooks'

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

function Donate() {
  const ongId = useAppSelector((state) => state.ong.ongId)
  const { mutateAsync, ...states } = usePostData<DonateSubmitForm>(getStartDonationUrl(ongId))

  const handleSubmit = async (values: DonateSubmitForm) => {
    const donationInfo = {
      ...values,
      ong_id: ongId,
    }

    await mutateAsync(donationInfo)
  }
  return (
    <>
      <Navbar />
      <Flex direction="column">
        <SectionTitle fontSize={3}>Make a donation</SectionTitle>
        <DonateForm submitHandler={handleSubmit} states={states} />
      </Flex>
      <Footer />
    </>
  )
}

export default Donate
