import React from 'react'
import { useFluidcoins } from 'fluidcoins-react'

interface SuccessType {
  reference: string
  coin: string
  human_readable_amount: number
  payment_status: string
}
interface ErrorType {
  type: string
}

export default function App() {
  const email = 'john@doe.com'
  const config = {
    email,
    amount: '100000',
    // key: 'pspk_test_m7pbk9fbjaofi92shcgxq8is4pfgxl0t0bq3g3bmrp7iq',
    key: 'pk_test_a934727e5be545f1bb27bd367750b5b5',
    metadata: {
      moniker: 'ezemmuo'
    },
    onSuccess: (data: SuccessType) => {
      console.log('🚀 onSuccess', data)
    },
    onError: (error: ErrorType) => {
      console.log('🚀 onError', error)
    },
    onClose: () => {
      console.log(`🚀 onClose: SDK closed by ${email}`)
    },
    onLoad: () => {
      console.log('🚀 SDK loaded')
    }
  }

  const handlePayment = useFluidcoins(config)
  return (
    <div className='App'>
      <h1>Fluidcoins SDK </h1>
      <button onClick={handlePayment}>Pay with Fluidcoins</button>
    </div>
  )
}
