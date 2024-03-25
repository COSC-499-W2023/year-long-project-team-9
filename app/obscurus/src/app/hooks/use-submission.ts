import { atom, useAtom } from "jotai"
import { Submissions } from "@obscurus/database/src/sql.generated"


type Config = {
  submissionId: Submissions["submissionId"] | null
}

const configAtom = atom<Config>({
  submissionId: null,
})

export function useSubmission() {
  return useAtom(configAtom)
}
