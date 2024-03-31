// Inside useRequests.js
import { EnrichedSubmissions } from '@obscurus/database/src/types/enrichedSubmission';
import { atom, useAtom } from 'jotai';
import { Submissions } from "stack/database/src/sql.generated";

const submissionsAtom = atom<EnrichedSubmissions[] | null>(null);

export const useSubmissions = () => useAtom(submissionsAtom);
