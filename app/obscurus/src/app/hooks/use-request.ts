import { atom, useAtom } from "jotai"
import { EnrichedRequests } from "@obscurus/database/src/types/enrichedRequests"


type Config = {
  requestId: EnrichedRequests["requestId"] | null
}

const configAtom = atom<Config>({
  requestId: null,
})

export function useRequest() {
  return useAtom(configAtom)
}
