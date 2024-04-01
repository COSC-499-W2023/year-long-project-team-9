import { EnrichedSubmissions } from '@obscurus/database/src/types/enrichedSubmission';
import { atom, useAtom } from 'jotai';

const submissionsAtom = atom<EnrichedSubmissions[] | null>(null);

export const useSubmissions = () => useAtom(submissionsAtom);
