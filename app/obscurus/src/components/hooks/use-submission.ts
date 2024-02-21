import { atom, useAtom } from "jotai"

import { Mail, requests } from "../../data/data"
import { Submissions } from "stacks/core/src/sql.generated"



type Config = {
  selected: Submissions["requestId"] | null
}

const configAtom = atom<Config>({
  selected: null,
})

export function useSubmission() {
  return useAtom(configAtom)
}
