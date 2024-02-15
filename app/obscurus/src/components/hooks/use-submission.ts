import { atom, useAtom } from "jotai"

import { Mail, requests } from "../../data/data"
import { Submissions } from "stacks/core/src/sql.generated"



type Config = {
  selected: Submissions["submissionId"] | null
}

const configAtom = atom<Config>({
  selected: requests[0].id,
})

export function useMail() {
  return useAtom(configAtom)
}
