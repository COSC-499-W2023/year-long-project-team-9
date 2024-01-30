import { atom, useAtom } from "jotai"

import { Mail, requests } from "../../data/data"



type Config = {
  selected: Mail["id"] | null
}

const configAtom = atom<Config>({
  selected: requests[0].id,
})

export function useMail() {
  return useAtom(configAtom)
}
