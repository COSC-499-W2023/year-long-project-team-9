import { Users } from '@obscurus/database/src/sql.generated';
import { atom, useAtom } from 'jotai';

const userAtom = atom<Users | null>(null);

export const useUser = () => useAtom(userAtom);
