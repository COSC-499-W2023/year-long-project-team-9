import { atom, useAtom } from "jotai"
import { Requests } from "@obscurus/database/src/sql.generated"


type Config = {
  requestId: Requests["requestId"] | null
}

const configAtom = atom<Config>({
  requestId: null,
})

export function useRequest() {
  return useAtom(configAtom)
}
