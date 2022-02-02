export interface SuccessType {
  reference: string
  coin: string
  human_readable_amount: number
  payment_status: string
}
export interface ErrorType {
  type: string
}

export interface ConfigProps {
  key: string
  amount: string | number
  email: string
  phone?: string
  name?: string
  callback_url?: string
  metadata?: {
    [key: string]: any
  }
  onSuccess: (response: SuccessType) => void
  onError?: (response: ErrorType) => void
  onLoad?: () => void
  onClose?: () => void
}
