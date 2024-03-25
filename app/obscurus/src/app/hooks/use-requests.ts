import { atom, useAtom } from 'jotai';
import { Requests } from "stack/database/src/sql.generated";

const requestsAtom = atom<Requests[] | null>(null);

export const useRequests = () => useAtom(requestsAtom);
