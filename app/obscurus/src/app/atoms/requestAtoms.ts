import { atom } from 'jotai';
import { Requests, Submissions } from '@obscurus/database/src/sql.generated';

export const requestsAtom = atom<Requests[]>([]);
export const submissionsAtom = atom<Submissions[]>([]);
export const selectedRequestAtom = atom<Requests | null>(null);
