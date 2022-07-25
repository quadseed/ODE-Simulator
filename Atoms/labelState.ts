import { atom } from "recoil"

export const labelState = atom<number[]>({
  key: 'labelState',
  default: []
})