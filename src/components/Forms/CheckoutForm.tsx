import { SyntheticEvent, useEffect, useState } from 'react'
import {
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js'
import './style.css'
import { useNavigate } from 'react-router-dom'
import { Button, Center } from '../common'

type TClientSecret = {
    secret: string | undefined
}
export default function CheckoutForm({ secret }: TClientSecret) {
  const stripe = useStripe()
  const elements = useElements()
  const navigate = useNavigate()
  const [message, setMessage] = useState<null | string | undefined>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return
    }

    setIsLoading(true)

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `${window.location.origin}/payment-success`,
      },
    })

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === 'card_error' || error.type === 'validation_error') {
      setMessage(error.message)
    } else {
      setMessage('An unexpected error occurred.')
    }

    setIsLoading(false)
  }
  useEffect(() => {
    if (!stripe) {
      return
    }

    const clientSecret = secret

    if (!clientSecret) {
      return
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent?.status) {
        case 'succeeded':
          setMessage('Payment succeeded!')
          navigate('/payment-success')
          break
        case 'processing':
          setMessage('Your payment is processing.')
          break
        case 'requires_payment_method':
          setMessage('Your payment was not successful, please try again.')
          break
        default:
          setMessage('Something went wrong.')
          break
      }
    })
  }, [stripe, secret, navigate])

  return (
    <div className="checkout-form-stripe">
      <form
        id="payment-form"
        onSubmit={handleSubmit}
      >
        <PaymentElement id="payment-element" />
        <Center>
          <Button type="submit" disabled={isLoading || !stripe || !elements}>
            <span id="button-text">
              {isLoading ? <div className="spinner" id="spinner" /> : 'Pay now'}
            </span>
          </Button>
        </Center>
        {/* /* Show any error or success messages */}
        {message && <div id="payment-message">{message}</div>}
      </form>
    </div>
  )
}
