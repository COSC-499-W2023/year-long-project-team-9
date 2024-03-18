import { atom, useAtom } from "jotai"
import { Requests } from "@obscurus/database/src/sql.generated"


type Config = {
  selected: Requests["requestId"] | null
}

const configAtom = atom<Config>({
  selected: null,
})

export function useRequest() {
  return useAtom(configAtom)
}
