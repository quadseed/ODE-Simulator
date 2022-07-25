import { atom } from "recoil"

export const labelState = atom<number[]>({
  key: 'labelState',
  default: []
})

export const functionState = atom<number[]>({
  key: 'functionState',
  default: []
})