type Mode = 'input' | 'select' | 'checkbox' | 'textarea' | 'buttons'

export interface FormTypes {
  mode: Mode
  name: string
  label: string
  array?: string[]
  max?: number
  row?: number
  placeholder?: string
}
