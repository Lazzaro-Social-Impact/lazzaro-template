import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { useParams } from 'react-router-dom'
import CheckoutForm from '../Forms/CheckoutForm'

const stripePromise = loadStripe('pk_test_b8602Fd2SVOySbs7AngcMs68')

type TClientSecret = {
    secret: string
}
function StripeContainer({ secret }: TClientSecret) {
  const { secret: clientSecretParams, } = useParams()

  const options = {
    // clientSecret coming from the form or the param url
    clientSecret: secret || clientSecretParams,
  }
  return (
    <div>
      {(secret || clientSecretParams) && (
      <Elements stripe={stripePromise} options={options}>
        <CheckoutForm secret={secret || clientSecretParams} />
      </Elements>
      )}
    </div>
  )
}

export default StripeContainer
