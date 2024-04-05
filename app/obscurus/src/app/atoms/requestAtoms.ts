
import { atom } from 'jotai';

export const layoutAtom = atom({ defaultLayout: undefined, defaultCollapsed: undefined });
export const selectedRequestAtom = atom(null);
export const requestsAtom = atom([]);
export const submissionsAtom = atom([]);
