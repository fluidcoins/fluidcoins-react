import { useEffect, useState } from 'react'
import { ConfigProps } from './types'
declare const window: Window &
  typeof globalThis & {
    Fluidcoins: any
  }

const loadedScripts: {
  src?: string
} = {}

type ScriptStatusType = {
  loaded: boolean
  error: boolean
}

const fcJS = 'https://js.fluidcoins.com/pay.js'

const useFluidcoins = (props: ConfigProps) => {
  const [state, setState] = useState<ScriptStatusType>({
    loaded: false,
    error: false
  })

  useEffect(() => {
    const scriptTag = document.getElementById('fcScript')
    const scriptSrc = scriptTag && scriptTag.getAttribute('src')

    if (scriptSrc)
      return setState({
        loaded: true,
        error: false
      })

    loadedScripts.src = fcJS
    const script = document.createElement('script')
    script.id = 'fcScript'
    script.type = 'application/javascript'
    script.src = fcJS
    script.async = true

    const onScriptLoad = () => {
      setState({
        loaded: true,
        error: false
      })
    }

    const onScriptError = () => {
      delete loadedScripts.src

      setState({
        loaded: true,
        error: true
      })

      throw new Error('Unable to load Fluidcoins pay modal')
    }

    script.addEventListener('load', onScriptLoad)
    script.addEventListener('complete', onScriptLoad)
    script.addEventListener('error', onScriptError)

    document.body.appendChild(script)

    return () => {
      script.removeEventListener('load', onScriptLoad)
      script.removeEventListener('complete', onScriptLoad)
      script.removeEventListener('error', onScriptError)
    }
  }, [])

  const handlePayment = () => {
    if (state.error) throw new Error('Unable to load Fluidcoins pay modal')
    if (state.loaded) {
      const fc =
        window.Fluidcoins &&
        window.Fluidcoins({ ...props, amount: +props.amount })
      fc.setup()
      return fc.open()
    }
  }
  return handlePayment
}

export default useFluidcoins
