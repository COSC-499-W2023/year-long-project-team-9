import { atom, useAtom } from "jotai"
import { Submissions } from "@obscurus/database/src/sql.generated"
import { EnrichedSubmissions } from "@obscurus/database/src/types/enrichedSubmission"


type Config = {
  submissionId: EnrichedSubmissions["submissionId"] | null
}

const configAtom = atom<Config>({
  submissionId: null,
})

export function useSubmission() {
  return useAtom(configAtom)
}
