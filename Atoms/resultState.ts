import { atom } from "recoil"

export const elulerState = atom<number[]>({
  key: 'elulerState',
  default: []
})

export const rungeKuttaState = atom<number[]>({
  key: 'rungeKuttaState',
  default: []
})