import { atom, useAtom } from 'jotai';
import { Notifications } from "stack/database/src/sql.generated";

const notificationsAtom = atom<Notifications[] | null>(null);

export const useNotifications = () => useAtom(notificationsAtom);
