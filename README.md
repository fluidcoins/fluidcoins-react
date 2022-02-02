# fluidcoins-pay-react

> Official React package for Fluidcoins pay

# Fluidcoins React package

Fluidcoins - The easiest way for African businesses to accept cryptocurrencies online.

![Fluidcoins pay SDK](https://user-images.githubusercontent.com/23347440/152176475-7361211b-33e8-4230-8836-e7746ae3d8a9.png)

## Installation

```sh
npm install fluidcoins-react
```

## Usage

```js
import React from 'react'
import { useFluidcoins } from 'fluidcoins-pay-react'
// ...

export default function App() {
  const config = {
    key: 'PUBLIC_KEY',
    amount: 'AMOUNT_IN_KOBO',
    email: 'john@doe.com',
    name: 'John Doe',
    phone: '08012345678',
    metadata: {
      moniker: 'ezemmuo'
    },
    onSuccess: (data) => {
      console.log('🚀 onSuccess', data)
    },
    onError: (error) => {
      console.log('🚀 onError', error)
    },
    onClose: () => {
      console.log('🚀 onClose: SDK closed')
    },
    onLoad: () => {
      console.log('🚀 onClose: SDK closed')
    }
  }

  const handlePayment = useFluidcoins(config)
  return (
    <div className='App'>
      <h1>Fluidcoins SDK</h1>
      <button onClick={handlePayment}>Pay with Fluidcoins</button>
    </div>
  )
}
```

## Configuration Options

- [`key`](#key)
- [`email`](#userReference)
- [`amount`](#amount)
- [`name`](#name)
- [`phone`](#phone)
- [`onSuccess`](#onSuccess)
- [`onError`](#onError)
- [`onLoad`](#onLoad)
- [`onClose`](#onClose)
- [`metadata`](#metadata)

### <a name="key"></a> `key`

**string: Required**
Your public key can be found on your [dashboard](https://dashboard.fluidcoins.com/developers).

### <a name="email"></a> `email`

**string: Required**
The user's email address

### <a name="amount"></a> `amount`

**string | number: Required**
The amount you intend to send in kobo

### <a name="name"></a> `name`

**string | number: Required**
The name of the user

### <a name="phone"></a> `phone`

**string | number: Required**
The phone number of the user

### <a name="onSuccess"></a> `onSuccess`

**(response) => void: Required**
This is called when a transaction is successfully. It returns an object as a response with the transaction details.

Check the [Fluidcoins Docs](https://developers.fluidcoins.com) for response object

### <a name="onError"></a> `onError`

**(response) => void: Optional**
This is called when a transaction fails. It returns a response with error type

Check the [Fluidcoins Docs](https://developers.fluidcoins.com) for error object

### <a name="onClose"></a> `onLoad`

**(response) => void: Optional**
This is called when the SDK loads up.

### <a name="onClose"></a> `onClose`

**(response) => void: Optional**
This is called when a user clicks on the close button.

### <a name="metadata"></a> `metadata`

**object: Optional**
This object should contain additional/optional attributes you would like to have in your transaction response

## Support

If you're having trouble with Fluidcoins React package please reach out to me at <olekakamsy@gmail.com> or the Fluidcoins team at <support@fluidcoins.com> if you have issues with your integration. We're more than happy to help you out.

## Fluidcoins API References

- [Fluidcoins API Docs](https://developers.fluidcoins.com)
- [Fluidcoins Dashboard](https://dashboard.fluidcoins.com)

## License

[MIT](https://github.com/kamsy/fluidcoins-react/blob/master/LICENSE) for more information.
