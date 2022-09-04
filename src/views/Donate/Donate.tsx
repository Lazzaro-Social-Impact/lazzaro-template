import { getStartDonationUrl } from '../../api/postApiServices'
import { Footer, DonateForm, Navbar } from '../../components'
import { Flex, SectionTitle } from '../../components/common'
import { useAppSelector, useFormSubmit } from '../../hooks'
import { DonateSubmitForm } from '../../types/interfaces'

function Donate() {
  const ongId = useAppSelector((state) => state.ong.ongId) || ''

  const { submit, ...states } = useFormSubmit<DonateSubmitForm>(getStartDonationUrl(ongId))

  const handleSubmit = (values: DonateSubmitForm) => {
    const donationInfo = { ...values, ong_id: ongId, }

    submit(donationInfo)
  }

  return (
    <>
      <Navbar />
      <Flex direction="column" textAlign="left">
        <SectionTitle fontSize={3}>Make a donation</SectionTitle>
        <DonateForm submitHandler={handleSubmit} states={states} />
      </Flex>
      <Footer />
    </>
  )
}

export default Donate
