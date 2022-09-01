import { useNavigate } from 'react-router-dom'
import { getStartDonationUrl } from '../../api/postApiServices'
import { Footer, DonateForm, Navbar } from '../../components'
import { Flex, SectionTitle } from '../../components/common'
import { useAppSelector, usePostData } from '../../hooks'
import { DonateSubmitForm } from '../../types/interfaces'

function Donate() {
  const ongId = useAppSelector((state) => state.ong.ongId) || ''
  const {
    mutateAsync, ...states
  } = usePostData<{data:string}, DonateSubmitForm>(getStartDonationUrl(ongId))
  const paymentMethod = useAppSelector((state) => state.ong.ongConfig?.platformConfig?.payment_method)
  const navigate = useNavigate()
  const handleSubmit = async (values: DonateSubmitForm) => {
    const donationInfo = {
      ...values,
      ong_id: ongId,
    }
    if (paymentMethod === 'stripe') {
      const { data: { clientSecret } } : any = await mutateAsync(donationInfo)
      return navigate(`/checkout/${clientSecret}`)
    }
    const {
      data: { data: paypal },
    } = await mutateAsync(donationInfo)

    window.open(paypal, '_blank')?.focus()
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
