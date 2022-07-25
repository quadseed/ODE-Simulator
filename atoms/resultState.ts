import { atom } from "recoil"

export const eulerState = atom<number[]>({
  key: 'elulerState',
  default: []
})

export const rungeKuttaState = atom<number[]>({
  key: 'rungeKuttaState',
  default: []
})
