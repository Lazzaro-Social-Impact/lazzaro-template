import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { useParams } from 'react-router-dom'
import CheckoutForm from '../Forms/CheckoutForm'

const stripePromise = loadStripe('pk_live_3bEHfZGESiO6objCXzJxzYmE')

type TClientSecret = {
    secret: string | undefined
}
function StripeContainer({ secret }: TClientSecret): any {
  const { secret: clientSecretParams } = useParams()

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
