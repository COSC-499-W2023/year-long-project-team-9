import { EnrichedRequests } from '@obscurus/database/src/types/enrichedRequests';
import { atom, useAtom } from 'jotai';
import { Requests } from "stack/database/src/sql.generated";

const requestsAtom = atom<EnrichedRequests[] | null>(null);

export const useRequests = () => useAtom(requestsAtom);
