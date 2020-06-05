export const preventVSCodeError = 1

{
  {
    type RelativePath = string
    // 'no'
    type T0 = RelativePath extends object ? 'yes' : 'no'
  }
  {
    type RelativePath = string & { __brand: unknown }
    type RelativePath1 = String & { __brand: unknown }
    type KEYS1 = keyof RelativePath // like String  & { __brand: unknown }
    type KEYS2 = keyof RelativePath1 // like String  & { __brand: unknown }
    // 'yes'
    type T0 = RelativePath extends object ? 'yes' : 'no'
  }
  {
    type RelativePath = string | { __brand: unknown }
    // 'no'
    type T0 = RelativePath extends object ? 'yes' : 'no'
  }
}
