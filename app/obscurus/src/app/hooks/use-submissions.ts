// Inside useRequests.js
import { atom, useAtom } from 'jotai';
import { Submissions } from "stack/database/src/sql.generated";

const submissionsAtom = atom<Submissions[] | null>(null);

export const useSubmissions = () => useAtom(submissionsAtom);
