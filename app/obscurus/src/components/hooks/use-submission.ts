import { atom, useAtom } from "jotai"

import { Mail, requests } from "../../data/data"
import { submissions } from "stacks/core/migrations/sql.generated"



type Config = {
  selected: submissions["submission_id"] | null
}

const configAtom = atom<Config>({
  selected: requests[0].id,
})

export function useMail() {
  return useAtom(configAtom)
}
